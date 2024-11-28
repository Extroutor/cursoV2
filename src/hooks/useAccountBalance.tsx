import { useState, useEffect } from 'react'
import {getAccountBalance} from "@/blockchain/getBalance.ts"
import {MaticABI, MaticToken, USDCABI, USDCToken} from "@/blockchain/constraints.ts"

const useAccountBalance = (address: string, token: 'usdc' | 'matic') => {
    const [balance, setBalance] = useState(null)
    const [balanceLoading, setBalanceLoading] = useState(true)

    useEffect(() => {
        let intervalId: NodeJS.Timeout
        setBalanceLoading(true)

        const fetchBalance = () => {
            const chosenToken = token === 'usdc' ? {address: USDCToken, abi: USDCABI} : {address: MaticToken, abi: MaticABI}
            getAccountBalance(address, chosenToken)
                .then((data) => {
                    // @ts-ignore
                    setBalance(data)
                    setBalanceLoading(false)
                })
                .catch((error) => {
                    console.log({ error })
                    setBalanceLoading(false)
                })
        }

        fetchBalance()

        intervalId = setInterval(fetchBalance, 5000)

        return () => {
            clearInterval(intervalId)
        };
    }, [address, token])

    return { balance, balanceLoading }
}

export default useAccountBalance