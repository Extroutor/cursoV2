import {Navigate, Route, Routes, useLocation} from 'react-router-dom'
import MainPage from '../page/MainPage.tsx'
import HistoryPage from '../page/HistoryPage.tsx'
import CreateStreamPage from '../page/CreateStreamPage.tsx'
import WalletPage from '../page/WalletPage.tsx'
import SettingsPage from '../page/SettingsPage.tsx'
import {Box} from '@mui/material'
import Menu from './Menu/Menu.tsx'
import {useDispatch, useSelector} from "react-redux"
import StreamPage from "../page/StreamPage.tsx"
import AccountPage from "../page/settings/Account/AccountPage.tsx"
import {useEffect} from "react"
import {addAddress, setNickname} from "../../store/reducers/userReducer.ts"
import Loading from "./Modals/Loading.tsx"
import NotFoundPage from "../page/NotFoundPage.tsx"
import Tooltip from "./Tooltip.tsx"
import DisconnectModal from "./Modals/DisconnectModal.tsx"
import {getNicknameByAddress} from "@/blockchain/nickname.ts"

const AppRouter = () => {
    const location = useLocation()
    const address = useSelector((state: any) => state.user.address)
    const dispatch = useDispatch()

    useEffect(() => {
        const localStorageAddress = localStorage.getItem('address')
        const localStorageNickname = localStorage.getItem('nickname')
console.log("localStorageAddress", localStorageAddress)
        if (localStorageAddress) {
            dispatch(addAddress(localStorageAddress))

            if (!localStorageNickname) {
                const nickname = getNicknameByAddress(localStorageAddress)
                dispatch(setNickname(nickname))
            } else {
                dispatch(setNickname(localStorageNickname))
            }
        }
    }, [])

    return (
        <Box sx={{
            // height: isIPhone ? 'calc(100vh - 133px)' : '100vh', // TODO
            // height: !address ? (isIPhone ? 'calc(100vh - 133px)' : '100vh') : '100%',
            height: 'calc(100vh - 64px)',
            minHeight: '548px',
            // minHeight: '-webkit-fill-available',
            // marginBottom: address ? '94px' : '0px'
            maxWidth: '800px',
            margin: '0 auto'
        }}>
            <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path='/history' element={<HistoryPage/>}/>
                <Route path='/create' element={<CreateStreamPage/>}/>)
                <Route path='/wallet' element={<WalletPage/>}/>
                <Route path='/settings' element={<SettingsPage/>}/>
                <Route path='/settings/account' element={<AccountPage/>}/>
                <Route path='/stream/:id' element={<StreamPage/>}/>
                <Route path='/404' element={<NotFoundPage/>}/>
                {/*<Route path="*">*/}
                {/*    <Redirect to="/404" />*/}
                {/*</Route>*/}
                <Route
                    path="*"
                    element={<Navigate to="/404" replace/>}
                />
            </Routes>
            {location.pathname !== '/create'
                && location.pathname !== '/settings/account'
                && !location.pathname.includes('stream')
                && (address)
                && <Menu/>}
            <Loading/>
            <Tooltip/>
            <DisconnectModal/>
        </Box>

    )
}

export default AppRouter