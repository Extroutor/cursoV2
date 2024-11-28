// import {ethers} from "ethers"
//
// export const POLYGON_NETWORK_CHAIN_ID = 137
// export const POLYGON_NETWORK = ethers.providers.getNetwork(POLYGON_NETWORK_CHAIN_ID)
//

import { polygonAmoy } from 'viem/chains';
// import {polygon} from "@reown/appkit/networks";

// const POLYGON_NETWORK_CHAIN_ID = polygon.id;
const POLYGON_AMOY_NETWORK_CHAIN_ID = polygonAmoy.id;

export const CURRENT_NETWORK_ID = POLYGON_AMOY_NETWORK_CHAIN_ID;
