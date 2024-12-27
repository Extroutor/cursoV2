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
  const {t} = useTranslation()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const isConnect = useSelector((state: any) => state.user.isConnect)

  return (
    <Box sx={{
      display: 'block',
      padding: '0 20px 20px',
      boxSizing: 'border-box',
      height: 'calc(var(--vh, 1vh) * 100 - 62px)',
    }}>
      <Layout>
        <Box sx={{height: '100%'}}>
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
    </Box>
  )
}

export default WalletPage