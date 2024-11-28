import {useDispatch, useSelector} from "react-redux"
import {showDisconnectModal} from "@/store/reducers/uiReducer.tsx"
import {TitleTypography} from "./Typography/TitleTypography.tsx"
import {Box} from "@mui/material"
import Exit from "@/icons/exit.tsx"
import Search from "@/icons/search.tsx"
import NotificationIcon from "@/icons/notificationIcon.tsx"
import {useTranslation} from "react-i18next"
import Logo from "@/icons/logo.tsx"
import {useRouter} from "next/router"

const Header = ({title}: { title: string }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const address = useSelector((state: any) => state.user.address)
  const location = useRouter()
  const dispatch = useDispatch()
  const {t} = useTranslation()
  // const {t} = useTranslation('en')

  const disconnectHandler = () => dispatch(showDisconnectModal(true))

  return (
    <header style={{
      width: '100%',
      height: '54px',
      padding: '12px 20px',
      boxSizing: 'border-box',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      zIndex: '3',
      backgroundColor: '#fff',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      {location.pathname === '/'
        ? (address ? <Logo/> : <TitleTypography>
          {t('welcome:header')}
        </TitleTypography>)
        : (<TitleTypography>{title}</TitleTypography>)
      }
      {location.pathname === '/wallet'
        ? <Box sx={{height: '30px', cursor: 'pointer'}} onClick={disconnectHandler}><Exit/></Box>
        : location.pathname === '/settings'
          ? <></>
          : location.pathname === '/history'
            ? <Search/>
            : <NotificationIcon/>
      }
    </header>
  )
}

export default Header