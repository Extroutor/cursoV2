import {Box} from "@mui/material";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DetailsContainer = ({children}: {children: any}) => {
    return (
        <Box sx={{
            backgroundColor: '#F4F4F4',
            borderRadius: '10px',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            marginTop: '12px',
            boxSizing: 'border-box'
        }}>
            {children}
        </Box>
    );
};

export default DetailsContainer;