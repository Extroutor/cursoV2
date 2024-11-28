import {Box} from "@mui/material"
import Check from "@/icons/check.tsx"
import {useDispatch, useSelector} from "react-redux"
import {useEffect} from "react";
import {copyTooltip} from "@/store/reducers/uiReducer.tsx"
import {useRouter} from "next/router";

const Tooltip = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const isCopyTooltip = useSelector((state: any) => state.ui.isCopyTooltip)
    const dispatch = useDispatch()
    const {pathname} = useRouter()

    useEffect(() => {
        const timerId = setTimeout(() => {
            dispatch(copyTooltip(false))
        }, 3000)

        return () => {
            clearTimeout(timerId)
        }
    }, [isCopyTooltip, dispatch])

    return (
        <>
            {isCopyTooltip &&
                <Box sx={{
                    borderRadius: '10px',
                    bgcolor: '#292929',
                    padding: '12px 16px',
                    color: '#FFFFFF',
                    position: 'fixed',
                    bottom: pathname === '/settings/account' ? '79px' : '94px',
                    // right: '0',
                    transform: "translateX(-50%)",
                    left: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    opacity: isCopyTooltip ? 1 : 0,
                    transition: 'opacity 03s ease-in-out',
                }}>
                    <Check/>
                    <span>Address copied</span>
                </Box>
            }
        </>
    )
}

export default Tooltip