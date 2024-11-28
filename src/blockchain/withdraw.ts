import {readContract} from "@wagmi/core"
import {config} from "../../wagmi-config.ts"
import {streamContractABI, streamContractAddress} from "./constraints.ts"

export const getWithdrawByIndex = async (streamId: any, withdrawIndex: any) => {
    return await readContract(config, {
        address: streamContractAddress,
        abi: streamContractABI,
        functionName: 'withdraws',
        args: [streamId, withdrawIndex],
    })
}