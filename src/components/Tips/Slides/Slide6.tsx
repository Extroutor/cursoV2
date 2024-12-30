import {Box} from "@mui/material"
import ProcessedStreamItem from "@/components/ProcessedStream/ProcessedStreamItem.tsx"
import RecentStreamItem from "@/components/RecentStream/RecentStreamItem.tsx";

export const Slide6 = () => {
  const mockData = {
    title: 'Payment for legal advice',
    address_from: '0xc012325325325',
    address_to: '0xc01423532502Fb',
    amount: 400,
    end_date: Math.floor(Date.now() + 4000000),
    start_date: Math.floor(Date.now() - 1000000),
    amIRecipient: true,
    status: 1,
  }

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '20px',
      flexDirection: 'column',
      alignItems: 'center',
      height: 'calc(var(--vh, 1vh) * 100)',
      gap: '20px',
      position: 'relative',
      flex: '0 0 100%',
      minWidth: 0
    }}>
      <Box sx={{
        width: '100%',
        position: 'absolute',
        top: 430,
        padding: '0 10px',
        boxSizing: 'border-box',
        zIndex: 100,
        pointerEvents: 'none',
        maxWidth: '840px',
      }}>
        <RecentStreamItem stream={mockData} styleProps={{
          padding: '10px',
        }}/>
        <Box sx={{
          position: 'absolute',
          top: -60,
          right: 50,
        }}>
          <Box sx={{
            color: '#FFFFFF',
            fontSize: '14px',
            width: '252px',
            position: 'absolute',
            top: -50,
            left: -260,
          }}>
            A few recent streams will also be displayed here, which you can tap on to see details. You can find the the
            rest of streams in the history.
          </Box>
          <svg width="33" height="51" viewBox="0 0 33 51" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M0.00091665 1.50029C0.000916102 0.671861 0.67249 0.00028567 1.50092 0.00028745C6.89999 0.000285143 11.402 1.56408 14.9905 4.35588C18.5643 7.13626 21.1455 11.066 22.8436 15.6726C25.7651 23.598 26.1348 33.6806 24.3446 43.9721L30.4454 37.9341C31.0342 37.3513 31.984 37.3563 32.5667 37.9451C33.1495 38.5339 33.1445 39.4836 32.5557 40.0664L22.9272 49.5957C22.5899 49.9296 22.1145 50.0841 21.6453 50.0123C21.1762 49.9406 20.7687 49.6511 20.5465 49.2317L14.175 37.2023C13.7873 36.4702 14.0664 35.5624 14.7985 35.1747C15.5306 34.7869 16.4384 35.0661 16.8261 35.7981L21.2614 44.1718C23.1337 33.9906 22.7833 24.1826 20.0288 16.7102C18.477 12.5007 16.1833 9.08485 13.1484 6.7237C10.1281 4.37398 6.28741 3.00029 1.50092 3.00029C0.672489 3.00029 0.000916357 2.32871 0.00091665 1.50029Z"
                  fill="white"/>
          </svg>
        </Box>
      </Box>
    </Box>
  )
}