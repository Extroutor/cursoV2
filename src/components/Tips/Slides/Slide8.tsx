import {Box} from "@mui/material";

import SettingItem from "@/components/Pages/SettingsPage/settingItem.tsx";
import Account from "@/icons/settings/account.tsx";

export const Slide8 = () => {
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
        top: 58,
        padding: '0 10px',
        boxSizing: 'border-box',
        zIndex: 100,
        pointerEvents: 'none',
        maxWidth: '840px',
      }}>
        <SettingItem icon={<Account/>} title='Account' action='next' to='/settings/account' styleProps={{
          padding: '8px 10px',
          borderRadius: '10px'
        }}/>
        <Box sx={{
          position: 'absolute',
          bottom: -70,
          left: '50%',
          transform: 'translateX(-50%)'
        }}>
          <svg width="54" height="60" viewBox="0 0 54 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M51.7934 59.1875C50.9729 59.0735 50.4001 58.316 50.514 57.4954C51.721 48.8054 49.8278 43.9593 45.9233 40.8443C41.8149 37.5667 35.2102 35.9467 26.2717 34.5715C16.1386 33.0126 10.6204 28.6389 7.99526 22.4905C6.02211 17.8691 5.76463 12.404 6.09752 6.80891L2.66395 11.0348C2.14155 11.6778 1.19684 11.7755 0.553887 11.2531C-0.0890661 10.7307 -0.186791 9.78603 0.335607 9.14307L6.83561 1.14307C7.14202 0.765942 7.61215 0.560607 8.09705 0.592116C8.58194 0.623629 9.02154 0.888078 9.27658 1.30169L14.6006 9.93623C15.0354 10.6414 14.8162 11.5655 14.1111 12.0003C13.4059 12.4351 12.4818 12.2159 12.047 11.5108L9.10846 6.74502C8.76594 12.2409 9.01344 17.2352 10.7543 21.3125C12.8791 26.289 17.3609 30.1653 26.7279 31.6064C35.5801 32.9683 42.9753 34.6547 47.7942 38.4992C52.8171 42.5063 54.7786 48.5981 53.4855 57.9081C53.3715 58.7287 52.614 59.3015 51.7934 59.1875Z"
                  fill="white"/>
          </svg>
          <Box sx={{
            color: '#FFFFFF',
            fontSize: '14px',
            width: '238px',
            position: 'absolute',
            bottom: -80,
            left: -55,
          }}>In the account settings, you can access information about the linked wallet, modify your nickname, and sign
            out of your account.</Box>
        </Box>
      </Box>
    </Box>
  )
}