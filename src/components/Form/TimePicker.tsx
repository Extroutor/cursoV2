import {Box} from '@mui/material'

interface Props {
  minutes: number
  hours: number
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleHoursChange: (event: any) => void
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleMinutesChange: (event: any) => void
}

const TimePicker = ({minutes, hours, handleHoursChange, handleMinutesChange}: Props) => {
  return (
    <Box sx={{
      display: 'flex',
      gap: '16px',
      justifyContent: 'center',
      width: '220px',
      height: '175px'
    }}>
      <div className='top-gradient'></div>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative'
      }}>
        <Box sx={{
          width: '102px',
          height: '175px',
          overflowY: 'auto',
          // border: '1px solid #ccc',
          padding: '10px',
        }} className='time-picker-scroll'>
          {Array.from({length: 24}, (_, i) => (
            <button
              key={i}
              value={i}
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              onClick={(event: any) => handleHoursChange(event)}
              className={i === hours ? 'active' : ''}
            >
              {i} hr
            </button>
          ))}
        </Box>
      </Box>
      <div className='time-picker-column'>
        <div className='time-picker-scroll'>
          {Array.from({length: 60}, (_, i) => (
            <button
              key={i}
              value={i}
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              onClick={(event: any) => handleMinutesChange(event)}
              className={i === minutes ? 'active' : ''}
            >
              {i} min
            </button>
          ))}
        </div>
      </div>
    </Box>
  );
};

export default TimePicker;