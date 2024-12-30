import React, {useEffect} from 'react'
import {useRouter} from "next/router"
import {useDispatch, useSelector} from "react-redux"
import Menu from "./Menu/Menu"
import Loading from "./Modals/Loading"
import Tooltip from "./Tooltip"
import DisconnectModal from "./Modals/DisconnectModal"
import {Box} from "@mui/material";
import {addAddress, setConnection, setNickname} from "@/store/reducers/userReducer"
import {getNicknameByAddress} from "@/blockchain/nickname"
import {useAppKitAccount} from "@reown/appkit/react"
import {useDisconnect} from "wagmi"
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Layout = ({children}: any) => {
  const router = useRouter()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const addressState = useSelector((state: any) => state.user.address)
  const {address, isConnected: isConnect} = useAppKitAccount();
  const dispatch = useDispatch()
  const {disconnect} = useDisconnect()

  // console.log("address is Connected", address, isConnect, addressState)

  useEffect(() => {
    if (isConnect) {
      const localStorageAddress = localStorage.getItem('address') || null
      const localStorageNickname = localStorage.getItem('nickname') || null

      if (!localStorageAddress) disconnect()

      if (localStorageAddress || address) {
        dispatch(addAddress(localStorageAddress || address))
        dispatch(setConnection(true))
        if (localStorageNickname) {
          dispatch(setNickname(localStorageNickname))
        } else {
          getNicknameByAddress(String(address)).then((nickname) => {
            if (nickname) dispatch(setNickname(String(nickname)))
          })
        }
      }
    }
  }, [address, isConnect])

  return (
    <Box sx={{
      // height: 'calc(100vh - 64px)',
      height: '100%',
      minHeight: '548px',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      {children}
      {router.pathname !== '/create'
        && router.pathname !== '/settings/account'
        && !router.pathname.includes('stream')
        && (addressState)
        && <Menu/>}
      <Loading/>
      <Tooltip/>
      <DisconnectModal/>
    </Box>
  )
}

export default Layout