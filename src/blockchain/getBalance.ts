import {readContract} from '@wagmi/core'
import {ethers} from "ethers"
import {config} from "../../wagmi-config"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getAccountBalance = async (address: any, token: any) => {
    if (!address) return 0
// eslint-disable-next-line @typescript-eslint/no-explicit-any
    const balanceOf: any = await readContract(config, {
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