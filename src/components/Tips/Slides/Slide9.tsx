import {Box} from "@mui/material"
import React from "react"
import {showTips} from "@/store/reducers/uiReducer.tsx"
import {useDispatch} from "react-redux"
import {useRouter} from "next/router";

export const Slide9 = () => {
  const dispatch = useDispatch()
  const router = useRouter()

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '20px',
      flexDirection: 'column',
      alignItems: 'center',
      height: 'calc(var(--vh, 1vh) * 100)',
      position: 'relative',
      flex: '0 0 100%',
      minWidth: 0
    }}>
      <Box sx={{
        bgcolor: '#FFF',
        borderRadius: '20px',
        width: '280px',
        boxSizing: 'border-box',
        border: 'none',
        outline: 'none',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '24px 20px',
      }}
           onClick={(e) => e.stopPropagation()}>
        <Box lineHeight='18.75px'>It looks like that's it!</Box>
        <span style={{
          color: '#8F8F8F',
          textAlign: 'center',
          marginTop: '12px',
          fontSize: '14px',
          lineHeight: '16.41px',
        }}>If you still have questions, check out the tutorials for more info or shoot us a message and we'll help you out. We're here to help, so don't hesitate to ask.</span>
        <Box sx={{
          bgcolor: '#292929',
          borderRadius: '100px',
          color: '#FFFFFF',
          padding: '10px 24px',
          width: '100%',
          boxSizing: 'border-box',
          textAlign: 'center',
          mt: '20px',
          lineHeight: '18.75px',
          cursor: 'pointer',
        }}
             onClick={() => {
               dispatch(showTips(false))
               router.push('/')
               localStorage.setItem('tips', 'shown')
             }}
        >
          Got It
        </Box>
        <span style={{
          color: '#8F8F8F',
          fontSize: '14px',
          marginTop: '18px',
          lineHeight: '16.41px',
          marginBottom: '2px',
          cursor: 'pointer',
        }}
              onClick={() => {
              }}
        >Check out the tutorials </span>
      </Box>
    </Box>

  )
}