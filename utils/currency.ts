import {BigNumber, BigNumberish, ethers} from "ethers"
import {USDC_DECIMALS} from "../blockchain/constants.ts"

export const ZERO = BigNumber.from(0)

export const createUSDCStringRaw = (input: string | null): string => {
    const convertedInput = parseUSDC(input);
    return createUSDCString(convertedInput);
}

export const parseUSDC = (input: string | null): BigNumber | null => {
    if (input === "0") {
        return ZERO;
    }
    return !!input
        ? ethers.utils.parseUnits(String(input), USDC_DECIMALS)
        : null;
}

export const formatUSDC = (value: BigNumberish | null | undefined, decimals?: 0 | 1 | 2 | 3 | 4 | 5 | 6): string | null => {

    if (!value) {
        return null;
    }

    if (!decimals && decimals !== 0 || decimals === USDC_DECIMALS) {
        return ethers.utils.formatUnits(value, USDC_DECIMALS)
    }

    if (decimals < 0) {
        throw new Error("Parameter decimals must be non negative number");
    }
    if (decimals > USDC_DECIMALS) {
        throw new Error("Parameter decimals less than or equal to 6");
    }

    if (!BigNumber.isBigNumber(value)) {
        value = BigNumber.from(value);
    }


    const decimalsToRemove = 10 ** (USDC_DECIMALS - decimals);
    const remainder = value.mod(decimalsToRemove);
    const isGreater = remainder.gt(0.5 * decimalsToRemove)

    const roundedValue = value.sub(remainder).add(isGreater ? decimalsToRemove : 0);
    return ethers.utils.formatUnits(roundedValue, USDC_DECIMALS);
}

export const createUSDCString = (value: BigNumber | null | undefined): string =>
    `${formatUSDC(value ?? null)} USDC`;
