import React from 'react'
import {Box} from "@mui/material"
import Image from "next/image"
import mainImg from "@/icons/welcome/curso2.svg"

const Pay = () => {
  return (
    <Box sx={{
      marginTop: '50px',
      // boxSizing: 'border-box'
      height: '100%',
      minHeight: '100%',
      display: 'block',
    }}>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        padding: '24px 18px',
        marginBottom: '20px',
      }}>
        <Image src={mainImg} alt={'curso'}/>
      </Box>
      <Box sx={{}}>
        <Box style={{
          fontWeight: '700',
          lineHeight: '28.13px',
          fontSize: '24px',
          textAlign: 'center',
        }}>
          {/*{t('welcome:text1')} <span style={{color: '#56AAC8'}}>Curso</span> {t('welcome:text2')}*/}
          Hey there! <span style={{color: '#56AAC8'}}>CURSO</span> here — your new, easy way to pay for services
        </Box>
        <Box style={{
          color: '#8F8F8F',
          marginTop: '16px',
          textAlign: 'center',
          fontWeight: '400'
        }}>Our app uses a cool technology that sends money from you to the service provider every second.
          We call it <b style={{color: '#696969', fontWeight: '500'}}>streaming payments.</b></Box>
        {/*<WalletConnectButton onConnect={onConnect}/>*/}
        {/*<WalletConnectButton/>*/}
        {/*<appkit-button />*/}
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          marginTop: '24px',
        }}>
          <Box sx={{
            borderRadius: '100px',
            backgroundColor: '#56AAC8',
            width: '100%',
            padding: '10px 0',
            fontWeight: '500',
            fontFamily: 'HarmonyOS Sans, serif',
            fontSize: '16px',
            textAlign: 'center',
            border: 'none',
            outline: 'none',
            color: '#fff',
            cursor: 'pointer',
          }}>Next</Box>
          <Box sx={{
            color: '#8F8F8F',
            fontSize: '14px',
            width: '100%',
            textAlign: 'center',
            padding: '10px 0',
            cursor: 'pointer'
          }}>Skip</Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Pay