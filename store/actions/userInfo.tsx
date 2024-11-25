// import getBalanceOf from "../../blockChain/accounts";
// import { historyABI, historyAddress, nicknameContractABI, nicknameContractAddress } from "../../blockChain/constrains";
// import { publicClient } from "../../wagmiConfig";
// import { IStreamData, IWithdraw, StreamActionTypes } from "../../types/stream";
// import { checkWalletConnector } from "../../utils/verifyConnector";
// import { BalanceActionTypes } from "../../types/balance";
// import { ChainTypes } from "../../types/chain";
// import { UserActionTypes } from "../../types/user";
// // import { readContract } from "@wagmi/core";
//
// const readContract = publicClient.readContract;
//
// export const sendFormInformation = (accountAddress: any) => async (dispatch: any) => {
//
//     dispatch({ type: BalanceActionTypes.BALANCE_LOADING });
//
//     try {
//
//         const balancePromise = getBalanceOf(accountAddress);
//         const nicknamePromise = readContract({
//             address: nicknameContractAddress,
//             abi: nicknameContractABI,
//             functionName: "addrNick",
//             args: [accountAddress],
//         }) as Promise<string>;
//
//         const [balance, nickname] = await Promise.all([balancePromise, nicknamePromise]);
//
//         dispatch({ type: BalanceActionTypes.BALANCE_UPDATE, payload: balance });
//         dispatch({ type: ChainTypes.CHAIN_UPDATE, payload: 137 });
//         dispatch({ type: UserActionTypes.UPDATE_USER_NICK, payload: nickname ?? "", });
//
//     } catch (err) {
//
//         console.error("Error retreiving user nickname for account address: ", accountAddress, err);
//         dispatch({ type: BalanceActionTypes.BALANCE_UPDATE });
//
//     }
// };
//
// export const getData = (currentPage: number, isTotal?: boolean) => async (dispatch: any, getState: Function) => {
//
//     currentPage = Number(currentPage);
//     if (isTotal) {
//         dispatch({ type: StreamActionTypes.STREAM_LOADING });
//     }
//     else {
//         dispatch({ type: StreamActionTypes.PAGE_LOADING, payload: currentPage });
//     }
//
//     try {
//
//         const { address } = getState().user;
//
//         await checkWalletConnector();
//
//         const [streams, totalNumberOfStreams] = await getStreamDatas(address, currentPage);
//
//         dispatch({
//             type: StreamActionTypes.STREAM_UPDATE,
//             payload: {
//                 streams: streams,
//                 count: totalNumberOfStreams,
//                 currPage: currentPage,
//             },
//         });
//
//     } catch (err) {
//         console.error(err);
//         dispatch({ type: StreamActionTypes.STREAM_ERROR });
//     }
// };
//
// const getStreamDatas = async (userAddress: string, currentPage: number): Promise<[IStreamData[], number]> => {
//
//     const totalNumberOfStreams = Number(await readContract({
//         address: historyAddress,
//         abi: historyABI,
//         functionName: "getNumberOfArray",
//         args: [userAddress],
//     }));
//
//     const firstIndex = totalNumberOfStreams - 8 * (currentPage - 1) - 1;
//     const lastIndex = firstIndex > 7 ? firstIndex - 8 + 1 : 0;
//
//     const streamPromises: Promise<IStreamData>[] = [];
//
//     for (let i = firstIndex; i >= lastIndex; i--) {
//         const streamPromise = getStreamDataByIndex(userAddress, i);
//         streamPromises.push(streamPromise);
//     }
//
//     const streams = await Promise.all(streamPromises);
//
//     return [streams, totalNumberOfStreams];
//
// }
//
// const getStreamDataByIndex = async (userAddress: string, streamIndex: number): Promise<IStreamData> => {
//
//     const streamId = Number(await readContract({
//         address: historyAddress,
//         abi: historyABI,
//         functionName: "addressIds",
//         args: [userAddress, streamIndex],
//     }));
//
//     return await getStreamDataById(userAddress, streamId);
// }
//
// export const getStreamDataById = async (userAddress: string, streamId: number): Promise<IStreamData> => {
//
//     const data: any = await readContract({
//         address: historyAddress,
//         abi: historyABI,
//         functionName: "getHistoryStream",
//         args: [streamId],
//     });
//
//     const countOfWithdraws = data.numberOfWithdraws;
//
//     const withdrawPromises: Promise<IWithdraw>[] = [];
//     for (let i = 1; i <= countOfWithdraws; i++) {
//         const withdrawPromise = getWithdrawInfo(streamId, i);
//         withdrawPromises.push(withdrawPromise);
//     }
//     const withdrawsPromise = Promise.all(withdrawPromises);
//
//     const nickNameUserAddress = data.sender === userAddress
//         ? data.recipient
//         : data.sender;
//
//     const nicknamePromise = readContract({
//         address: nicknameContractAddress,
//         abi: nicknameContractABI,
//         functionName: "addrNick",
//         args: [nickNameUserAddress],
//     }) as Promise<string>;
//
//     const [streamWithdraws, nickname] = await Promise.all([withdrawsPromise, nicknamePromise]);
//
//     const recipientAmountOnCancel = Number(data.recipientAmountOnCancel);
//     const cancelTime = Number(data.cancelTime);
//
//     if (recipientAmountOnCancel !== 0) {
//         streamWithdraws.push({
//             amount: recipientAmountOnCancel / 10 ** 6,
//             date: cancelTime * 1000,
//             isCancelWithdraw: true,
//         });
//     }
//
//     const totalWithdraw = streamWithdraws.reduce((sum, w) => sum + w.amount, 0);
//
//     const stream : IStreamData = {
//         id: Number(streamId),
//         start_date: Number(data.startTime) * 1000,
//         end_date: Number(data.stopTime) * 1000,
//         cancel_date: Number(data.cancelTime) * 1000,
//         block_date: Number(data.blockTime) * 1000,
//         amount: Number(data.deposit) / 10 ** 6,
//         address_from: data.sender,
//         address_to: data.recipient,
//         counterpartyNickname: nickname,
//         whoCancel: Number(data.whoCancel),
//         currency: "USDT",
//         countOfWithdraw: countOfWithdraws,
//         withdraws: streamWithdraws,
//         totalWithdraws: totalWithdraw,
//         purpose: data.purpose,
//         status: Number(data.status),
//         amIRecipient: String(data.recipient).toLowerCase() === userAddress.toLowerCase(),
//     };
//
//     return stream;
// }
//
// const getWithdrawInfo = async (streamId: number, withdrawIndex: number): Promise<IWithdraw> => {
//
//     const data: any = await readContract({
//         address: historyAddress,
//         abi: historyABI,
//         functionName: "withdraws",
//         args: [Number(streamId), withdrawIndex],
//     });
//
//     const withdraw: IWithdraw = {
//         amount: Number(data[0]) / 10 ** 6 ,
//         date: Number(data[1]) * 1000,
//     }
//
//     return withdraw;
//
// }