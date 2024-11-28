import Details from "@/components/Pages/StreamPage/Details.tsx"
import {useParams} from "react-router-dom"
import {useQuery} from "@tanstack/react-query"
import {useDispatch, useSelector} from "react-redux"
import {useEffect} from "react"
import {Box} from "@mui/material"
import {isLoading} from "../../store/reducers/uiReducer"
import {getStreamDataById} from "@/blockchain/streams"
import Progress from "@/components/Pages/StreamPage/Progress"
import Header from "@/components/Pages/StreamPage/Header"

const StreamPage = () => {
  const {id} = useParams()
  const userAddress = useSelector((store: any) => store.user.address)
  const dispatch = useDispatch()


  const {data, isLoading: isDataLoading} = useQuery({
    queryKey: ["streams", id],
    queryFn: async () => !!id || Number(id) === 0
      ? await getStreamDataById(userAddress, Number(id))
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
      {!isDataLoading
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