import Details from "@/components/Pages/StreamPage/Details.tsx"
import {useQuery} from "@tanstack/react-query"
import {useDispatch, useSelector} from "react-redux"
import {useEffect} from "react"
import {Box} from "@mui/material"
import {isLoading} from "@/store/reducers/uiReducer"
import {getStreamDataById} from "@/blockchain/streams"
import Progress from "@/components/Pages/StreamPage/Progress"
import Header from "@/components/Pages/StreamPage/Header"
import {useRouter} from "next/router";

const StreamPage = () => {
  const router = useRouter()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const userAddress = useSelector((store: any) => store.user.address) || '0xc0121ef197f4AF9f0B48c5e41DEBD9615a6E02Fb' //todo
  const dispatch = useDispatch()

  const {data, isLoading: isDataLoading} = useQuery({
    queryKey: ["streams", router.query.id],
    queryFn: async () => !!router.query.id || Number(router.query.id) === 0
      ? await getStreamDataById(userAddress, Number(router.query.id))
      : null
  })

  useEffect(() => {
    if (isDataLoading)
      dispatch(isLoading(true))
    else
      dispatch(isLoading(false))
  }, [isDataLoading])

  return (
    <>
      {!isDataLoading && data
        &&
          <>
              <Header/>
              <Box mt='70px'>
                  <Progress data={data}/>
                  <Details data={data}/>
              </Box>
          </>
      }
    </>
  )
}

export default StreamPage