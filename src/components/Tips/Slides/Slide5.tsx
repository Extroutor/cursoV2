import {Box} from "@mui/material";
import ProcessedStreamItem from "@/components/ProcessedStream/ProcessedStreamItem.tsx";
import DropdownMenu from "@/components/ProcessedStream/DropdownMenu.tsx";

export const Slide5 = () => {

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
        top: 240,
        padding: '0 20px',
        boxSizing: 'border-box',
        zIndex: 100,
        pointerEvents: 'none',
        maxWidth: '840px',
      }}>
        <div style={{opacity: 0.7}}>
          <ProcessedStreamItem data={mockData}/>
        </div>
        <Box sx={{
          width: '100%',
          position: 'absolute',
          top: 0,
          right: 20,
          padding: '0 20px',
          boxSizing: 'border-box',
          zIndex: 100,
          pointerEvents: 'none',
        }}>
          <DropdownMenu/>
          <Box sx={{
            position: 'absolute',
            top: -10,
            right: 210,
          }}>
            <svg width="33" height="66" viewBox="0 0 33 66" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd"
                    d="M4.0979 29.9665C5.6415 18.1077 15.6558 6.55189 31.656 3.88335C32.4732 3.74707 33.0251 2.97417 32.8888 2.15703C32.7525 1.33989 31.9796 0.787944 31.1625 0.924228C13.9444 3.79588 2.84804 16.3265 1.123 29.5792C0.25936 36.2142 1.75381 43.0136 5.9999 48.7848C9.8804 54.059 15.9932 58.3877 24.5065 60.9856L20.514 62.6327C19.7482 62.9487 19.3835 63.8256 19.6995 64.5914C20.0154 65.3572 20.8924 65.7219 21.6582 65.406L30.1569 61.8997C30.5894 61.7213 30.9138 61.3514 31.0343 60.8994C31.1547 60.4473 31.0574 59.965 30.7711 59.595L24.5669 51.5789C24.0598 50.9238 23.1177 50.8038 22.4625 51.3108C21.8074 51.8179 21.6874 52.76 22.1944 53.4151L25.9683 58.2911C17.6497 55.8686 11.9349 51.7893 8.41634 47.0069C4.65895 41.8999 3.32721 35.8873 4.0979 29.9665Z"
                    fill="white"/>
            </svg>
            <Box sx={{
              color: '#FFFFFF',
              fontSize: '14px',
              width: '198px',
              position: 'absolute',
              top: -50,
              right: -210,
            }}>
              You can stop or repeat the stream directly from this page, as well as withdraw funds if the stream is
              incoming. </Box>
          </Box>
        </Box>
      </Box>


    </Box>
  )
}