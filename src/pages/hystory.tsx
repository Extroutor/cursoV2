import {Box} from '@mui/material'
import Header from "@/components/Header.tsx"
import RecentStreamList from "@/components/RecentStream/RecentStreamList.tsx"
import {useTranslation} from "react-i18next"
import Layout from "@/components/Layout"

const HistoryPage = () => {
  const { t } = useTranslation()

  return (
    <Layout>
      <Box sx={{
        padding: '0 20px 94px',
        marginTop: '54px'
      }}>
        <Header title={t('header:history')}/>
        <RecentStreamList />
      </Box>
    </Layout>
  )
}

export default HistoryPage