import {Box} from "@mui/material";
import Menu from "@/components/Menu/Menu.tsx";

export const Slide2 = () => {
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
      <Menu
        styledProps={{
          position: 'absolute',
          bottom: '12px',
          zIndex: 100,
        }}
        tips={true}
      />
    </Box>
  )
}