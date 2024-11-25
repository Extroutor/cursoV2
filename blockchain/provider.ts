import {ethers} from "ethers"
import {createProvider, getBaseProvider} from "./permit.ts"
import {gsnPaymasterAddress} from "./constraints.ts"
import {RelayProvider} from "@opengsn/provider"

export const createGsnProvider = async (): Promise<ethers.providers.Web3Provider> => {
console.log('getBaseProvider', getBaseProvider)
    const gsnProvider: any = await RelayProvider.newProvider({
        provider: getBaseProvider(),
        config: {
            loggerConfiguration: { logLevel: "debug" },
            paymasterAddress: gsnPaymasterAddress,
            jsonStringifyRequest: true, // parameter is true for Metamask
            // gasPriceFactorPercent: 30,
            // gasPriceFactorPercent: 0,
            // minMaxPriorityFeePerGas: 500000000000,
        },
    }).init();

    console.log("Relay provider initialized", gsnProvider)

    return createProvider(gsnProvider)

}
