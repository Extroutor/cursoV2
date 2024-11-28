import {config} from "../../wagmi-config.ts"
import {readContract} from '@wagmi/core'
import {ethers} from "ethers"
import {AddressType} from "@/types/system"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getAccountBalance = async (address: AddressType, token: { address: AddressType, abi: any }) => {
    if (!address) return 0

    const balanceOf: string | number | bigint | undefined = await readContract(config, {
        address: token.address,
        abi: token.abi,
        functionName: 'balanceOf',
        args: [address],
    }).catch((err) => {
        console.log('Error getting balance for address: ', address, err);
        return 0
    })

    return Number(ethers.utils.formatEther(String(balanceOf))) * 10 ** 12;
}