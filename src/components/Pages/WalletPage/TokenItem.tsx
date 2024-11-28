import {Box} from "@mui/material";
import Usdc from "@/icons/usdc.tsx";
import PolygonSmall from "@/icons/polygonSmall.tsx";
import Matic from "@/icons/matic.tsx";
import useAccountBalance from "@/hooks/useAccountBalance.tsx";
import {useSelector} from "react-redux";
import {ClipLoader} from "react-spinners";

const TokenItem = ({token}: { token: string }) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const address = useSelector((store: any) => store.user.address)
    const {balance, balanceLoading} = useAccountBalance(address, token)

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '9px 0'
        }}>
            <Box sx={{
                display: 'flex',
                gap: '12px',
                alignItems: 'center'
            }}>
                {token === 'usdc' ? <Usdc/> : <Matic/>}
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <span>{token === 'usdc' ? 'USD Coin' : 'MATIC'}</span>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        fontSize: '14px',
                        color: '#8F8F8F',
                    }}>
                        <span style={{marginRight: '4px', display: 'flex', alignItems: 'center'}}><PolygonSmall/></span>
                        {balanceLoading
                            ? <ClipLoader size={10}/>
                            : <Box sx={{
                                // fontWeight: '700',
                                // lineHeight: '30.47px',
                            }}>{Number(balance).toFixed(2)}</Box>
                        }&nbsp;{token === 'usdc' ? 'USDC' : 'MATIC'}
                    </Box>

                </Box>
            </Box>

            <Box sx={{
                fontWeight: '700'
            }}>$0</Box>
        </Box>
    )
}

export default TokenItem