import React, {useEffect} from 'react'
import {Box} from "@mui/material"
import {useDisconnect} from "wagmi";
import {useAppKit, useAppKitAccount} from '@reown/appkit/react'
import {WalletConnectButton} from "@/components/WalletConnectButton.tsx"
import {useDispatch} from "react-redux"
import {connectHandler} from "@/utils/connectHandler.ts"
import ProgressTab from "@/components/Pages/MainPage/ProgressTab.tsx";
import {useRouter} from "next/router";
import {showIntro} from "@/store/reducers/uiReducer.tsx";
import {mockAddress, setConnection} from "@/store/reducers/userReducer.ts";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Step = ({item, step, setState}: { item: any, step: any, setState: any }) => {
  const {address, isConnected: isConnect} = useAppKitAccount()
  const {open} = useAppKit()
  const {disconnect} = useDisconnect()
  const dispatch = useDispatch()
  const router = useRouter()

  useEffect(() => {
    if (address && isConnect) connectHandler(address, dispatch).then()
    else disconnect()

  }, [address, isConnect])

  const onConnect = async () => {
    disconnect()
    open().then(() => dispatch(setConnection(true)))
  }

  return (
    <Box sx={{
      marginTop: '24px',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      // marginBottom: '141px',
      // paddingBottom: '141px',
      // position: 'relative',
    }}>
      <ProgressTab count={5} active={step}/>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        padding: '24px 18px',
        alignItems: 'center',
        marginBottom: '20px',
      }}>
        {React.createElement(item.image)}
      </Box>
      <Box sx={{
        paddingBottom: '124px',
      }}>
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
          position: 'fixed',
          bottom: 0,
          // width: '100%',
          left: 0,
          right: 0,
          padding: '0px 20px 24px',
          bgcolor: '#fff',
          maxWidth: '800px',
          margin: '0 auto',
        }}>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}>
            {item.connect
              ?
              <>
                <WalletConnectButton onConnect={onConnect}/>
                <Box sx={{
                  color: '#8F8F8F',
                  fontSize: '14px',
                  width: '100%',
                  height: '36px',
                  boxSizing: 'border-box',
                  textAlign: 'center',
                  padding: '10px 0',
                  cursor: 'pointer'
                }}
                     onClick={() => {
                       router.push('/')
                       dispatch(showIntro(false))
                       dispatch(mockAddress())
                     }}
                >Take a look around</Box>
              </>
              :
              <>
                <Box sx={{
                  borderRadius: '100px',
                  boxSizing: 'border-box',
                  backgroundColor: '#56AAC8',
                  width: '100%',
                  height: '39px',
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
                       // eslint-disable-next-line @typescript-eslint/no-explicit-any
                       setState((step: any) => step + 1)
                     }}
                >Next</Box>
                <Box sx={{
                  color: '#8F8F8F',
                  boxSizing: 'border-box',
                  fontSize: '14px',
                  width: '100%',
                  textAlign: 'center',
                  padding: '10px 0',
                  cursor: 'pointer',
                  height: '36px',
                }}
                     onClick={() => {
                       router.push('/')
                       dispatch(showIntro(false))
                     }}
                >Skip</Box>
              </>
            }
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Step