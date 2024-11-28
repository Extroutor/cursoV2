import HomeButton from '@/components/Menu/HomeButton.tsx'
import HistoryButton from '@/components/Menu/HistoryButton.tsx'
import CreateButton from '@/components/Menu/CreateButton.tsx'
import WalletButton from '@/components/Menu/WalletButton.tsx'
import SettingsButton from '@/components/Menu/SettingsButton.tsx'

export const menuOptions = [
    {
        id: 0,
        route: '/',
        component: HomeButton,
    },
    {
        id: 1,
        route: '/history',
        component: HistoryButton,
    },
    {
        id: 2,
        route: '/create',
        component: CreateButton,
    },
    {
        id: 3,
        route: '/wallet',
        component: WalletButton,
    },
    {
        id: 4,
        route: '/settings',
        component: SettingsButton,
    }
]