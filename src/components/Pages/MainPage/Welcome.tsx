import {Box} from "@mui/material"
import mainImg from "@/icons/content.svg"
import {useAppKit, useAppKitAccount} from '@reown/appkit/react'
import {useDisconnect} from "wagmi"
import {connectHandler} from "@/utils/connectHandler"
import {useDispatch} from "react-redux"
import {useEffect} from "react"
import Image from 'next/image';
import {WalletConnectButton} from "@/components/WalletConnectButton.tsx"
import {useTranslation} from "react-i18next";

const Welcome = () => {
  const { t } = useTranslation();
  const {address, isConnected: isConnect} = useAppKitAccount();
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
    <Box sx={{
      marginTop: '62px',
      // boxSizing: 'border-box'
      height: '100%',
      minHeight: '100%',
      display: 'block',
    }}>
      <Box sx={{
        display: 'block',

        borderRadius: '20px',
        bgcolor: '#F4F4F4',
        height: 'calc(100vh - 82px)',
        position: 'relative',
        minHeight: '100%'
      }}>
        <Box sx={{
          width: '100%',
          // height: '100vh'
        }}>
          <Image
            src={mainImg}
            alt='main'
            style={{
              borderRadius: '20px',
              height: '100%',
              width: '100%',
            }}
            layout="responsive"
          />
        </Box>
        <Box sx={{
          padding: '20px',
          position: 'absolute',
          bottom: '0px'
        }}>
          <Box style={{
            fontWeight: '700',
            lineHeight: '42.19px',
            fontSize: '36px',
          }}>
            {t('welcome:text1')} <span style={{color: '#56AAC8'}}>Curso</span> {t('welcome:text2')}
          </Box>
          <span style={{
            color: '#8F8F8F',
            marginTop: '8px',
          }}>{t('welcome:description')} 👀</span>
          <WalletConnectButton onConnect={onConnect}/>
          {/*<WalletConnectButton/>*/}
          {/*<appkit-button />*/}
          </Box>
      </Box>
    </Box>
  )
}

export default Welcome