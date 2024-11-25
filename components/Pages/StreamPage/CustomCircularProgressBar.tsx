import {Box} from "@mui/material";
import {CircularProgress} from "@mui/joy";

const CustomCircularProgressBar = ({progress, color, amount}: {progress: number, color: string, amount: number}) => {
    return (
        <Box sx={{
            position: 'relative'
        }}>
            <CircularProgress
                determinate={true}
                value={progress}
                sx={{
                    '.MuiCircularProgress-track': {
                        stroke: '#292929'
                    },
                    '.MuiCircularProgress-progress': {
                        stroke: color
                    },
                    "--CircularProgress-size": "240px",
                    "--CircularProgress-trackThickness": "14px",
                    "--CircularProgress-progressThickness": "9px",
                }}/>
            <Box sx={{
                position: 'absolute',
                // top: '90px',
                top: '50%',
                left: '50%',
                right: '0',
                transform: 'translate(-50%, -50%)',
            }}>
                <Box sx={{
                    fontWeight: '700',
                    fontSize: '32px',
                    textAlign: 'center',
                    marginBottom: '4px'
                }}>
                    ${(amount/100*progress).toFixed(2)}
                </Box>
                <Box sx={{
                    fontSize: '16px',
                    color: '#8F8F8F',
                    textAlign: 'center',
                }}>
                    out of ${amount}
                </Box>
            </Box>
        </Box>
    );
};

export default CustomCircularProgressBar;