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

export const projectId = '16f460d50c25a91446f494e58c3999e7'
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