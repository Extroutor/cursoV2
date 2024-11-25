import { Address, WalletClient, PublicClient } from 'viem';
import {
    ERC2771ForwarderABI,
    ERC2771ForwarderAddress,
} from './constraints.ts';

type EIP712TypedData = {
    types: { [key: string]: { name: string; type: string }[] };
    domain: { [key: string]: string | number | boolean };
    primaryType: string;
    message: { [key: string]: string | number | boolean };
};

const EIP712Domain: { name: string; type: string }[] = [
    { name: 'name', type: 'string' },
    { name: 'version', type: 'string' },
    { name: 'chainId', type: 'uint256' },
    { name: 'verifyingContract', type: 'address' },
] as const;

const ForwardRequest: { name: string; type: string }[] = [
    { name: 'from', type: 'address' },
    { name: 'to', type: 'address' },
    { name: 'value', type: 'uint256' },
    { name: 'gas', type: 'uint256' },
    { name: 'nonce', type: 'uint256' },
    { name: 'deadline', type: 'uint48' },
    { name: 'data', type: 'bytes' },
] as const;

type MetaTxData = {
    to: Address;
    data: string;
    deadline: number;
    gas: string;
    from: Address;
};

function getMetaTxTypeData(chainId: number, verifyingContract: Address) {
    return {
        types: {
            EIP712Domain,
            ForwardRequest,
        },
        domain: {
            name: 'curso',
            version: '1',
            chainId,
            verifyingContract,
        },
        primaryType: 'ForwardRequest',
    } as const;
}

async function signTypedData(
    walletClient: WalletClient,
    from: Address,
    data: EIP712TypedData
) {
    return await walletClient.signTypedData({
        account: from,
        ...data,
    });
}

async function buildRequest(publicClient: PublicClient, input: MetaTxData) {
    const nonce = await publicClient.readContract({
        address: ERC2771ForwarderAddress,
        abi: ERC2771ForwarderABI,
        functionName: 'nonces',
        args: [input.from],
    });

    console.log("nonce", nonce)

    return {
        value: '0',
        nonce: (nonce as number).toString(),
        ...input,
    };
}

type MetaTxRequest = {
    value: string;
    nonce: string;
    gas: string;
    deadline: number;
    to: Address;
    from: Address;
    data: string;
};

async function buildTypedData(
    publicClient: PublicClient,
    request: MetaTxRequest
) {
    const chainId = await publicClient.getChainId();
    console.log("chainId",  chainId)
    const typeData = getMetaTxTypeData(chainId, ERC2771ForwarderAddress);
    console.log("typeData", typeData)
    return { ...typeData, message: request };
}

export async function signMetaTxRequest(
    walletClient: WalletClient,
    publicClient: PublicClient,
    input: MetaTxData
) {
    const request = await buildRequest(publicClient, input);
    console.log("request", request)
    const toSign = await buildTypedData(publicClient, request);
    console.log("2", toSign)
    const signature = await signTypedData(walletClient, input.from, toSign);
    return { signature, request };
}
