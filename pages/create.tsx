import {TitleTypography} from '../components/Typography/TitleTypography.tsx'
import BackArrow from '../icons/backArrow.tsx'
import Info from '../icons/info.tsx'
import BasicForm from '../components/Form/BasicForm.tsx'
import ActionButton from '../components/Form/ActionButton.tsx'
import {Box} from '@mui/material'
import {useState} from 'react'
import FirstStep from '../components/Form/FirstStep.tsx'
import {useForm, useFormContext} from 'react-hook-form'
import {object, string} from "yup"
import {yupResolver} from '@hookform/resolvers/yup'
import Confirmation from "../components/Form/Confirmation.tsx"
import StartStreamModal from "../components/Form/Modal/StartStreamModal.tsx"
import Form from "../components/Form/Form.tsx"
import {ethers} from "ethers"
import {USDC_DECIMALS} from "../blockchain/constants.ts"
import {useSelector} from "react-redux"
import {rateOptions} from "../options/StreamFormOptions.ts"
import {getPermitSignature} from "../blockchain/permit.ts"
import {encodeFunctionData, parseUnits} from "viem"
import {getWalletClient} from "@wagmi/core"
import {config, publicClient} from "../wagmi-config.ts"
import {streamContractABI, streamContractAddress} from "../blockchain/constraints.ts"
import {signMetaTxRequest} from "../blockchain/signMetaTxRequest.ts"
import {useRouter} from "next/router"
import Layout from "../components/Layout"
import { useTranslation } from 'next-i18next'

const CreateStreamPage = () => {
  const record = {
    rate: 1,
    cancellation: 0,
    amount: '',
    duration: 60 * 60 * 1000
  }

  // @ts-ignore
  const validationSchema = object().shape({
    amount: string()
      .matches(/^[0-9.,]+$/, 'Only numbers, dots, and commas are allowed')
      .required('This field is required'),
  })


  const methods = useForm({
    defaultValues: record,
    resolver: yupResolver(validationSchema),
  })


  return (
    <Form methods={methods}>
      <CreateStreamForm/>
    </Form>
  )
}

const CreateStreamForm = () => {
  const router = useRouter()
  const {t} = useTranslation('common')
  const address = useSelector((state: any) => state.user.address)
  const [step, setStep] = useState(0)
  const [openStartModal, setOpenStartModal] = useState(false)
  const {getValues} = useFormContext()

  const changeStepHandler = () => {
    if (step === 0) setStep(1)
    else setStep(2)
  }

  const submitHandler = async () => {
    setOpenStartModal(true)
    console.log("config", config)

    const addressFormValue = getValues('address')
    const amount = getValues('amount')
    const duration = getValues('duration')
    const title = getValues('title')
    const rate = getValues('rate')
    const streamRate = rateOptions.find(item => item.id === rate) || null

    console.log('duration', duration)

    console.log('amount', amount)

    const totalAmount = (Number(amount) / (streamRate?.value ?? 1)) * (duration / 1000)
    const streamAmount = ethers.utils.parseUnits(String(totalAmount), USDC_DECIMALS)
    const endTime = Math.floor((new Date().getTime() + duration) / 1000)
    const amountTest = parseUnits(String(totalAmount), USDC_DECIMALS);
console.log('totalAmount', totalAmount)
   console.log('streamAmount', streamAmount)
    // console.log("amountTest", amountTest)


    const streamArgs: any = {
      amount: amountTest,
      address,
      recipient: addressFormValue,
      startNow: true,
      start: 0,
      end: endTime,
      block: 0,
      title,
      whoCancel: 0,
      rate: streamRate?.value,
      duration,
      router: router
    };

    async function startStream(streamArgs: any) {
      // await updatePermitSignature(amountTest)
      try {
        const sig = await getPermitSignature(address, streamArgs.amount);
        console.log("sig", sig)
        try {
          const walletClient = await getWalletClient(config);

          if (!walletClient) {
            throw new Error('No wallet client found');
          }

          const accountAddress = walletClient.account.address;

          const streamDetails = {
            deposit: streamArgs.amount,
            recipient: streamArgs.recipient,
            whoCancel: streamArgs.whoCancel,
            sender: streamArgs.address,
            time: [
              streamArgs.startNow ? 0 : streamArgs.start,
              streamArgs.end,
              streamArgs.block,
            ],
          };

          const createStreamData = encodeFunctionData({
            abi: streamContractABI,
            functionName: 'createStream',
            args: [streamDetails, sig, streamArgs.title],
          });

          console.log("createStreamData", createStreamData)

          const gasEstimation = await publicClient.estimateContractGas({
            address: streamContractAddress,
            abi: streamContractABI,
            functionName: 'createStream',
            args: [streamDetails, sig, streamArgs.title],
            account: walletClient.account,
          });

          console.log("gasEstimation", gasEstimation)

          const metaTxData: any = {
            to: streamContractAddress,
            data: createStreamData,
            deadline: Math.floor(Date.now() / 1000) + 3600, // 1 hour from now
            gas: ((gasEstimation * BigInt(140)) / BigInt(100)).toString(), // add 40%
            from: accountAddress,
          };

          console.log("metaTxData", metaTxData)

          const request = await signMetaTxRequest(
            walletClient,
            publicClient,
            metaTxData
          )

          console.log("request", request)

          const response = await fetch('/api/relayer-request', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(request),
          });


          console.log("response", response)

          const responseData = await response.json();
          console.log("responseData", responseData)

          if (responseData.success) {
            console.log('Hash:', responseData.txHash);
            setOpenStartModal(false)
            // setCreateStreamError(false);
            // dispatch(getData(1, true) as any);
            // router?.push('/');
          } else {
            console.error('Response error:', responseData.error);
            // setCreateStreamError(true);
          }

          console.log('request', request)

        } catch (err) {
          console.error("Error during streams creation:", err);
        }
      } catch (err) {
        // setCreateStreamError(true);
        // dispatch({ type: RepeatActionTypes.STOP_REPEAT_STREAM });
        console.error('Error during permit signature request:', err);
      } finally {
        // setLoading(false);
      }
    }

    await startStream(streamArgs).then()
  }

  const modalCloseHandler = () => setOpenStartModal(false)

  return (
    <Layout>
      <header style={{
        width: '100%',
        padding: '12px 0',
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'space-around',
        gap: '20px',
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        zIndex: '3',
        backgroundColor: '#fff',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <Box height='30px' onClick={() => {
          if (step === 0) router.push('/')
          if (step === 1) setStep(0)
          if (step === 2) setStep(1)
        }}><BackArrow/></Box>
        <TitleTypography>{step === 2 ? t('header:confirmation') : t('header:basicStream')}</TitleTypography>
        <Info/>
      </header>
      <Box
        sx={{
          padding: '16px 20px 80px 20px', marginTop: '54px',
          // maxWidth: '800px',
          // margin: '0 auto'
        }}
      >
        {step === 0
          ? <FirstStep/>
          : step === 1
            ? <BasicForm setStep={setStep}/>
            : <Confirmation/>
        }
      </Box>
      <ActionButton changeStep={step === 2 ? submitHandler : changeStepHandler}
                    title={step === 2 ? t('common:start') : t('continue')} step={step}/>
      <StartStreamModal openModal={openStartModal} handleModalClose={modalCloseHandler}/>
    </Layout>
  )
}

export default CreateStreamPage