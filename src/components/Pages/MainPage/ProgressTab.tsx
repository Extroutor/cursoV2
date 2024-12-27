import React from 'react';
import {Box} from "@mui/material";
import {motion} from 'framer-motion';

const ProgressTab = ({count, active}: { count: number, active: number }) => {
  return (
    <Box sx={{
      width: '100%',
      display: 'flex',
      alignItems: 'center',
    }}>
      <Box sx={{
        display: 'flex',
        gap: '6px',
        margin: '0 auto',
      }}>
        {Array(count).fill().map((_, index) => (
          <motion.div
            key={index}
            initial={{width: '6px', backgroundColor: '#E5E5E5'}}
            animate={{
              width: index + 1 === active ? '32px' : '6px',
              backgroundColor: index + 1 === active ? '#56AAC8' : '#E5E5E5',
            }}
            transition={{duration: 0.3}}
            style={{
              height: '6px',
              borderRadius: '4px',
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ProgressTab;