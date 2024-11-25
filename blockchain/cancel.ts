import { ethers } from "ethers";
import { RelayProvider } from "@opengsn/provider";
import {gsnPaymasterAddress, streamContractABI, streamContractAddress} from "./constraints.ts";

export const cancelStream = async (streamId: number) => {
    console.log('streamContractABI', streamContractABI)
    try {
        // setLoading(true);
        // await checkWalletConnector();
        // @ts-ignore
        let provider = new ethers.providers.Web3Provider(window.ethereum, "any");

        // @ts-ignore
        await window.ethereum.request({ method: "eth_requestAccounts" });
        let gsnProvider: any;
        //@ts-ignore
        gsnProvider = await RelayProvider.newProvider({
            // @ts-ignore
            provider: window.ethereum,
            config: {
                loggerConfiguration: { logLevel: "debug" },
                paymasterAddress: gsnPaymasterAddress,
            },
        }).init();

        provider = new ethers.providers.Web3Provider(gsnProvider);

        let theContract = new ethers.Contract(streamContractAddress, streamContractABI, provider.getSigner());

        await theContract.cancelStream(streamId).then((hash: any) => {
            console.log("Hash: ", hash);
            hash.wait();
            setTimeout(() => {
                // dispatch({ type: CancelModalTypes.HIDE_CANCEL_MODAL });
                // dispatch(getData(1, true));
                // setLoading(false);
                // if (router.push) router.push("/");
            }, 2000);
            return;
        });
    } catch (err) {
        // setLoading(false);
        console.log(err);
        // dispatch({ type: CancelModalTypes.CANCEL_MODAL_ERROR });
    }
};
