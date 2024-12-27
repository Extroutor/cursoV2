import {useState, useEffect} from 'react'
import {getAccountBalance} from "@/blockchain/getBalance.ts"
import {MaticABI, MaticToken, USDCABI, USDCToken} from "@/blockchain/constraints.ts"
import {AddressType} from "@/types/system.ts";
import {useAppKitAccount} from "@reown/appkit/react";

const useAccountBalance = (address: AddressType, token: 'usdc' | 'matic') => {
  const [balance, setBalance] = useState<number | null>(null)
  const [balanceLoading, setBalanceLoading] = useState(true)
  const {address: addr, isConnected} = useAppKitAccount()

  useEffect(() => {
    let intervalId: NodeJS.Timeout
    setBalanceLoading(true)

    const fetchBalance = () => {
      const chosenToken = token === 'usdc' ? {address: USDCToken, abi: USDCABI} : {address: MaticToken, abi: MaticABI}
      getAccountBalance(addr, chosenToken)
        .then((data) => {
// eslint-disable-next-line @typescript-eslint/no-explicit-any
          setBalance(data)
          setBalanceLoading(false)
        })
        .catch((error) => {
          console.log({error})
          setBalanceLoading(false)
        })
    }

    fetchBalance()

    // eslint-disable-next-line prefer-const
    intervalId = setInterval(fetchBalance, 5000)

    return () => {
      clearInterval(intervalId)
    };
  }, [addr, isConnected, token])

  return {balance, balanceLoading}
}

export default useAccountBalance