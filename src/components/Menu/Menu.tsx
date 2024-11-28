import {Box, styled} from '@mui/material'
import {useEffect, useState} from 'react'
import {menuOptions} from '@/options/MenuOptions.ts'
import {useRouter} from "next/router";

const MenuStyledComponent = styled(Box)({
    display: 'flex',
    backgroundColor: '#292929',
    height: '70px',
    padding: '0 20px',
    borderRadius: '20px',
    justifyContent: 'space-between',
    position: 'fixed',
    bottom: '12px',
    left: '20px',
    right: '20px',
    color: '#000',
    maxWidth: '800px',
    margin: '0 auto'
})
const Menu = () => {
    const {pathname} = useRouter()
    const [activeItem, setActive]
        = useState(menuOptions.find((item) => item.route === pathname)?.id || -1)

    useEffect(() => {
        if (pathname === '/')
            setActive(0)
        else
            setActive(menuOptions.find((item) => item.route === pathname)?.id || -1)
    }, [pathname])

    return (
        <MenuStyledComponent>
            <Box sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                padding: '10px 20px'
            }}>
                {menuOptions.map((item) =>
                    <item.component
                        key={item.id}
                        id={item.id}
                        activeItem={activeItem}
                        setActive={setActive}
                    />
                )}
            </Box>

        </MenuStyledComponent>
    )
}

export default Menu