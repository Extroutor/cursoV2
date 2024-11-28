import {H2Typography} from "../../Typography/TitleTypography.tsx"
import {Box} from "@mui/material"
import TokenItem from "./TokenItem.tsx"

const TokenList = () => {
    return (
        <Box>
            <H2Typography>Tokens</H2Typography>
            <Box mt='12px'>
                <TokenItem token='usdc'/>
                <TokenItem token='matic'/>
            </Box>
        </Box>
    )
}

export default TokenList