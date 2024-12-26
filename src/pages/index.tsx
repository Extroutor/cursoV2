import {Box} from '@mui/material'
import Welcome from "@/components/Pages/MainPage/Welcome.tsx"
import MainPageContent from "@/components/Pages/MainPage/MainPageContent.tsx"
import {useDispatch, useSelector} from "react-redux"
import Layout from "@/components/Layout"
import Intro from "@/components/Pages/MainPage/Intro.tsx"
import Tips from "@/components/Tips/Tips.tsx"
import {useEffect} from "react"
import {showIntro, showTips} from "@/store/reducers/uiReducer.tsx"

const MainPage = () => {
  const address = useSelector((state: any) => state.user.address)
  const intro = useSelector((state: any) => state.ui.intro)
  const tips = useSelector((state: any) => state.ui.tips)
  const dispatch = useDispatch()

  useEffect(() => {
    const localTips = localStorage.getItem('tips')
    const localIntro = localStorage.getItem('intro')

    if (!localIntro) dispatch(showIntro(true))
    else dispatch(showIntro(false))
    if (!localTips)
      setTimeout(() => {
        dispatch(showTips(true))
      }, 3000)
    else dispatch(showTips(false))
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
        {address ? <MainPageContent/> : intro ? <Intro/> : <Welcome/>}
      </Layout>
      {tips && <Tips isOpen={tips} setOpen={setOpenTips}/>}
    </Box>
  )
}

export default MainPage