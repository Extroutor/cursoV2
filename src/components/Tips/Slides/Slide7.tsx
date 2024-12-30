import {Box} from "@mui/material"
import TokenItem from "@/components/Pages/WalletPage/TokenItem.tsx";

export const Slide7 = () => {
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
        top: 290,
        boxSizing: 'border-box',
        zIndex: 100,
        width: '100%',
        padding: '0px 10px',
        maxWidth: 840,
        pointerEvents: 'none',
      }}>
        <TokenItem token='usdc' styleProps={{
          borderRadius: '10px',
          padding: '9px 10px',
        }}/>
        <Box sx={{
          position: 'absolute',
          bottom: -70,
          left: 30,
        }}>
          <svg width="43" height="50" viewBox="0 0 43 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M42.0651 46.7694C42.1925 47.588 41.6321 48.3548 40.8135 48.4822C29.3659 50.2631 19.0235 48.5254 12.9015 40.9073C7.37733 34.0333 5.67625 22.8267 9.08195 6.43971L3.14213 12.3184C2.55332 12.9011 1.60358 12.8962 1.02084 12.3074C0.438093 11.7186 0.44301 10.7688 1.03182 10.1861L10.6603 0.656728C10.9977 0.322877 11.4731 0.16836 11.9422 0.2401C12.4114 0.31184 12.8189 0.601372 13.041 1.02077L19.4125 13.0501C19.8003 13.7822 19.5211 14.69 18.7891 15.0778C18.057 15.4655 17.1492 15.1864 16.7614 14.4543L12.2547 5.94568C8.60262 22.6164 10.4396 33.0547 15.2399 39.0281C20.356 45.3943 29.304 47.2367 40.3523 45.5178C41.1709 45.3905 41.9378 45.9508 42.0651 46.7694Z"
                  fill="white"/>
          </svg>
          <Box sx={{
            color: '#FFFFFF',
            fontSize: '14px',
            width: '268px',
            position: 'absolute',
            top: 0,
            left: 60,
          }}>When calculating the balance, we only consider USDC. To access a complete list of available tokens and the
            full balance of your wallet, please use your wallet app.</Box>
        </Box>
      </Box>

    </Box>
  )
}