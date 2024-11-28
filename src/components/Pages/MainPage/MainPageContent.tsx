import ProcessedStream from "../../ProcessedStream/ProcessedStream.tsx"
import WalletBalance from "../WalletPage/WalletBalance.tsx"
import RecentStream from "../../RecentStream/RecentStream.tsx"
import useStreams from "@/hooks/useStreams.tsx"
import {Box} from "@mui/material";

const MainPageContent = () => {
    // const {streams, processedStream} = useStreams()

    return (
        <Box mt='54px'>
            <WalletBalance buyCrypto={false}/>
            {/*<ProcessedStream streams={processedStream}/>*/}
            {/*/!*<PlannedStream/>*!/*/}
            {/*<RecentStream streams={streams}/>*/}
        </Box>
    )
}

export default MainPageContent