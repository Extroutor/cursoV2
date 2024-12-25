import {Box} from '@mui/material'
import {useFormContext} from "react-hook-form"
import {WalletConnectButton} from "@/components/WalletConnectButton.tsx";
import React, {useEffect} from "react";
import {useDisconnect} from "wagmi";
import {useDispatch, useSelector} from "react-redux";
import {connectHandler} from "@/utils/connectHandler.ts";
import {useAppKit, useAppKitAccount} from "@reown/appkit/react";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ActionButton = ({step, changeStep, title}: { step?: number, changeStep: any, title: string }) => {
  const {
    watch,
    formState: {errors},
  } = useFormContext()
  const {address, isConnected: isConnect} = useAppKitAccount();
  const isConnecting = useSelector((state: any) => state.user.isConnect)

  const isDisabled = Object.keys(errors).length !== 0
    || (step === 0 && !watch('address'))
    || (step === 1 && (!watch('amount') || !watch('duration')))

  const {open} = useAppKit()
  const {disconnect} = useDisconnect()
  const dispatch = useDispatch()

  useEffect(() => {
    if (address && isConnect) connectHandler(address, dispatch).then()
    else disconnect()

  }, [address, isConnect])

  const onConnect = async () => {
    disconnect()
    open()
  }

  return (
    <>
      {!isConnecting && step !== 1
        ?
        <Box sx={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          left: '20px',
          maxWidth: '800px',
          margin: '0 auto',
          cursor: 'pointer'
        }}
             onClick={() => {
               if (!isDisabled) changeStep()
             }}
        >
          <Box sx={{
            backgroundColor: isDisabled ? '#E5E5E5' : '#56AAC8',
            color: isDisabled ? '#8F8F8F' : '#292929',
            fontWeight: '500',
            fontSize: '16px',
            lineHeight: '18.75px',
            textAlign: 'center',
            borderRadius: '100px',
            padding: '10px 24px'
          }}>
            {title}
          </Box>
        </Box>
        :
        <Box sx={{
          position: 'absolute',
          bottom: 0,
          // width: '100%',
          left: 0,
          right: 0,
          padding: '24px 20px',
          bgcolor: '#fff',
          maxWidth: '800px',
          margin: '0 auto',
        }}>
            <WalletConnectButton onConnect={onConnect}/>
        </Box>
      }
    </>
  )
}

export default ActionButton