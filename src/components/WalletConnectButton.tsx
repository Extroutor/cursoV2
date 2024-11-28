import {useTranslation} from "react-i18next"

export const WalletConnectButton = ({onConnect}: { onConnect: () => void }) => {
    const {t} = useTranslation()

    return (
        <button
            onClick={onConnect}
            type="button"
            style={{
                borderRadius: '100px',
                backgroundColor: '#56AAC8',
                width: '100%',
                padding: '10px 0',
                fontWeight: '500',
                fontFamily: 'HarmonyOS Sans, serif',
                fontSize: '16px',
                textAlign: 'center',
                marginTop: '20px',
                border: 'none',
                outline: 'none',
                color: '#fff',
                cursor: 'pointer',
            }}>
            {t('common:connect')}
        </button>
    )
}