import {Box} from "@mui/material"
import ArrowRight from "@/icons/settings/arrowRight.tsx"
import LinkArrow from "@/icons/settings/linkArrow.tsx"
import {useRouter} from "next/router"
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SettingItem = ({icon, title, action, to, styleProps}: { icon: any, title: string, action: string, to?: string, styleProps?: any }) => {
  const router = useRouter()
  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '8px 0',
      cursor: 'pointer',
      bgcolor: '#fff',
      ...styleProps,
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