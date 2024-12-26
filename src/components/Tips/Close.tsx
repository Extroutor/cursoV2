import React from 'react'
import {Box} from "@mui/material"

const Close = () => {
  return (
    <Box sx={{
      position: 'absolute',
      right: '20px',
      top: '14px',
      width: '26px',
      height: '26px',
      borderRadius: '100%',
      backgroundColor: '#fff',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M11.6924 1.79254C12.1025 1.38247 12.1025 0.717619 11.6924 0.307551C11.2824 -0.102517 10.6175 -0.102517 10.2075 0.307551L6 4.51501L1.79255 0.307551C1.38248 -0.102516 0.717631 -0.102516 0.307564 0.307551C-0.102504 0.717619 -0.102504 1.38247 0.307563 1.79254L4.51501 5.99999L0.30755 10.2075C-0.102517 10.6175 -0.102517 11.2824 0.30755 11.6924C0.717618 12.1025 1.38247 12.1025 1.79254 11.6924L6 7.48498L10.2075 11.6924C10.6175 12.1025 11.2824 12.1025 11.6925 11.6924C12.1025 11.2824 12.1025 10.6175 11.6925 10.2075L7.48498 5.99999L11.6924 1.79254Z"
          fill="#292929"/>
      </svg>
    </Box>
  )
}

export default Close