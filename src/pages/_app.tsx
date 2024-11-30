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
import {metadata, projectId, wagmiAdapter} from "../../wagmi-config"

const queryClient = new QueryClient()

// Create the modal
createAppKit({
  adapters: [wagmiAdapter],
  projectId: projectId,
  // networks: [polygon],
  networks: [polygonAmoy],
  // defaultNetwork: polygon,
  defaultNetwork: polygonAmoy,
  metadata: metadata,
  // features: {
  //   socials: ['google', 'apple'],
  // },
})

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
