import {Box} from '@mui/material'
import Welcome from "@/components/Pages/MainPage/Welcome.tsx"
import MainPageContent from "@/components/Pages/MainPage/MainPageContent.tsx"
import {useDispatch, useSelector} from "react-redux"
import Layout from "@/components/Layout"
import Intro from "@/components/Pages/MainPage/Intro.tsx"
import Tips from "@/components/Tips/Tips.tsx"
import {useEffect} from "react"
import {showTips} from "@/store/reducers/uiReducer.tsx"

const MainPage = () => {
  const address = useSelector((state: any) => state.user.address)
  const showIntro = useSelector((state: any) => state.ui.intro)
  const tips = useSelector((state: any) => state.ui.tips)
  const dispatch = useDispatch()

  useEffect(() => {
    const tips = localStorage.getItem('tips')
    if (!tips)
      setTimeout(() => {
        dispatch(showTips(true))
      }, 3000)
  }, [dispatch])

  const setOpenTips = () => dispatch(showTips(true))

  return (
    <Box sx={{
      display: 'block',
      padding: '0 20px 20px',
      minHeight: '100%',
      boxSizing: 'border-box',
      height: '100%',
    }}>
      <Layout>
        {address ? <MainPageContent/> : showIntro ? <Intro/> : <Welcome/>}
      </Layout>
      {tips && <Tips isOpen={tips} setOpen={setOpenTips}/>}
    </Box>
  )
}

export default MainPage