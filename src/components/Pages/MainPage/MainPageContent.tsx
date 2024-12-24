import ProcessedStream from "../../ProcessedStream/ProcessedStream.tsx"
import WalletBalance from "../WalletPage/WalletBalance.tsx"
import RecentStream from "../../RecentStream/RecentStream.tsx"
import useStreams from "@/hooks/useStreams.tsx"
import {Box} from "@mui/material";
import Header from "@/components/Header.tsx";

const MainPageContent = () => {
  const {streams, processedStream} = useStreams()

  return (
    <Box>
      <Header title='CURSO'/>
    <Box mt='54px' mb='74px'>
      <WalletBalance buyCrypto={false}/>
      <ProcessedStream streams={processedStream}/>
      {/*<PlannedStream/>*/}
      <RecentStream streams={streams}/>
    </Box>
    </Box>
  )
}

export default MainPageContent