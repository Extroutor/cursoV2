// import '@rainbow-me/rainbowkit/styles.css'
// import {getDefaultConfig} from '@rainbow-me/rainbowkit'
// // import {polygon} from 'wagmi/chains'
// import {QueryClient} from "@tanstack/react-query"
// import {mainnet} from 'viem/chains'
import { CreateConnectorFn, http } from 'wagmi';
import { walletConnect, injected, metaMask } from 'wagmi/connectors';
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';
import { polygonAmoy } from '@reown/appkit/networks';
import { createPublicClient, http as Vhttp } from 'viem';

// export const config = getDefaultConfig({
//     appName: 'Curso',
//     projectId: '08ec41a934f82d1db339a13e0115be6a',
//     chains: [polygon, mainnet],
//     ssr: false,
// });
//
// export const publicClient = createPublicClient({
//     chain: polygon,
//     transport: http(),
// })
//
// export const queryClient = new QueryClient();

export const projectId = '16f460d50c25a91446f494e58c3999e7'

const metadata = {
    name: 'Curso',
    description: 'Powered by Curso',
    url: 'https://curso.finance', // origin must match your domain & subdomain
    icons: [''], // TODO: Add logo
};

const connectors: CreateConnectorFn[] = [];
connectors.push(walletConnect({ projectId, metadata, showQrModal: false })); // showQrModal must be false
connectors.push(injected({ shimDisconnect: true }));
connectors.push(metaMask({ dappMetadata: metadata })); // for mobile connection

export const wagmiAdapter = new WagmiAdapter({
    ssr: true,
    projectId,
    // networks: [polygon],
    networks: [polygonAmoy],
    connectors,
    transports: {
        // [polygon.id]: http(process.env.NEXT_PUBLIC_INFURA_API_URL as string),
        [polygonAmoy.id]: http(
            process.env.NEXT_PUBLIC_INFURA_API_URL_AMOY as string
        ),
    },
});

export const publicClient = createPublicClient({
    chain: polygonAmoy,
    transport: Vhttp(process.env.NEXT_PUBLIC_INFURA_API_URL_POLYGON_AMOY),
    // chain: polygon,
    // transport: http(process.env.NEXT_PUBLIC_INFURA_API_URL_POLYGON),
});


export const config = wagmiAdapter.wagmiConfig;
