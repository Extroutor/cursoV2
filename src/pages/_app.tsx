import type { AppProps } from 'next/app'
import store from '../store'
import { Provider } from 'react-redux'
import '../styles/App.css'
import '../styles/index.css'
import {WagmiProvider} from 'wagmi'
import { QueryClientProvider } from '@tanstack/react-query'
// import StreamDataUpdater from '../components/Stream/StreamsDataUpdater'
// import { createAppKit } from '@reown/appkit/react'
// import { polygonAmoy } from '@reown/appkit/networks'
import {config, queryClient} from "../../wagmi-config"
import {RainbowKitProvider} from "@rainbow-me/rainbowkit";


// Create the modal
// createAppKit({
//   adapters: [wagmiAdapter],
//   projectId: projectId,
//   // networks: [polygon],
//   networks: [polygonAmoy],
//   // defaultNetwork: polygon,
//   defaultNetwork: polygonAmoy,
//   metadata: metadata,
//   // features: {
//   //   socials: ['google', 'apple'],
//   // },
// })

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <Provider store={store}>
    //   <WagmiProvider config={wagmiAdapter.wagmiConfig}>
    //     <QueryClientProvider client={queryClient}>
    //       {/*<StreamDataUpdater />*/}
    //       <Component {...pageProps} />
    //     </QueryClientProvider>
    //   </WagmiProvider>
    // </Provider>
    <Provider store={store}>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider>
            <Component {...pageProps} />
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </Provider>
  );
}

export default MyApp
