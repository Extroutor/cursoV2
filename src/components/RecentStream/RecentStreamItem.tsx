import {Box} from '@mui/material'
import ArrowUp from '@/icons/arrowUp.tsx';
import StatusBar from '../StatusBar.tsx';
import {shortAddress} from "@/utils/shortAddress";
import ArrowDown from "@/icons/arrowDown.tsx";
import {useRouter} from "next/router";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const RecentStreamItem = ({stream, styleProps}: { stream: any, styleProps?: any }) => {
  const router = useRouter()
  const counterpartyAddress = stream.amIRecipient ? stream.address_from : stream.address_to

  const status = stream.status === 0 && stream.end_date < Date.now() ? 3 : stream.start_date > Date.now() ? 4 : 0

  return (
    <Box sx={{
      padding: '10px 0',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '8px',
      cursor: 'pointer',
      bgcolor: '#fff',
      borderRadius: '10px',
      ...styleProps
    }}
         onClick={() => router.push(`/stream/${stream.id}`)}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          minWidth: '100px'
        }}
      >
        <Box sx={{
          backgroundColor: '#CECECE',
          width: '30px',
          minWidth: '30px',
          height: '30px',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          {stream.amIRecipient ? <ArrowDown/> : <ArrowUp/>}
        </Box>
        <Box sx={{
          minWidth: '100px',
        }}>
          <Box sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
          >{stream.counterpartyNickname}</Box>
          <Box sx={{
            color: '#8F8F8F',
            fontSize: '12px',
            lineHeight: '14.06px',
          }}>{shortAddress(counterpartyAddress, 4)}</Box>
        </Box>

      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
        }}
      >
        <StatusBar itemID={status}/>
        <Box sx={{
          fontSize: '14px',
          fontWeight: '700',
          minWidth: '76px',
          textAlign: 'right'
        }}>${Number(stream.amount).toFixed(2)}</Box>
      </Box>


    </Box>
  )
}

export default RecentStreamItem