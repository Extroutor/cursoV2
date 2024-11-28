import {useEffect, useState} from 'react';
import {Box} from "@mui/material";
import CustomCircularProgressBar from "./CustomCircularProgressBar.tsx";
import {clamp} from "@/utils/math"
import * as stream from "stream"
import {shortAddress} from "@/utils/shortAddress";
import {timeLeft} from "@/utils/timeLeft";
import Clock from "@/icons/clock.tsx";
// import {cancelStream} from "@/blockchain/cancel.ts";
import {parseDateTime} from "@/utils/dateTimeParser";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Progress = ({data}: { data: any }) => {
    const [progressType, setProgressType] = useState(0)
    const [streamProgress, setStreamProgress] = useState<number>(0)
    const [withdrawProgress, setWithdrawProgress] = useState<number>(0)
    const counterpartyAddress = data.amIRecipient ? data.address_from : data.address_to
    const [dateTimeLeft, setDateTimeLeft] = useState<string | undefined>('')

    useEffect(() => {
        const intervalId = setInterval(() => {
            const endDate = Number(data.end_date) / 1000
            const newDateTimeLeft = timeLeft(endDate)
            setDateTimeLeft(newDateTimeLeft)
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [data.end_date])

    useEffect(() => {

        const updateDiagram = setInterval(() => {

            const {start_date, end_date, cancel_date, amount, totalWithdraws} = data
            const progressDate = !!cancel_date ? cancel_date : Date.now()
            const streamProgress = clamp((progressDate - start_date) / (end_date - start_date), 0, 1) * 100
            const withdrawProgress = clamp(totalWithdraws / amount, 0, 1) * 100
            setStreamProgress(streamProgress)
            setWithdrawProgress(withdrawProgress)

        }, 500)

        return () => clearInterval(updateDiagram)

    }, [stream])

    const cancelStreamSubmit = async () => {
        await cancelStream(Number(data.id))
    }

    const canICancel: boolean = (data.whoCancel === 0)
        || (data.whoCancel === 2 && data.amIRecipient)
        || (data.whoCancel === 1 && !data.amIRecipient)

    // const withdrawnSubmit = async () => {
    //     let value = isMax ? availableForWithdraw : amountInput
    //     value = time > item.end_date ? value : Math.floor(Number(value - 0.01) * 100) / 100
    //
    //     if (isMax && time > item.end_date) {
    //         // value = data
    //         // @ts-ignore
    //         value = Number(data) / 10**6
    //     }
    //
    //     if (availableForWithdraw && item)
    //         await withdraw(
    //             Number(item.id),
    //             setWithdrawLoading,
    //             address,
    //             dispatch,
    //             // provider,
    //             setAmountInput,
    //             router,
    //         ).then(() => {
    //             // dispatch({
    //             //     type: STREAM_ADD_WITHDRAWN, payload: {
    //             //         id: Number(item.id), withdrawItem: {
    //             //             amount: Number(value),
    //             //             date: Math.floor(new Date().getTime() / 1000),
    //             //         }
    //             //     }
    //             // })
    //         })
    // }

    return (
        <Box sx={{
            margin: '16px 20px 20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <Box>
                {data.title ?
                    <>
                        <Box sx={{
                            color: '#292929',
                            fontWeight: '700',
                            fontSize: '18px',
                            textAlign: 'center',
                            marginBottom: '8px',
                        }}>{data.title}</Box>
                        <Box style={{
                            fontSize: '14px',
                            color: '#8F8F8F',
                            textAlign: 'center',
                            marginBottom: '4px'
                        }}>{data.amIRecipient ? 'Incoming stream from' : 'Outgoing stream to'} {data.counterpartyNickname || shortAddress(counterpartyAddress)}</Box>
                    </>
                    : <Box sx={{
                        color: '#292929',
                        fontWeight: '700',
                        fontSize: '18px',
                        textAlign: 'center',
                        marginBottom: '8px',
                    }}>{data.amIRecipient ? 'Incoming stream from' : 'Outgoing stream to'} {data.counterpartyNickname || shortAddress(counterpartyAddress, 4)}</Box>
                }
                <Box style={{
                    fontSize: '14px',
                    color: '#8F8F8F',
                    textAlign: 'center',
                }}>{parseDateTime(data.start_date)}</Box>
            </Box>
            <Box sx={{
                backgroundColor: '#E5E5E5',
                padding: '4px',
                color: '#292929',
                borderRadius: '100px',
                display: 'flex',
                alignItems: 'center',
                fontSize: '16px',
                fontWeight: '500',
                margin: '20px 0'
            }}>
                <Box sx={{
                    borderRadius: '100px',
                    color: progressType === 0 ? '#fff' : '#292929',
                    padding: '4px 16px',
                    backgroundColor: progressType === 0 ? '#292929' : 'transparent',
                    cursor: 'pointer'
                }} onClick={() => setProgressType(0)}>Streamed</Box>
                <Box sx={{
                    borderRadius: '100px',
                    color: progressType === 1 ? '#fff' : '#292929',
                    padding: '4px 16px',
                    backgroundColor: progressType === 1 ? '#292929' : 'transparent',
                    cursor: 'pointer'
                }} onClick={() => setProgressType(1)}>Withdrawn</Box>
            </Box>
            <Box>
                {progressType === 0
                    ?
                    <CustomCircularProgressBar progress={streamProgress} color='#EE964B' amount={Number(data.amount)}/>
                    :
                    <CustomCircularProgressBar progress={withdrawProgress} color='#59D7AB' amount={Number(data.amount)}/>
                }
            </Box>
            {dateTimeLeft && <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                marginTop: '17px'
            }}>
                <Clock/>
                {dateTimeLeft}
            </Box>}
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                width: '100%',
                boxSizing: 'border-box'
            }}>
                {data.amIRecipient && withdrawProgress !== 100 && <Box sx={{
                    bgcolor: '#56AAC8',
                    color: '#292929',
                    fontWeight: '500',
                    textAlign: 'center',
                    padding: '10px 0',
                    width: '100%',
                    borderRadius: '100px',
                    marginTop: '20px',
                }}>Withdraw</Box>}
                {canICancel && dateTimeLeft && <Box sx={{
                    bgcolor: '#FF847E',
                    color: '#FFF',
                    fontWeight: '500',
                    textAlign: 'center',
                    padding: '10px 0',
                    width: '100%',
                    borderRadius: '100px',
                }} onClick={() => {}}
                >Stop</Box>}
            </Box>
        </Box>
    )
}

export default Progress