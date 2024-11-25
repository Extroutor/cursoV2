import {ERC2771ForwarderABI, ERC2771ForwarderAddress, nicknameABI, nicknameAddress} from "./constraints.ts"
import {config} from "../wagmi-config.ts"
import {isLoading} from "../store/reducers/uiReducer.tsx"
// import {readContract, simulateContract, writeContract} from '@wagmi/core'
import {AddressType} from "../types/system.ts"
import {setNickname} from "../store/reducers/userReducer.ts";
import {readContract, simulateContract, waitForTransactionReceipt, writeContract,} from '@wagmi/core'

export const getNicknameByAddress = async (address: any) => {
    try {
        const domain = await (readContract(config, {
            address: ERC2771ForwarderAddress,
            abi: ERC2771ForwarderABI,
            functionName: 'eip712Domain'
        }))
        console.log('domain', domain)
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

export const getAddressByNickname = async (nickname: any) => {
    return await readContract(config, {
        address: nicknameAddress,
        abi: nicknameABI,
        functionName: 'nickAddr',
        args: [nickname],
    })
}

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

const writeContractHandler = async (request: any, dispatch: any, nickname: string) => {
    await writeContract(config, request).then((hash) => {
        let timer = setInterval(async () => {
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
