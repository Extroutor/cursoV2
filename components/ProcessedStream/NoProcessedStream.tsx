import {Box} from "@mui/material";
import {useTranslation} from "react-i18next"
import {useNavigate} from "react-router-dom";

const NoProcessedStream = () => {
    const {t} = useTranslation()
    const navigate = useNavigate()

    return (
        <Box sx={{
            bgcolor: '#F4F4F4',
            padding: '20px',
            width: '100%',
            borderRadius: '20px',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <span style={{
                color: '#292929',
                marginBottom: '8px'
            }}>{t('streams:noProcessedStreamTitle')}</span>
            <span style={{
                color: '#8F8F8F',
                textAlign: 'center',
                lineHeight: '16.41px',
                fontSize: '14px'
            }}>{t('streams:noProcessedStreamDescription')}</span>
            <Box sx={{
                bgcolor: '#292929',
                borderRadius: '100px',
                fontWeight: '500',
                textAlign: 'center',
                width: '100%',
                color: '#fff',
                padding: '10px 24px',
                mt: '20px',
                boxSizing: 'border-box',
                cursor: 'pointer',
                lineHeight: '18.75px'
            }}
                 onClick={() => navigate('/create')}
            >{t('common:create')}</Box>
            {/*<span style={{*/}
            {/*    color: '#8F8F8F',*/}
            {/*    marginTop: '16px',*/}
            {/*    lineHeight: '16.41px',*/}
            {/*    cursor: 'pointer'*/}

            {/*}}>{t('common:hide')}</span>*/}
        </Box>
    );
};

export default NoProcessedStream;