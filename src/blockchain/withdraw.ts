import {readContract} from "@wagmi/core"
import {config} from "../../wagmi-config"
import {streamContractABI, streamContractAddress} from "./constraints"
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getWithdrawByIndex = async (streamId: any, withdrawIndex: any) => {
    return await readContract(config, {
        address: streamContractAddress,
        abi: streamContractABI,
        functionName: 'withdraws',
        args: [streamId, withdrawIndex],
    })
}