import {getAccount, getWalletClient, readContract} from '@wagmi/core';
import {Address} from 'viem';
import {CURRENT_NETWORK_ID} from './networks';
import {BigNumber} from 'ethers';
import {config} from "../../wagmi-config";
import {PermitSignature} from "@/types/permitSignature";
import {addServiceFee} from "./fee";
import {streamContractAddress, USDCABI, USDCToken} from "./constraints";

export type StartStreamArgs = {
  readonly address: string;
  readonly startNow: boolean;
  readonly start: number;
  readonly end: number;
  readonly block: number;
  readonly recipient: string;
  readonly amount: bigint;
  readonly title: string;
  readonly whoCancel: number;
  readonly permitSignature?: PermitSignature | null | void;
};

export const getPermitSignature = async (
  address: string,
  amount: bigint
): Promise<PermitSignature> => {
  try {
    const amountWithFee = addServiceFee(BigNumber.from(amount));

    const [nonce, name] = await Promise.all([
      getUsdcNonce(address),
      getUsdcCurrencyName(),
    ]);

    const deadline = Math.floor(Date.now() / 1000) + 3600;

    const account = getAccount(config);
    if (!account.address) {
      throw new Error('No account connected');
    }

    const walletClient = await getWalletClient(config);
    if (!walletClient) {
      throw new Error('No wallet client found');
    }

    const domain = {
      name,
      version: '2',
      chainId: CURRENT_NETWORK_ID,
      verifyingContract: USDCToken as Address,
    };

    console.log("domain", domain)

    const types = {
      Permit: [
        {name: 'owner', type: 'address'},
        {name: 'spender', type: 'address'},
        {name: 'value', type: 'uint256'},
        {name: 'nonce', type: 'uint256'},
        {name: 'deadline', type: 'uint256'},
      ],
    } as const;

    const message = {
      owner: address as Address,
      spender: streamContractAddress as Address,
      value: BigInt(amountWithFee.toString()),
      nonce: BigInt(nonce),
      deadline: BigInt(deadline),
    };

    // walletClient directly to sign
    const signature = await walletClient.signTypedData({
      account,
      domain,
      types,
      primaryType: 'Permit',
      message,
    });

    // Split signature
    const r = signature.slice(0, 66);
    const s = '0x' + signature.slice(66, 130);
    const v = parseInt(signature.slice(130, 132), 16);

    return {
      v,
      r,
      s,
      deadline,
      value2: amountWithFee,
    };
  } catch (error) {
    console.error('Error in getPermitSignature:', error);
    throw error;
  }
};

const getUsdcNonce = async (address: string): Promise<number> => {
  return await readContract(config, {
    address: USDCToken,
    abi: USDCABI,
    functionName: 'nonces',
    args: [address],
  })
    .then((n) => Number(n))
    .catch((err) => {
      console.log(
        'Error retrieving currency nonce for address:',
        USDCToken,
        err
      );
      return 0;
    });
};

const getUsdcCurrencyName = async (): Promise<string> => {
  return (await readContract(config, {
    address: USDCToken,
    abi: USDCABI,
    functionName: 'name',
  }).catch((err) => {
    console.error(
      'Error retrieving currency name for address:',
      USDCToken,
      err
    );
    return '';
  })) as Promise<string>;
};
