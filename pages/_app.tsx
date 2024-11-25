import type { AppProps } from 'next/app';
import store from '../store';
import { Provider } from 'react-redux';
import '../styles/App.css';
import '../styles/index.css';
import { WagmiProvider } from 'wagmi';
// import 'react-loading-skeleton/dist/skeleton.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import StreamDataUpdater from '../components/Stream/StreamsDataUpdater';

import { createAppKit } from '@reown/appkit/react';
import { polygonAmoy } from '@reown/appkit/networks';
import {wagmiAdapter} from "../wagmi-config";
import {Locale} from "../types/lang";
import {useEffect, useState} from "react";
import {appWithTranslation} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";


const queryClient = new QueryClient();

// Set up metadata
const metadata = {
  name: 'Curso',
  description: 'AppKit Example - Powered by Curso',
  url: 'https://curso.finance', // origin must match your domain & subdomain
  icons: [''], // TODO: Add logo
};

// Create the modal
createAppKit({
  adapters: [wagmiAdapter],
  projectId: '16f460d50c25a91446f494e58c3999e7',
  // networks: [polygon],
  networks: [polygonAmoy],
  // defaultNetwork: polygon,
  defaultNetwork: polygonAmoy,
  metadata: metadata,
  features: {
    socials: ['google', 'apple'],
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  // const [data, setData] = useState(localStorage.getItem('lang') as Locale ?? 'en' as Locale);

  // useEffect(() => {
  //   const storedData = localStorage.getItem('lang') as Locale ?? 'en' as Locale
  //   console.log("storedData", storedData)
  //   if (storedData) {
  //     setData(storedData)
  //   }
  // }, [])

  return (
    <Provider store={store}>
      <WagmiProvider config={wagmiAdapter.wagmiConfig}>
        <QueryClientProvider client={queryClient}>
          {/*<StreamDataUpdater />*/}
          <Component {...pageProps}/>
        </QueryClientProvider>
      </WagmiProvider>
    </Provider>
  );
}

export async function getStaticProps({ locale }) {
  console.log('locale1', locale)
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default appWithTranslation(MyApp);
