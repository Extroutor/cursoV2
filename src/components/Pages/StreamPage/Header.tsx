import {Box} from "@mui/material"
import BackArrow from "@/icons/backArrow.tsx"
import RepeatBig from "@/icons/repeatBig.tsx"
import {useRouter} from "next/router";

const Header = () => {
    const router = useRouter()

    return (
        <Box sx={{
            padding: '12px 16px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            // margin: '0px 16px',
            boxSizing: 'border-box',
            position: 'fixed',
            top: '0',
            left: '0',
            right: '0',
            zIndex: '3',
            backgroundColor: '#fff',
            maxWidth: '800px',
            margin: '0 auto',
        }}>
            <Box sx={{ height: '30px', cursor: 'pointer' }} onClick={() => router.push('/')}><BackArrow/></Box>
            <Box sx={{ height: '30px', cursor: 'pointer' }}><RepeatBig/></Box>
        </Box>
    )
}

export default Header