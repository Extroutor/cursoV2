import {Box} from "@mui/material"
import React from "react"
import Swipe from "@/icons/tips/swipe.tsx"

export const Slide1 = () => {
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
    }}>
      <Swipe/>
      <Box sx={{
        color: '#FFFFFF',
        fontSize: '14px',
        width: '180px',
        textAlign: 'center',
      }}>Swipe left to go to the next hint, or right to go back.</Box>
    </Box>
  )
}