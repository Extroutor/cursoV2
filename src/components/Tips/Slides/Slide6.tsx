import {Box} from "@mui/material";
import {Button} from "@mui/joy";
import {useRouter} from "next/router";

export const Slide6 = () => {
  const router = useRouter()

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
      <Button onClick={() => router.push('/wallet')}>click</Button>
      <Box sx={{
        color: '#FFFFFF',
        fontSize: '14px',
        width: '180px',
        textAlign: 'center',
      }}>Swipe left to go to the next hint, or right to go back.</Box>
    </Box>
  )
}