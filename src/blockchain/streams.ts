import {AddressType} from "@/types/system"
import {readContract} from "@wagmi/core"
import {config} from "../../wagmi-config"
import {
  historyContractABI,
  historyContractAddress,
} from "./constraints"
import {getNicknameByAddress} from "@/blockchain/nickname"
import {getWithdrawByIndex} from "@/blockchain/withdraw"


export const getCount = async (address: AddressType) => {
  return await readContract(config, {
    address: historyContractAddress,
    abi: historyContractABI,
    functionName: 'getNumberOfArray',
    args: [address],
  })
}

export const getId = async (address: AddressType, id: number) => {
  return await readContract(config, {
    address: historyContractAddress,
    abi: historyContractABI,
    functionName: 'addressIds',
    args: [address, id],
  })
}

const getById = async (id: number) => {
  return await readContract(config, {
    address: historyContractAddress,
    abi: historyContractABI,
    functionName: 'getHistoryStream',
    args: [id],
  })
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getStreamDataByIndex = async (address: AddressType, streamIndex: number): any => {
  const streamId = Number(await getId(address, streamIndex));
  return await getStreamDataById(address, streamId)
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getStreamDataById = async (address: AddressType, streamId: number): any => {
// eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data: any = await getById(streamId)

  const countOfWithdraws = data.numberOfWithdraws;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const withdrawPromises: Promise<any>[] = [];
  for (let i = 1; i <= countOfWithdraws; i++) {
    const withdrawPromise = getWithdrawInfo(streamId, i);
    withdrawPromises.push(withdrawPromise);
  }

  const withdrawsPromise = Promise.all(withdrawPromises);

  const nickNameUserAddress = data.sender === address
    ? data.recipient
    : data.sender

  const nicknamePromise = await getNicknameByAddress(nickNameUserAddress)

  const [streamWithdraws, nickname] = await Promise.all([withdrawsPromise, nicknamePromise]);

  const recipientAmountOnCancel = Number(data.recipientAmountOnCancel);
  const cancelTime = Number(data.cancelTime);

  if (recipientAmountOnCancel !== 0) {
    streamWithdraws.push({
      amount: recipientAmountOnCancel / 10 ** 6,
      amountRaw: String(recipientAmountOnCancel),
      date: cancelTime * 1000,
      isCancelWithdraw: true,
    });
  }

  const totalWithdraw = streamWithdraws.reduce((sum, w) => sum + w.amount, 0);

  return {
    id: Number(streamId),
    start_date: Number(data.startTime) * 1000,
    end_date: Number(data.stopTime) * 1000,
    cancel_date: Number(data.cancelTime) * 1000,
    block_date: Number(data.blockTime) * 1000,
    amount: Number(data.deposit) / 10 ** 6,
    amountRaw: String(data.deposit),
    address_from: data.sender,
    address_to: data.recipient,
    counterpartyNickname: nickname,
    whoCancel: Number(data.whoCancel),
    currency: "USDC",
    countOfWithdraw: countOfWithdraws,
    withdraws: streamWithdraws,
    totalWithdraws: totalWithdraw,
    purpose: data.purpose,
    status: Number(data.status),
    amIRecipient: String(data.recipient).toLowerCase() === String(address).toLowerCase(),
  }
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getWithdrawInfo = async (streamId: number, withdrawIndex: number): Promise<any> => {
// eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data: any = await getWithdrawByIndex(streamId, withdrawIndex)

  return {
    amount: Number(data[0]) / 10 ** 6,
    amountRaw: String(data[0]),
    date: Number(data[1]) * 1000,
  }
}

// export const createStream = async (data: any, setOpenStartModal: any): Promise<void> => {
//     console.log('data', data)
//     let {
//         permitSignaturePromise,
//         address,
//         startNow,
//         start,
//         end,
//         recipient,
//         amount,
//         title,
//         whoCancel,
//         rate,
//         duration,
//         router
//     } = data
//
//     permitSignaturePromise ??= getPermitSignature(address, amount)
//     const permitSignature = await permitSignaturePromise
//     if (!permitSignature) {
//         throw new Error("No permit signature provided by user")
//     }
//     console.log('permitSignaturePromise', permitSignaturePromise)
//
//     if (startNow) {
//         start = 0
//     }
//
//     const provider = await createGsnProvider()
//     console.log('provider', provider)
//     end = Math.floor(Date.now() / 1000) + 3600 // an hour from now
//
//     const streamDetails: any = {
//         // tokenAddress: USDCToken,
//         deposit: amount,
//         recipient: recipient,
//         sender: address,
//         time: [start, end],
//         whoCancel: whoCancel,
//         rate,
//     }
//     console.log('streamDetails', streamDetails)
//
//     const streamContract = new ethers.Contract(
//         streamContractAddress,
//         streamContractABI,
//         provider.getSigner()
//     );
//
//     console.log('permitSignature', permitSignature)
//     // const permitTransaction = await streamContract.permitUSDC(permitSignature)
//     // await permitTransaction.wait()
//
//     const streamTransaction = await streamContract.createStream_2(streamDetails, permitSignature, duration, title).catch((err: any) => {
//         console.log({err})
//         console.log('tut')
//         setOpenStartModal(false)
//     })
//     console.log('streamTransaction', streamTransaction)
//     await streamTransaction.wait().catch((err: any) => {
//         console.log({err})
//         setOpenStartModal(false)
//     })
//     router('/')
//
//     // const {request} = await simulateContract(config, {
//     //     address: streamContractAddress,
//     //     abi: streamContractABI,
//     //     functionName: 'createStream_2',
//     //     args: [streamDetails, permitSignature, duration, title],
//     //     account: address,
//     // })
//     //
//     // console.log('request', request)
//     // await writeContractHandler(request, router).then().catch((err) => {
//     //     console.log({err})
//     // })
//
// }

// const writeContractHandler = async (request: any, router: any,) => {
//     await writeContract(config, request).then((hash) => {
//         let timer = setInterval(async () => {
//             const receipt: any = await publicClient.waitForTransactionReceipt({
//                 hash: hash,
//             }).catch(err => {
//                 console.log(err)
//             })
//             if (receipt && receipt.status === "success") {
//                 clearInterval(timer)
//                 router('/')
//             }
//         }, 1000)
//     }).catch((err) => {
//         console.log({err})
//     })
// }
