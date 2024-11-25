import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getCount, getStreamDataByIndex} from "../blockchain/streams.ts"
import {isLoading} from "../store/reducers/uiReducer.tsx";

const useStreams = () => {
    const address = useSelector((store: any) => store.user.address)
    const [streams, setStreams] = useState([])
    const [processedStream, setProcessedStream] = useState([])
    const [recentStream, setRecentStream] = useState([])
    const dispatch = useDispatch()
    const [addressLoaded, setAddressLoaded] = useState(false)

    useEffect(() => {
        if (address && !addressLoaded) {
            setAddressLoaded(true)
        }
    }, [address])

    useEffect(() => {
        const fetchStreams = async () => {
            dispatch(isLoading(true))
            try {
                const streamCount = Number(await getCount(address))
                const streamPromises: any[] = [] //Promise<any>[]

                for (let i = 0; i < streamCount; i++) {
                    const streamPromise = getStreamDataByIndex(address, i)
                    streamPromises.push(streamPromise)
                }

                const streams: any = await Promise.all(streamPromises)
                setStreams(streams)
                setProcessedStream(streams.filter((stream: any) => stream.status === 0 && stream.end_date > Date.now()) || [])
                setRecentStream(streams.filter((stream: any) => stream.status === 0 && stream.end_date < Date.now()) || [])

            } catch (error) {
                console.error(error)
            } finally {
                dispatch(isLoading(false))
            }
        }

        if (addressLoaded) {
            fetchStreams()
        }
    }, [addressLoaded])

    return {streams, processedStream, recentStream}
};


export default useStreams