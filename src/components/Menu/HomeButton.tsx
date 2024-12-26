import {useRouter} from "next/router";
import {Box} from "@mui/material";

interface Props {
  id: number
  activeItem: number
  setActive: (id: number) => void
  tips?: boolean
}

const HomeButton = ({id, activeItem, setActive, tips = false}: Props) => {
  const color = activeItem === id ? '#F4F4F4' : '#8F8F8F'
  const router = useRouter()
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
      cursor: 'pointer',
      position: 'relative',
    }}
         onClick={() => {
           setActive(id)
           router.push('/')
         }}
    >
      <svg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M17.1274 4.92366C15.9637 3.69211 14.0363 3.69211 12.8727 4.92366L7.18902 10.9389C6.8626 11.2844 6.64326 11.7211 6.55862 12.1941C5.86836 16.0516 5.81741 20.0006 6.4079 23.8754L6.61697 25.2473C6.683 25.6806 7.04718 26 7.47514 26H11.4466C11.7737 26 12.0389 25.7283 12.0389 25.3931V16.8965H17.9612V25.3931C17.9612 25.7283 18.2264 26 18.5534 26H22.5249C22.9528 26 23.317 25.6806 23.383 25.2473L23.5921 23.8754C24.1826 20.0006 24.1316 16.0516 23.4414 12.1941C23.3567 11.7211 23.1374 11.2844 22.811 10.9389L17.1274 4.92366Z'
          fill={color}/>
      </svg>
      {activeItem === id &&
          <svg width='5' height='4' viewBox='0 0 5 4' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <circle cx='2.375' cy='2' r='2' fill='#F4F4F4'/>
          </svg>
      }
      {tips && <Box sx={{
        position: 'absolute',
        left: -10,
        bottom: 70,
      }}>
          <svg width="29" height="115" viewBox="0 0 29 115" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd"
                    d="M28.2262 0.634713C27.7485 -0.0420825 26.8125 -0.203439 26.1357 0.274314C12.8473 9.65464 6.39759 27.2072 4.39934 47.5445C2.54458 66.4215 4.49093 87.9982 8.62486 108.44L2.55629 102.434C1.96748 101.851 1.01774 101.856 0.434998 102.445C-0.14775 103.034 -0.142832 103.984 0.445977 104.566L10.0745 114.096C10.4118 114.43 10.8872 114.584 11.3564 114.512C11.8255 114.441 12.2331 114.151 12.4552 113.732L18.8267 101.702C19.2144 100.97 18.9353 100.062 18.2032 99.6747C17.4712 99.2869 16.5634 99.566 16.1756 100.298L11.7356 108.681C7.52472 88.1884 5.54237 66.591 7.38497 47.8378C9.3545 27.7927 15.6546 11.3451 27.8658 2.72519C28.5426 2.24744 28.704 1.3115 28.2262 0.634713Z"
                    fill="white"/>
          </svg>
          <Box sx={{
            color: '#FFFFFF',
            fontSize: '14px',
            width: '220px',
            position: 'absolute',
            top: -34,
            left: 40,
          }}>
              Here's a menu where you can find the homepage, activity history, wallet and settings.
          </Box>
      </Box>
      }
    </div>
  )
};

export default HomeButton