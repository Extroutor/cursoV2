// import {ethers} from "ethers";
// import {RelayProvider} from "@opengsn/provider";
// import {gsnPaymasterAddress, streamContractABI, streamContractAddress} from "@/blockchain/constraints";
//
// export const cancelStream = async (streamId: number) => {
//   console.log('streamContractABI', streamContractABI)
//   try {
//     // setLoading(true);
//     // await checkWalletConnector();
// // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     let provider = new ethers.providers.Web3Provider(window.ethereum, "any");
//
// // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     await window.ethereum.request({method: "eth_requestAccounts"});
//     const gsnProvider = await RelayProvider.newProvider({
//       provider: window.ethereum,
//       config: {
//         loggerConfiguration: {logLevel: "debug"},
//         paymasterAddress: gsnPaymasterAddress,
//       },
//     }).init();
//
//     provider = new ethers.providers.Web3Provider(gsnProvider);
//
//     const theContract = new ethers.Contract(streamContractAddress, streamContractABI, provider.getSigner());
// // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     await theContract.cancelStream(streamId).then((hash: any) => {
//       console.log("Hash: ", hash);
//       hash.wait();
//       setTimeout(() => {
//         // dispatch({ type: CancelModalTypes.HIDE_CANCEL_MODAL });
//         // dispatch(getData(1, true));
//         // setLoading(false);
//         // if (router.push) router.push("/");
//       }, 2000);
//       return;
//     });
//   } catch (err) {
//     // setLoading(false);
//     console.log(err);
//     // dispatch({ type: CancelModalTypes.CANCEL_MODAL_ERROR });
//   }
// };

// import { checkWalletConnector } from '../utils/verifyConnector';
// import { getData } from '../store/actions/userInfo';
import {getWalletClient} from '@wagmi/core';
import {encodeFunctionData} from 'viem';
import {config, publicClient} from "../../wagmi-config.ts";
import {streamContractABI, streamContractAddress} from "@/blockchain/constraints.ts";
import {signMetaTxRequest} from "@/blockchain/signMetaTxRequest.ts";
import {isLoading} from "@/store/reducers/uiReducer.tsx";

export type MetaTxData = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  to: any;
  data: string;
  deadline: number;
  gas: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  from: any;
};


export const cancelStream = async (
  streamId: number,
  // setLoading: Function,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dispatch: any,
  // router: any
) => {
  try {
    dispatch(isLoading(true));
    // await checkWalletConnector();

    const walletClient = await getWalletClient(config);
    console.log("walletClient", walletClient)
    if (!walletClient) {
      throw new Error('No wallet client found');
    }

    const accountAddress = walletClient.account.address;
    console.log('accountAddress', accountAddress)

    const cancelStreamData = encodeFunctionData({
      abi: streamContractABI,
      functionName: 'cancelStream',
      args: [streamId],
    });

    console.log("cancelStreamData", cancelStreamData)

    const gasEstimation = await publicClient.estimateContractGas({
      address: streamContractAddress,
      abi: streamContractABI,
      functionName: 'cancelStream',
      args: [streamId],
      account: walletClient.account,
    })


    console.log("gasEstimation", gasEstimation)

    const metaTxData: MetaTxData = {
      to: streamContractAddress,
      data: cancelStreamData,
      deadline: Math.floor(Date.now() / 1000) + 3600, // 1 hour from now
      gas: ((gasEstimation * BigInt(140)) / BigInt(100)).toString(), // add 40%
      from: accountAddress,
    };

    console.log("metaTxData", metaTxData)

    const request = await signMetaTxRequest(
      walletClient,
      publicClient,
      metaTxData
    );

    console.log("request", request)

    // Send the request to API (to start the stream)
    const response = await fetch('/api/relayer-request', {
      method: 'POST',
      body: JSON.stringify(request),
      headers: {'Content-Type': 'application/json'},
    });

    console.log("response", response)
    const responseData = await response.json();

    if (responseData.success) {
      console.log('Hash:', responseData.txHash);

      // dispatch({ type: CancelModalTypes.HIDE_CANCEL_MODAL });
      // hideStreamModal(dispatch);

      // dispatch(getData(1, true));

      window.location.reload()
      dispatch(isLoading(false));

      // setLoading(false);
      // if (router.push) router.push('/');
    } else {
      console.error('Response error:', responseData.error);
    }
  } catch (err) {
    dispatch(isLoading(false));
    console.log(err);
    // dispatch({ type: CancelModalTypes.CANCEL_MODAL_ERROR });
  }
};
