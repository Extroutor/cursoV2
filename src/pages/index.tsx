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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const address = useSelector((state: any) => state.user.address)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const intro = useSelector((state: any) => state.ui.intro)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const tips = useSelector((state: any) => state.ui.tips)
  const dispatch = useDispatch()

  useEffect(() => {
    const localTips = localStorage.getItem('tips')
    const localIntro = localStorage.getItem('intro')

    if (!localIntro) dispatch(showIntro(true))
    else dispatch(showIntro(false))
    if (!localTips && address && address !== '1')
      setTimeout(() => {
        dispatch(showTips(true))
      }, 2000)
    else dispatch(showTips(false))
  }, [dispatch, address])

  useEffect(() => {
    const updateVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    updateVh()

    window.addEventListener('resize', updateVh);

    return () => {
      window.removeEventListener('resize', updateVh);
    };
  }, []);


  const setOpenTips = () => dispatch(showTips(true))

  return (
    <Box sx={{
      display: 'block',
      padding: '0 20px 20px',
      boxSizing: 'border-box',
      height: 'calc(var(--vh, 1vh) * 100 - 62px)',
    }}>
      <Layout>
        {address ? <MainPageContent/> : intro ? <Intro/> : <Welcome/>}
      </Layout>
      {tips && <Tips isOpen={tips} setOpen={setOpenTips}/>}
    </Box>
  )
}

export default MainPage