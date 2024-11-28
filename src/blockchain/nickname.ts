import {config} from "../../wagmi-config"
import {AddressType} from "@/types/system"
import {readContract, simulateContract, waitForTransactionReceipt, writeContract,} from '@wagmi/core'
import {isLoading} from "@/store/reducers/uiReducer";
import {setNickname} from "@/store/reducers/userReducer";
import {nicknameABI, nicknameAddress} from "@/blockchain/constraints";

export const getNicknameByAddress = async (address: AddressType) => {
    try {
        return (await readContract(config, {
            address: nicknameAddress,
            abi: nicknameABI,
            functionName: 'addrNick',
            args: [address],
        })) as string | null
    } catch (err) {
        console.error('Error reading nickname by address:', address, err);
        return
    }
}

export const getAddressByNickname = async (nickname: string) => {
    return await readContract(config, {
        address: nicknameAddress,
        abi: nicknameABI,
        functionName: 'nickAddr',
        args: [nickname],
    })
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const addNickname = async (address: AddressType, nickname: string, dispatch: any) => {
    dispatch(isLoading(true))
    const {request} = await simulateContract(config, {
        address: nicknameAddress,
        abi: nicknameABI,
        functionName: 'setNick',
        args: [nickname],
        account: address
    })

    await writeContractHandler(request, dispatch, nickname)
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const changeNickname = async (address: AddressType, oldNickname: string, newNickname: string, dispatch: any) => {
    dispatch(isLoading(true))
    const {request} = await simulateContract(config, {
        address: nicknameAddress,
        abi: nicknameABI,
        functionName: 'changeNick',
        args: [oldNickname, newNickname],
        account: address
    })

    await writeContractHandler(request, dispatch, newNickname)
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const writeContractHandler = async (request: any, dispatch: any, nickname: string) => {
    await writeContract(config, request).then((hash) => {
        const timer = setInterval(async () => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const receipt: any = await waitForTransactionReceipt(config, {
                hash: hash,
            }).catch(err => {
                console.log(err)
                dispatch(isLoading(false))
            })
            if (receipt && receipt.status === "success") {
                clearInterval(timer)
                dispatch(setNickname(nickname))
                dispatch(isLoading(false))
            }
        }, 1000)
    }).catch((err) => {
        console.log({err})
        dispatch(isLoading(false))
    })
}
