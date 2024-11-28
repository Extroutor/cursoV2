import {Box} from '@mui/material'
import Welcome from "@/components/Pages/MainPage/Welcome.tsx"
import MainPageContent from "@/components/Pages/MainPage/MainPageContent.tsx"
import Header from "@/components/Header.tsx"
import {useSelector} from "react-redux"
import Layout from "@/components/Layout"

const MainPage = () => {
  return (
    <Layout>
      <Box sx={{
        display: 'block',
        padding: '0 20px 20px',
        // minHeight: '100%',
        boxSizing: 'border-box',
        height: '100%',
      }}>
        <HeaderComponent />
        <MainComponent/>
      </Box>
    </Layout>
  )
}

const HeaderComponent = () => {
  return <Header title='CURSO'/>
}

const MainComponent = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const address = useSelector((state: any) => state.user.address)

  return (
    <>
      {address ? <MainPageContent/> : <Welcome/>}
    </>
  )
};
export default MainPage