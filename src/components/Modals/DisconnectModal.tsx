import {Box} from "@mui/material"
import MainCustomModal from "./MainCustomModal.tsx"
import {useDispatch, useSelector} from "react-redux"
import {isLoading, showDisconnectModal} from "@/store/reducers/uiReducer.tsx"
import {disconnectWallet} from "@/store/reducers/userReducer.ts"
import {useDisconnect} from "wagmi"
import {useRouter} from "next/router"

const DisconnectModal = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const disconnectModal = useSelector((state: any) => state.ui.disconnectModal)
    const dispatch = useDispatch()
    const {disconnectAsync} = useDisconnect()
    const router = useRouter()

    const openHandler = () => dispatch(showDisconnectModal(true))
    const closeHandler = () => dispatch(showDisconnectModal(false))

    const disconnectHandler = () => {
        dispatch(isLoading(true))
        setTimeout(async () => {
            await disconnectAsync().then(() => {
                dispatch(disconnectWallet())
                localStorage.removeItem('address')
                localStorage.removeItem('nickname')
                closeHandler()
                router.push('/')
            }).catch((error) => {
                console.log({error})
            }).finally(() => {
                dispatch(isLoading(false))
            })
        }, 1000)
    }

    return (
        <MainCustomModal isOpen={disconnectModal} setOpen={openHandler}>
            <Box>Disconnect</Box>
            <span style={{
                color: '#8F8F8F',
                textAlign: 'center',
                marginTop: '12px',
                fontSize: '14px'

            }}>Are you sure you want to disconnect your wallet?
                </span>
            <Box sx={{
                bgcolor: '#E5E5E5',
                borderRadius: '100px',
                color: '#292929',
                fontWeight: '500',
                padding: '10px 24px',
                width: '100%',
                boxSizing: 'border-box',
                textAlign: 'center',
                mt: '20px',
                cursor: 'pointer'
            }}
                 onClick={disconnectHandler}
            >
                Disconnect
            </Box>
            <span style={{
                color: '#8F8F8F',
                fontSize: '14px',
                marginTop: '18px',
                cursor: 'pointer'
            }}
                  onClick={closeHandler}
            >Close</span>
        </MainCustomModal>
    )
}

export default DisconnectModal