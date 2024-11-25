import { BigNumber } from "ethers";

export type PermitSignature = {
    v: number,
    r: string,
    s: string,
    deadline: number,
    /**
     * Permitted currency amount
     */
    value2: BigNumber,
}