import {Box} from '@mui/material'
import Header from "@/components/Header.tsx"
import RecentStreamList from "@/components/RecentStream/RecentStreamList.tsx"
import {useTranslation} from "react-i18next"
import Layout from "@/components/Layout"
import {useSelector} from "react-redux";
import Preview from "@/components/Pages/MainPage/Preview.tsx";
import img from "@/icons/preview/curso2.svg"

const HistoryPage = () => {
  const {t} = useTranslation()
  const isConnect = useSelector((state: any) => state.user.isConnect)

  return (
    <Layout>
      <Box sx={{
        padding: '0 20px 94px',
        marginTop: '54px'
      }}>
        <Header title={t('header:history')}/>
        {isConnect
          ? <RecentStreamList/>
          : <Preview
            img={img}
            title='No history to show'
            description='You don’t have any history yet, but it will be available as soon as you start streaming.'
          />
        }
      </Box>
    </Layout>
  )
}

export default HistoryPage