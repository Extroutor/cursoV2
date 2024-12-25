import {Box} from "@mui/material"
import Header from "@/components/Header.tsx"
import WalletBalance from "@/components/Pages/WalletPage/WalletBalance.tsx"
import TokenList from "@/components/Pages/WalletPage/TokenList.tsx";
import {useTranslation} from "react-i18next";
import Layout from "@/components/Layout"
import {useSelector} from "react-redux";
import Preview from "@/components/Pages/MainPage/Preview.tsx";
import img from "@/icons/preview/curso3.svg";

const WalletPage = () => {
  const { t } = useTranslation()
  const isConnect = useSelector((state: any) => state.user.isConnect)

  return (
    <Layout>
      <Box sx={{padding: '0 20px 94px'}}>
        <Header title={t('header:wallet')}/>
        {isConnect
          ? <Box mt='54px'>
            <WalletBalance buyCrypto={true}/>
            <TokenList/>
          </Box>
          : <Preview
            img={img}
            title="We haven't met, have we?"
            description="When you connect your wallet, all the info about it will be displayed here."
          />
        }
      </Box>
    </Layout>
  )
}

export default WalletPage