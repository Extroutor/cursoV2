import {Box} from "@mui/material"
import Header from "../../components/Header.tsx"
import SettingItem from "../../components/Pages/SettingsPage/settingItem.tsx"
import Account from "../../icons/settings/account.tsx"
import Currency from "../../icons/settings/currency.tsx"
import Language from "../../icons/settings/language.tsx"
import DarkMode from "../../icons/settings/darkMode.tsx"
import Support from "../../icons/settings/support.tsx"
import Tutorials from "../../icons/settings/tutorials.tsx"
import Telegram from "../../icons/settings/telegram.tsx"
import Website from "../../icons/settings/website.tsx"
import About from "../../icons/settings/about.tsx";
import {useTranslation} from "react-i18next";

const SettingsPage = () => {
  const { t } = useTranslation()

  return (
    <Box sx={{padding: '0 20px 94px', marginTop: '54px'}}>
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
  )
}

export default SettingsPage