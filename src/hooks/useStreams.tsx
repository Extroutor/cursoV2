import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getCount, getStreamDataByIndex} from "@/blockchain/streams.ts"
import {isLoading} from "@/store/reducers/uiReducer.tsx";
import {useAppKitAccount} from "@reown/appkit/react";

const useStreams = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const address = useSelector((store: any) => store.user.address)
    const [streams, setStreams] = useState([])
    const [processedStream, setProcessedStream] = useState([])
    const [recentStream, setRecentStream] = useState([])
    const dispatch = useDispatch()
    const [addressLoaded, setAddressLoaded] = useState(false)
    const {address: addr, isConnected} = useAppKitAccount()

    useEffect(() => {
        if (addr && isConnected) {
            setAddressLoaded(true)
        }
    }, [addr, isConnected])

    useEffect(() => {
        if (addressLoaded) {
            fetchStreams()
        }
    }, [addressLoaded])

    const fetchStreams = async () => {
        dispatch(isLoading(true))
        try {
            const streamCount = Number(await getCount(address))
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const streamPromises: any[] = [] //Promise<any>[]

            for (let i = 0; i < streamCount; i++) {
                const streamPromise = getStreamDataByIndex(address, i)
                streamPromises.push(streamPromise)
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const streams: any = await Promise.all(streamPromises)
            setStreams(streams)
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            setProcessedStream(streams.filter((stream: any) => stream.status === 0 && stream.end_date > Date.now()) || [])
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            setRecentStream(streams.filter((stream: any) => stream.status === 0 && stream.end_date < Date.now()) || [])

        } catch (error) {
            console.error(error)
        } finally {
            dispatch(isLoading(false))
        }
    }

    return {streams, processedStream, recentStream, fetchStreams}
};


export default useStreams