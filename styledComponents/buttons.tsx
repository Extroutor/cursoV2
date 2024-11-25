import {Box, styled} from '@mui/material'

export const Buttons = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '52px',
    border: '1.2px solid #CECECE',
    padding: '0px 12px',
    fontSize: '14px',
    lineHeight: '16.41px',
    borderRadius: '10px',
    verticalAlign: 'center',
    position: 'relative',
})

export const BuySellButton = styled(Box)({
    backgroundColor: '#292929',
    borderRadius: '100px',
    fontWeight: '500',
    padding: '10px 24px',
    color: '#fff',
    width: '100%',
    textAlign: 'center',
    lineHeight: '18.75px'
})
