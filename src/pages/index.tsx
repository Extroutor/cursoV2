import {Box} from '@mui/material'
import Welcome from "@/components/Pages/MainPage/Welcome.tsx"
import MainPageContent from "@/components/Pages/MainPage/MainPageContent.tsx"
import {useSelector} from "react-redux"
import Layout from "@/components/Layout"
import Intro from "@/components/Pages/MainPage/Intro.tsx";

const MainPage = () => {
  const address = useSelector((state: any) => state.user.address)

  return (
      <Box sx={{
        display: 'block',
        padding: '0 20px 20px',
        minHeight: '100%',
        boxSizing: 'border-box',
        height: '100%',
      }}>
        {/*<HeaderComponent />*/}
        {/*<Header title='CURSO'/>*/}
        {/*<MainComponent/>*/}
        <Layout>
          {address ? <MainPageContent/> : false ? <Welcome/> : <Intro/>}
        </Layout>
      </Box>
  )
}

// const HeaderComponent = () => {
//   return <Header title='CURSO'/>
// }

// const MainComponent = () => {
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   const address = useSelector((state: any) => state.user.address)
//
//   return (
//     <Layout>
//       {address ? <MainPageContent/> : false ? <Welcome/> : <Intro/>}
//     </Layout>
//   )
// };
export default MainPage