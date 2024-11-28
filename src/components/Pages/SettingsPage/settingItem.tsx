import {Box} from "@mui/material"
import ArrowRight from "@/icons/settings/arrowRight.tsx"
import LinkArrow from "@/icons/settings/linkArrow.tsx"
import {useRouter} from "next/router"

const SettingItem = ({icon, title, action, to}: { icon: any, title: string, action: string, to?: string }) => {
    const router = useRouter()
    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '8px 0',
            cursor: 'pointer'
        }}
             onClick={() => {
                 if (to) router.push(to)
             }}
        >
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
            }}>
                {icon}
                <span>{title}</span>
            </Box>
            {action === 'next'
                ? <ArrowRight/>
                : <LinkArrow/>
            }
        </Box>
    );
};

export default SettingItem;