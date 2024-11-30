import { CreateConnectorFn, http } from 'wagmi';
import { walletConnect, injected, metaMask } from 'wagmi/connectors';
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';
import { polygonAmoy } from '@reown/appkit/networks';
import { createPublicClient, http as Vhttp } from 'viem';

export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID

if (!projectId) {
    throw new Error('PROJECT_ID is not defined');
}

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
        [polygonAmoy.id]: http(process.env.NEXT_PUBLIC_INFURA_API_URL_AMOY),
    },
});

export const publicClient = createPublicClient({
    chain: polygonAmoy,
    transport: Vhttp(process.env.NEXT_PUBLIC_INFURA_API_URL_AMOY),
});

export const config = wagmiAdapter.wagmiConfig;