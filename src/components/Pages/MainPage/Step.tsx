import React, {useEffect} from 'react'
import {Box} from "@mui/material"
import Image from "next/image"
import {useDisconnect} from "wagmi";
import {useAppKit, useAppKitAccount} from '@reown/appkit/react'
import {WalletConnectButton} from "@/components/WalletConnectButton.tsx"
import {useDispatch} from "react-redux"
import {connectHandler} from "@/utils/connectHandler.ts"

const Step = ({item, setState}) => {
  const {address, isConnected: isConnect} = useAppKitAccount()
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
      marginTop: '50px',
      // boxSizing: 'border-box'
      height: '100%',
      minHeight: '100%',
      display: 'block',
    }}>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        padding: '24px 18px',
        marginBottom: '20px',
      }}>
        <Image src={item?.image} alt={'curso'}/>
      </Box>
      <Box sx={{}}>
        <Box style={{
          fontWeight: '700',
          lineHeight: '28.13px',
          fontSize: '24px',
          textAlign: 'center',
        }}>
          {item?.title}
        </Box>
        <Box style={{
          color: '#8F8F8F',
          marginTop: '16px',
          textAlign: 'center',
          fontWeight: '400'
        }}>
          {item?.description}
        </Box>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          marginTop: '24px',
        }}>
          {item.connect
            ?
            <>
              <WalletConnectButton onConnect={onConnect}/>
              <Box sx={{
                color: '#8F8F8F',
                fontSize: '14px',
                width: '100%',
                textAlign: 'center',
                padding: '10px 0',
                cursor: 'pointer'
              }}>Take a look around</Box>
            </>
            :
            <>
              <Box sx={{
                borderRadius: '100px',
                backgroundColor: '#56AAC8',
                width: '100%',
                padding: '10px 0',
                fontWeight: '500',
                fontFamily: 'HarmonyOS Sans, serif',
                fontSize: '16px',
                textAlign: 'center',
                border: 'none',
                outline: 'none',
                color: '#fff',
                cursor: 'pointer',
              }}
                   onClick={() => {
                     console.log('click')
                     setState((step) => step + 1)
                   }}
              >Next</Box>
              <Box sx={{
                color: '#8F8F8F',
                fontSize: '14px',
                width: '100%',
                textAlign: 'center',
                padding: '10px 0',
                cursor: 'pointer'
              }}>Skip</Box>
            </>
          }
        </Box>
      </Box>
    </Box>
  )
}

export default Step