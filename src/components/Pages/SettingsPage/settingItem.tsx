import {Box} from "@mui/material";
import ArrowRight from "@/icons/settings/arrowRight.tsx";
import LinkArrow from "@/icons/settings/linkArrow.tsx";
import {useNavigate} from "react-router-dom";

const SettingItem = ({icon, title, action, to}: { icon: any, title: string, action: string, to?: string }) => {
    const navigate = useNavigate()
    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '8px 0',
            cursor: 'pointer'
        }}
             onClick={() => {
                 if (to) navigate(to)
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