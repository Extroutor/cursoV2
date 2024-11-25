import {Box} from "@mui/material";

const DetailsGroup = ({title, value}: {title: string , value: string | undefined}) => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '4px'
        }}>
            <Box sx={{
                fontSize: '12px',
                color: '#8F8F8F',
                lineHeight: '14.06px',
            }}>{title}</Box>
            <Box sx={{
                lineHeight: '18.75px',
                wordWrap: 'break-word'
            }}>{value}</Box>
        </Box>
    );
};

export default DetailsGroup;