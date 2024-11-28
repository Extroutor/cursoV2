import {BigNumber} from "ethers"

export const addServiceFee = (amount: BigNumber): BigNumber => amount.add(calculateServiceFee(amount))

export const calculateServiceFee = (amount: BigNumber): BigNumber => amount.div(100)
