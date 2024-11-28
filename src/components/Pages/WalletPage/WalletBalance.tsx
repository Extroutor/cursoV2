import {Box} from "@mui/material"
import {ClipLoader} from "react-spinners"
import {useDispatch, useSelector} from "react-redux"
import {BuySellButton} from "@/styledComponents/buttons"
import {copyToBuffer} from "@/utils/copy"
import useAccountBalance from "@/hooks/useAccountBalance.tsx"
import {shortAddress} from "@/utils/shortAddress"
import Copy from "@/icons/copy.tsx"
import {copyTooltip} from "@/store/reducers/uiReducer.tsx"
import {useRouter} from "next/router"

const WalletBalance = ({buyCrypto}: { buyCrypto: boolean }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const {nickname, address} = useSelector((state: any) => state.user)
    const {balance, balanceLoading} = useAccountBalance(address, 'usdc')
    const router = useRouter()
    const dispatch = useDispatch()

    return (
        <Box sx={{
            width: '100%',
            borderRadius: '20px',
            bgcolor: '#56AAC8',
            padding: '20px 24px',
            boxSizing: 'border-box',
            margin: '8px 0 20px 0',
            position: 'relative',
            cursor: 'pointer',
        }}
            onClick={() => router.push('/wallet')}
        >
            <Box sx={{
                fontSize: '16px',
                fontWeight: '400',
                lineHeight: '18.75px',
                color: '#fff',
                marginBottom: '4px',
            }}>
                {/*{isLoading*/}
                {/*    ? <ClipLoader size={10} color='#fff'/>*/}
                    <span>{nickname ? String(nickname) : 'Wallet'}</span>
                {/*}*/}
            </Box>
            <Box style={{
                marginBottom: '16px',
                fontSize: '12px',
                color: '#292929',
            }}>{shortAddress(address)}</Box>
            {balanceLoading
                ? <ClipLoader size={20}/>
                : <Box sx={{
                    fontSize: '26px',
                    fontWeight: '700',
                    lineHeight: '30.47px',
                }}>${Number(balance).toFixed(2)}</Box>
            }
            {buyCrypto &&
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    mt: '16px',
                    gap: '16px'
                }}>
                    <BuySellButton>Buy</BuySellButton>
                    <BuySellButton>Sell</BuySellButton>
                </Box>
            }
            <Box sx={{
                position: 'absolute',
                top: '20px',
                right: '24px',
                cursor: 'pointer',
            }}
                 onClick={(e) => {
                     e.stopPropagation()
                     copyToBuffer(address)
                     dispatch(copyTooltip(true))
                 }}
            >
                <Copy/>
            </Box>
        </Box>
    )
}


export default WalletBalance