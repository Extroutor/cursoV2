import {Box} from "@mui/material"
import Header from "@/components/Header.tsx"
import SettingItem from "@/components/Pages/SettingsPage/settingItem.tsx"
import Account from "@/icons/settings/account.tsx"
import Currency from "@/icons/settings/currency.tsx"
import Language from "@/icons/settings/language.tsx"
import DarkMode from "@/icons/settings/darkMode.tsx"
import Support from "@/icons/settings/support.tsx"
import Tutorials from "@/icons/settings/tutorials.tsx"
import Telegram from "@/icons/settings/telegram.tsx"
import Website from "@/icons/settings/website.tsx"
import About from "@/icons/settings/about.tsx"
import {useTranslation} from "react-i18next"
import Tips from "@/components/Tips/Tips.tsx"
import {useDispatch, useSelector} from "react-redux"
import {showTips} from "@/store/reducers/uiReducer.tsx"
import Layout from "@/components/Layout.tsx"

const SettingsPage = () => {
  const {t} = useTranslation()
  const tips = useSelector((state: any) => state.ui.tips)
  const shownTips = localStorage.getItem('tips')
  const dispatch = useDispatch()
  const setOpenTips = () => dispatch(showTips(true))

  return (
    <Box sx={{
      display: 'block',
      padding: '0 20px 20px',
      boxSizing: 'border-box',
      height: 'calc(var(--vh, 1vh) * 100 - 62px)',
    }}>
      <Layout>
        <Box mt='54px' pb='94px' sx={{height: '100%'}}>
          <Header title={t('header:settings')}/>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            pt: '8px'
          }}>
            <SettingItem icon={<Account/>} title='Account' action='next' to='/settings/account'/>
            <Box display='flex' flexDirection='column' gap='8px'>
              <SettingItem icon={<Currency/>} title='Currency' action='next'/>
              <SettingItem icon={<Language/>} title='Language' action='next'/>
              <SettingItem icon={<DarkMode/>} title='Dark mode' action='next'/>
            </Box>
            <Box display='flex' flexDirection='column' gap='8px'>
              <SettingItem icon={<Support/>} title='Support' action='link'/>
              <SettingItem icon={<Tutorials/>} title='Tutorials' action='next'/>
              <SettingItem icon={<About/>} title='About Curso' action='next'/>
            </Box>
            <Box display='flex' flexDirection='column' gap='8px'>
              <SettingItem icon={<Telegram/>} title='Telegram' action='link'/>
              <SettingItem icon={<Website/>} title='Website' action='link'/>
            </Box>
          </Box>
        </Box>
      </Layout>
      <Tips isOpen={tips && !shownTips} initialStep={7} setOpen={setOpenTips}/>
    </Box>

  )
}

export default SettingsPage