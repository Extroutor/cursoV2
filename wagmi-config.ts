import { CreateConnectorFn, http } from 'wagmi';
import { walletConnect, injected, metaMask } from 'wagmi/connectors';
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';
import { polygonAmoy } from '@reown/appkit/networks';
import { createPublicClient, http as Vhttp } from 'viem';

export const projectId = '16f460d50c25a91446f494e58c3999e7' // TODO hide

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
        // [polygon.id]: http("https://polygon-mainnet.infura.io/v3/28aaa049f7f14880b375f80295d02142"),
        [polygonAmoy.id]: http("https://polygon-amoy.infura.io/v3/28aaa049f7f14880b375f80295d02142"),
    },
});

export const publicClient = createPublicClient({
    chain: polygonAmoy,
    transport: Vhttp("https://polygon-amoy.infura.io/v3/28aaa049f7f14880b375f80295d02142"),
    // chain: polygon,
    // transport: http(process.env.NEXT_PUBLIC_INFURA_API_URL_POLYGON),
});


export const config = wagmiAdapter.wagmiConfig;
