// import { contractAddress, contractABI } from "./constrains"
// import { ethers } from "ethers";
// import { checkWalletConnector } from "../utils/verifyConnector"
// import { getData } from "../store/actions/userInfo"
// import { WithdrawalModalTypes } from "../types/modals"
// import { createGsnProvider } from "./providers"
//
// const withdraw = async (streamId: number, setLoading: Function, address: any, dispatch: any, setAmountInput: Function, router: any) => {
//     try {
//         setLoading(true);
//         await checkWalletConnector();
//
//         setTimeout(async () => {
//             // @ts-ignore
//             let provider = new ethers.providers.Web3Provider(window.ethereum, "any");
//             // @ts-ignore
//             await window.ethereum.request({ method: "eth_requestAccounts" });
//
//             provider = await createGsnProvider();
//
//             let theContract = new ethers.Contract(contractAddress, contractABI, provider.getSigner());
//
//             await theContract.withdrawFromStream(streamId).then((hash: any) => {
//                 console.log("Hash: ", hash);
//                 hash.wait();
//                 setTimeout(() => {
//                     dispatch({ type: WithdrawalModalTypes.HIDE_WITHDRAWAL_MODAL });
//                     setAmountInput("");
//                     setLoading(false);
//                     if (router.push) router.push("/");
//                     dispatch(getData(1, true));
//                 }, 2000);
//                 return;
//             });
//         }, 1000);
//     } catch (err) {
//         console.log(err);
//         setLoading(false);
//         dispatch({ type: WithdrawalModalTypes.WITHDRAWAL_ERROR, payload: true });
//     }
// };
//
// export default withdraw;
