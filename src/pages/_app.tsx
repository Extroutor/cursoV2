import type { AppProps } from 'next/app'
import store from '../store'
import { Provider } from 'react-redux'
import '../styles/App.css'
import '../styles/index.css'
import {WagmiProvider} from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import StreamDataUpdater from '../components/Stream/StreamsDataUpdater'
import { createAppKit } from '@reown/appkit/react'
import { polygonAmoy } from '@reown/appkit/networks'
import {infuraId, wagmiAdapter} from "../../wagmi-config"


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
  projectId: infuraId,
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
  return (
    <Provider store={store}>
      <WagmiProvider config={wagmiAdapter.wagmiConfig}>
        <QueryClientProvider client={queryClient}>
          {/*<StreamDataUpdater />*/}
          <Component {...pageProps} />
        </QueryClientProvider>
      </WagmiProvider>
    </Provider>

  );
}

export default MyApp
