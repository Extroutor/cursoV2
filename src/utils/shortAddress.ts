export const shortAddress = (address: string, length?: number): string =>
    `${address.substring(0, length ?? 7)}...${address.substring(address.length - (length ?? 5))}`