import ProcessedStream from "../../ProcessedStream/ProcessedStream.tsx"
import WalletBalance from "../WalletPage/WalletBalance.tsx"
import RecentStream from "../../RecentStream/RecentStream.tsx"
import useStreams from "@/hooks/useStreams.tsx"
import {Box} from "@mui/material"
import Header from "@/components/Header.tsx"
import {useSelector} from "react-redux"
import Preview from "@/components/Pages/MainPage/Preview.tsx"
import img from "@/icons/preview/curso1.svg"

const MainPageContent = () => {
  const {streams, processedStream} = useStreams()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const isConnect = useSelector((state: any) => state.user.isConnect)

  return (
    <Box height='100%'>
      <Header title='CURSO'/>
      {isConnect ?
        <Box mt='54px' pb='94px'>
          <WalletBalance buyCrypto={false}/>
          <ProcessedStream streams={processedStream}/>
          {/*<PlannedStream/>*/}
          <RecentStream streams={streams}/>
        </Box>
        :
        <Preview
          title='Welcome, stranger!'
          description='The streams and your wallet balance will be displayed here, but only when you connect your wallet.'
          img={img}
          connect={true}
        />
      }
    </Box>
  )
}

export default MainPageContent