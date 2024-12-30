import {Box} from "@mui/material";
import WalletBalance from "@/components/Pages/WalletPage/WalletBalance.tsx";

export const Slide3 = () => {
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
      minWidth: 0,
    }}>
      <Box sx={{
        position: 'absolute',
        top: 46,
        padding: '0 20px',
        boxSizing: 'border-box',
        zIndex: 100,
        width: '100%',
        pointerEvents: 'none',
      }}>
        <WalletBalance buyCrypto={false}/>
        <Box sx={{
          position: 'absolute',
          bottom: -50,
          left: 50,
        }}>
          <svg width="42" height="50" viewBox="0 0 42 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M41.4821 46.7694C41.6094 47.588 41.0491 48.3548 40.2305 48.4822C28.7829 50.2631 18.4405 48.5254 12.3184 40.9073C6.79432 34.0333 5.09324 22.8267 8.49894 6.43971L2.55912 12.3184C1.97032 12.9011 1.02058 12.8962 0.437833 12.3074C-0.144915 11.7186 -0.139998 10.7688 0.448812 10.1861L10.0773 0.656728C10.4147 0.322877 10.8901 0.16836 11.3592 0.2401C11.8284 0.31184 12.2359 0.601372 12.458 1.02077L18.8295 13.0501C19.2173 13.7822 18.9381 14.69 18.2061 15.0778C17.474 15.4655 16.5662 15.1864 16.1784 14.4543L11.6717 5.94568C8.01961 22.6164 9.85654 33.0547 14.6569 39.0281C19.773 45.3943 28.721 47.2367 39.7693 45.5178C40.5879 45.3905 41.3547 45.9508 41.4821 46.7694Z"
                  fill="white"/>
          </svg>
        </Box>
        <Box sx={{
          color: '#FFFFFF',
          fontSize: '14px',
          width: '234px',
          position: 'absolute',
          bottom: -100,
          left: 100,
        }}>
          This widget displays your nickname, the address of the linked wallet that you can copy, and the remaining
          balance. You can tap on it to go to the wallet page.
        </Box>
      </Box>

    </Box>
  )
}