import React, {useState} from 'react';
import {Box} from "@mui/material"
import {TipsModal} from "@/components/Tips/TipsModal.tsx";
import Carousel from "@/components/Tips/Carousel.tsx";

const Tips = () => {
  const [step, setStep] = useState(0)

  return (
    <TipsModal isOpen={true} setOpen={() => {
    }}
    >
      {step === 0 ? <Box sx={{
          bgcolor: '#FFF',
          position: 'fixed',
          top: '50%',
          left: '50%',
          right: '0',
          transform: 'translate(-50%, -50%)',
          borderRadius: '20px',
          width: '280px',
          padding: '24px 20px',
          boxSizing: 'border-box',
          border: 'none',
          outline: 'none',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'

        }}
                         onClick={(e) => e.stopPropagation()}>
          <Box lineHeight='18.75px'>Welcome to CURSO!</Box>
          <span style={{
            color: '#8F8F8F',
            textAlign: 'center',
            marginTop: '16px',
            fontSize: '14px',
            lineHeight: '16.41px',
          }}>Let's start with a tour of the app to make it easier for you to figure it out?</span>
          <Box sx={{
            bgcolor: '#292929',
            borderRadius: '100px',
            color: '#FFFFFF',
            padding: '10px 24px',
            width: '100%',
            boxSizing: 'border-box',
            textAlign: 'center',
            mt: '30px',
            lineHeight: '18.75px'
          }}
               onClick={() => {
                 setStep(1)
               }}
          >
            Let's see
          </Box>
          <span style={{
            color: '#8F8F8F',
            fontSize: '14px',
            marginTop: '18px',
            lineHeight: '16.41px',
            marginBottom: '2px'
          }}
                onClick={() => {
                }}
          >Skip</span>
        </Box>
        : step === 1 && <Carousel/>}
    </TipsModal>
  )
}

export default Tips