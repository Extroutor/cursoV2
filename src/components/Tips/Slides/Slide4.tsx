import {Box} from "@mui/material";
import ProcessedStreamItem from "@/components/ProcessedStream/ProcessedStreamItem.tsx";

export const Slide4 = () => {
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
  console.log("start", Math.floor(Date.now()))
  console.log("end", Math.floor(Date.now() + 900))

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
        top: 240,
        padding: '0 20px',
        boxSizing: 'border-box',
        zIndex: 100,
        pointerEvents: 'none',
      }}>
        <ProcessedStreamItem data={mockData}/>
        <Box sx={{
          position: 'absolute',
          top: -70,
          right: '40%',
        }}>
          <Box sx={{
            color: '#FFFFFF',
            fontSize: '14px',
            width: '175px',
            position: 'absolute',
            top: -90,
            left: -50,
          }}>
            When you start streaming, information about it will be displayed here. You can tap on it to see details.
          </Box>
          <svg width="54" height="59" viewBox="0 0 54 59" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M2.20658 0.401376C3.02713 0.515341 3.59993 1.27292 3.48596 2.09347C2.27902 10.7835 4.17216 15.6296 8.07668 18.7446C12.1851 22.0222 18.7898 23.6422 27.7283 25.0174C37.8614 26.5763 43.3796 30.9499 46.0047 37.0984C47.9779 41.7197 48.2354 47.1848 47.9025 52.78L51.3361 48.554C51.8585 47.9111 52.8032 47.8133 53.4461 48.3357C54.0891 48.8581 54.1868 49.8028 53.6644 50.4458L47.1644 58.4458C46.858 58.8229 46.3879 59.0283 45.903 58.9968C45.4181 58.9652 44.9785 58.7008 44.7234 58.2872L39.3994 49.6526C38.9646 48.9475 39.1838 48.0234 39.8889 47.5886C40.5941 47.1538 41.5182 47.3729 41.953 48.0781L44.8915 52.8438C45.2341 47.3479 44.9866 42.3537 43.2457 38.2764C41.1209 33.2999 36.6391 29.4235 27.2721 27.9825C18.4199 26.6206 11.0247 24.9342 6.20575 21.0897C1.18294 17.0825 -0.778566 10.9907 0.514486 1.68076C0.628451 0.860211 1.38603 0.28741 2.20658 0.401376Z"
                  fill="white"/>
          </svg>
        </Box>
      </Box>
    </Box>
  )
}