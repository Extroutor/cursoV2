import {config} from "../../wagmi-config.ts"
import {USDCABI, USDCToken} from "./constraints.ts"
import {readContract} from "@wagmi/core";

export const getUsdcNonce = async (address: string): Promise<number> => {
  console.log('address', address)
    return await readContract(config, {
        address: USDCToken,
        abi: USDCABI,
        functionName: 'nonces',
        args: [address],
    }).then(n => Number(n))
        .catch((err) => {
            console.log("Error retrieving currency nonce for address:", USDCToken, err);
            return 0;
        })
}

export const getUSDCCurrencyName = async (): Promise<string> => {
    return await readContract(config, {
        address: USDCToken,
        abi: USDCABI,
        functionName: 'name',
    }).then(n => String(n))
        .catch((err) => {
            console.error("Error retrieving currency name for address:", USDCToken, err);
            return "";
        }) //as Promise<string>
}


// export const getUsdcDomain = async () => {
//     const currencyName = await getUsdcCurrencyName();
//     return {
//         name: currencyName,
//         version: "2",
//         chainId: POLYGON_NETWORK.chainId,
//         verifyingContract: USDCToken,
//     };
// }