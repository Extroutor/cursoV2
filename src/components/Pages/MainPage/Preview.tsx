import React, {useEffect} from 'react';
import {Box} from "@mui/material"
import Image from "next/image"
import {WalletConnectButton} from "@/components/WalletConnectButton.tsx";
import {useDisconnect} from "wagmi";
import {useDispatch} from "react-redux";
import {connectHandler} from "@/utils/connectHandler.ts";
import {useAppKit, useAppKitAccount} from "@reown/appkit/react";
import {setConnection} from "@/store/reducers/userReducer.ts";

const Preview = ({img, title, description, connect}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  img: any,
  title: string,
  description: string,
  connect?: boolean
}) => {
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
    open().then(() => {
      console.log('test')
      console.log("address", address)
      if (address && address !== '1') dispatch(setConnection(true))
    })
  }

  return (
    <Box sx={{
      height: 'calc(100vh - 54px - 80px)',
    }}
    >
      <Box sx={{
        marginTop: '50px',
        // boxSizing: 'border-box'
        height: '100%',
        minHeight: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '20px',
        }}>
          <Image src={img} alt={'curso'}/>
        </Box>
        <Box padding='0px 18px'>
          <Box style={{
            fontWeight: '700',
            lineHeight: '28.13px',
            fontSize: '24px',
            textAlign: 'center',
          }}>
            {title}
          </Box>
          <Box style={{
            color: '#8F8F8F',
            marginTop: '8px',
            textAlign: 'center',
            fontWeight: '400'
          }}>
            {description}
          </Box>
          {connect && <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            // width: '100%',
            maxWidth: '800px',
            margin: '0 auto',
          }}>
              <WalletConnectButton onConnect={onConnect}/>
          </Box>
          }
        </Box>
      </Box>
    </Box>
  )
}

export default Preview;