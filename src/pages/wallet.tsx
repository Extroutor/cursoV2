import {Box} from "@mui/material"
import Header from "@/components/Header.tsx"
import WalletBalance from "@/components/Pages/WalletPage/WalletBalance.tsx"
import TokenList from "@/components/Pages/WalletPage/TokenList.tsx";
import {useTranslation} from "react-i18next";
import Layout from "@/components/Layout"

const WalletPage = () => {
  const { t } = useTranslation()

  return (
    <Layout>
      <Box sx={{padding: '0 20px 94px'}}>
        <Header title={t('header:wallet')}/>
        <Box mt='54px'>
          <WalletBalance buyCrypto={true}/>
          <TokenList/>
        </Box>
      </Box>
    </Layout>
  )
}

export default WalletPage