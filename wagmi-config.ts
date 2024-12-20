import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';
import { polygonAmoy } from '@reown/appkit/networks';
import {createPublicClient, http, webSocket} from 'viem';
import {CreateConnectorFn, fallback} from "wagmi";
import {injected, metaMask, walletConnect} from "@wagmi/connectors";

export const metadata = {
    name: 'Curso',
    description: 'Powered by Curso',
    // url: 'https://curso.finance', // origin must match your domain & subdomain
    url: 'https://curso-v2.vercel.app', // origin must match your domain & subdomain
    icons: [''], // TODO: Add logo
};

export const projectId = "ac80e54969a6272e9f5bae5bca8d60e4" //'08ec41a934f82d1db339a13e0115be6a'
// export const infuraId = "28aaa049f7f14880b375f80295d02142"

const connectors: CreateConnectorFn[] = [];
connectors.push(walletConnect({ projectId: projectId, metadata, showQrModal: false })); // showQrModal must be false
connectors.push(injected({ shimDisconnect: true }));
connectors.push(metaMask({ dappMetadata: metadata })); // for mobile connection

export const wagmiAdapter = new WagmiAdapter({
    ssr: true,
    projectId: projectId,
    // networks: [polygon],
    networks: [polygonAmoy],
    connectors,
    transports: {
        // [polygonAmoy.id]: http("https://polygon-amoy.infura.io/v3/28aaa049f7f14880b375f80295d02142"),
        [polygonAmoy.id]: fallback([
            webSocket("wss://polygon-amoy.infura.io/ws/v3/28aaa049f7f14880b375f80295d02142" as string),
            http("https://polygon-amoy.infura.io/v3/28aaa049f7f14880b375f80295d02142" as string),
        ]),

    },
});

export const publicClient = createPublicClient({
    chain: polygonAmoy,
    transport: http("https://polygon-amoy.infura.io/v3/28aaa049f7f14880b375f80295d02142"),
});

export const config = wagmiAdapter.wagmiConfig;

// import '@rainbow-me/rainbowkit/styles.css'
// import {getDefaultConfig} from '@rainbow-me/rainbowkit'
// import {polygonAmoy} from 'wagmi/chains'
// import {QueryClient} from "@tanstack/react-query"
// import {createPublicClient, http} from 'viem'
//
// export const config = getDefaultConfig({
//     appName: 'Curso',
//     projectId: '08ec41a934f82d1db339a13e0115be6a',
//     chains: [polygonAmoy],
//     ssr: false,
// });
//
// export const publicClient = createPublicClient({
//     chain: polygonAmoy,
//     transport: http(),
// })
//
// export const queryClient = new QueryClient();