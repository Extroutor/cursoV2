import {useReadContract} from "wagmi";
import {nicknameABI, nicknameAddress} from "../blockchain/constraints.ts";
import {config} from "../wagmi-config.ts"

const useNickname = (address: string) => {
    const {isLoading, data} = useReadContract({
        abi: nicknameABI,
        address: nicknameAddress,
        functionName: 'addrNick',
        args: [address],
        config
    });

    return {isLoading, data}
}

export default useNickname