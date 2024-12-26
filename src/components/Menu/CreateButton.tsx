import {useRouter} from "next/router";
import {Box} from "@mui/material";

interface Props {
  id: number
  activeItem?: number
  setActive: (id: number) => void
  tips?: boolean
}

const CreateButton = ({id, setActive, tips = false}: Props) => {
  const router = useRouter()

  return (
    <div style={{
      padding: '10px',
      borderRadius: '100px',
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#56AAC8',
      cursor: 'pointer',
      position: 'relative',
    }}
         onClick={() => {
           setActive(id)
           router.push('/create')
         }}
    >
      <svg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M16.0435 8.04348C16.0435 7.46718 15.5763 7 15 7C14.4237 7 13.9565 7.46718 13.9565 8.04348V13.9565H8.04348C7.46718 13.9565 7 14.4237 7 15C7 15.5763 7.46718 16.0435 8.04348 16.0435H13.9565V21.9565C13.9565 22.5328 14.4237 23 15 23C15.5763 23 16.0435 22.5328 16.0435 21.9565V16.0435H21.9565C22.5328 16.0435 23 15.5763 23 15C23 14.4237 22.5328 13.9565 21.9565 13.9565H16.0435V8.04348Z'
          fill='#292929'/>
      </svg>
      {tips && <Box sx={{
        position: 'absolute',
        width: '100%',
        bottom: 28,
        right: -60,
        zIndex: 10000
      }}>
          <svg width="39" height="63" viewBox="0 0 39 63" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd"
                    d="M31.8917 34.2958C36.6849 24.6533 36.6989 13.3073 30.6958 2.74107C30.2866 2.02077 30.5388 1.10511 31.2591 0.695885C31.9794 0.286659 32.895 0.53883 33.3043 1.25913C39.8006 12.6936 39.8152 25.0956 34.5781 35.6312C29.6434 45.5583 20.0983 53.7365 7.12863 57.9526L11.2007 59.6326C11.9665 59.9485 12.3312 60.8255 12.0153 61.5913C11.6993 62.3571 10.8224 62.7218 10.0566 62.4058L1.55784 58.8996C1.12539 58.7212 0.800937 58.3512 0.680485 57.8992C0.560029 57.4472 0.657368 56.9648 0.943692 56.5949L7.1479 48.5788C7.65495 47.9237 8.59708 47.8036 9.25221 48.3107C9.90734 48.8177 10.0274 49.7598 9.52033 50.415L5.7933 55.2304C18.3027 51.2721 27.3086 43.5157 31.8917 34.2958Z"
                    fill="white"/>
          </svg>
          <Box sx={{
            color: '#FFFFFF',
            fontSize: '14px',
            width: '154px',
            position: 'absolute',
            bottom: 80,
            right: -20,
          }}>
              To create a new stream, tap on the plus sign.
          </Box>
      </Box>
      }
    </div>
  )
};

export default CreateButton;