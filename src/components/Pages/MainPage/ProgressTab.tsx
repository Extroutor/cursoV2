import React from 'react';
import {Box} from "@mui/material";

const ProgressTab = ({count, active}) => {
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
          <Box
            key={index}
            sx={{
              width: index + 1 === active ? '32px' : '6px',
              height: '6px',
              bgcolor: index + 1 === active ? '#56AAC8' : '#E5E5E5',
              borderRadius: '4px',
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ProgressTab;