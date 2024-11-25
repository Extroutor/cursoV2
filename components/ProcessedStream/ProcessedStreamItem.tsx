import {Box, LinearProgress} from '@mui/material'
import ArrowUp from '../../icons/arrowUp.tsx'
import More from '../../icons/more.tsx'
import Time from '../../icons/time.tsx'
import StatusBar from '../StatusBar.tsx'
import DropdownMenu from "./DropdownMenu.tsx"
import {useEffect, useRef, useState} from "react"
import CancelModal from "../Modals/CancelModal.tsx"
import {useNavigate} from "react-router-dom"
import {clamp} from "../../utils/math.ts"
import stream from "stream"
import {shortAddress} from "../../utils/shortAddress.ts"
import {timeLeft} from "../../utils/timeLeft.tsx"
import ArrowDown from "../../icons/arrowDown.tsx";

const ProcessedStreamItem = ({data}: { data: any }) => {
    const [openMenu, setOpenMenu] = useState(false)
    const [isOpenCloseModal, setIsOpenCloseModal] = useState(false)
    const [streamProgress, setStreamProgress] = useState<number>(0)
    const [dateTimeLeft, setDateTimeLeft] = useState<string | undefined>('')

    const counterpartyAddress = data.amIRecipient ? data.address_from : data.address_to

    const buttonRef = useRef(null)
    const dropdownRef = useRef(null)

    const navigate = useNavigate()

    useEffect(() => {
        const intervalId = setInterval(() => {
            const endDate = Number(data.end_date) / 1000
            const newDateTimeLeft = timeLeft(endDate)
            setDateTimeLeft(newDateTimeLeft)
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [data.end_date])

    useEffect(() => {
        // @ts-ignore
        const handleDocumentClick = (event) => {
            // @ts-ignore
            if (!buttonRef.current.contains(event.target) && !dropdownRef.current.contains(event.target)) {
                setOpenMenu(false)
            }
        }
        document.addEventListener('click', handleDocumentClick)
        return () => {
            document.removeEventListener('click', handleDocumentClick)
        }
    }, [])

    useEffect(() => {

        const updateDiagram = setInterval(() => {

            const {start_date, end_date, cancel_date} = data
            const progressDate = !!cancel_date ? cancel_date : Date.now()
            const streamProgress = clamp((progressDate - start_date) / (end_date - start_date), 0, 1) * 100
            setStreamProgress(streamProgress)

        }, 500)

        return () => clearInterval(updateDiagram)

    }, [stream])

    const handleButtonClick = () => {
        setOpenMenu(!openMenu)
    }

    const handleCloseModal = () => setIsOpenCloseModal(false)
    const handleOpenModal = () => {
        setOpenMenu(false)
        setIsOpenCloseModal(!isOpenCloseModal)
    }

    return (
        <Box sx={{position: 'relative'}} onClick={() => navigate(`/stream/${data.id}`)}>
            <Box sx={{
                bgcolor: '#F4F4F4',
                padding: '20px',
                borderRadius: '20px',
                cursor: 'pointer'
            }}>
                <Box sx={{
                    mb: '16px',
                    display: 'flex',
                    width: '100%'
                }}>
                    <Box sx={{
                        backgroundColor: '#CECECE',
                        width: '30px',
                        height: '30px',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mr: '8px',
                    }}>
                        {data.amIRecipient ? <ArrowDown/> : <ArrowUp/>}
                    </Box>
                    <Box sx={{
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center'
                    }}>
                        {data.title ? (
                                <>
                                    <Box sx={{
                                        fontSize: '16px',
                                        lineHeight: '18.75px',
                                    }}>{data.title}</Box>
                                    <Box sx={{
                                        color: '#8F8F8F',
                                        fontSize: '12px',
                                        lineHeight: '14.06px',
                                    }}>{data.amIRecipient ? 'from' : 'to'} {shortAddress(counterpartyAddress)}</Box>
                                </>
                            )
                            : (
                                <Box sx={{
                                    fontSize: '16px',
                                    lineHeight: '18.75px',
                                    textTransform: 'capitalize'
                                }}>{data.amIRecipient ? 'from' : 'to'} {shortAddress(counterpartyAddress, 4)}</Box>
                            )
                        }
                    </Box>
                    <Box sx={{
                        position: 'absolute',
                        top: '20px',
                        right: '20px',
                        cursor: 'pointer',
                    }}
                         ref={buttonRef}
                        // onClick={() => setOpenMenu((openMenu) => !openMenu)}
                         onClick={(e) => {
                             e.stopPropagation()
                             handleButtonClick()
                         }}
                    ><More color={openMenu ? '#CECECE' : undefined} /></Box>
                </Box>
                <Box mb='12px'>
                    <Box>
                        <Box sx={{
                            mb: '8px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'end'
                        }}>
                            <Box sx={{
                                fontSize: '18px',
                                fontWeight: '700',
                                lineHeight: '21.1px',
                            }}>
                                ${(data.amount / 100 * streamProgress).toFixed(2)}
                            </Box>
                            <Box sx={{
                                fontSize: '14px',
                                fontWeight: '400',
                                lineHeight: '16.41px',
                                color: '#8F8F8F',
                            }}>of ${data.amount}</Box>
                        </Box>
                        <LinearProgress variant='determinate' value={streamProgress} sx={{
                            border: '2px solid #292929',
                            backgroundColor: '#292929',
                            color: '#EE964B',
                            borderRadius: '10px',
                            '.MuiLinearProgress-bar': {
                                backgroundColor: '#EE964B', /* custom color for the progress bar */
                                borderRadius: '10px',
                                height: '4px',
                            }
                        }}/>
                    </Box>

                </Box>
                <Box display='flex' alignItems='center' justifyContent='space-between'>
                    {dateTimeLeft && <Box display='flex'>
                        <Box display='flex' alignItems='center' mr='4px'><Time isWhite={false}/></Box>
                        <Box fontSize='14px'>{dateTimeLeft}</Box>
                    </Box>}
                    <StatusBar itemID={0}/>
                </Box>
            </Box>
            {openMenu && <Box ref={dropdownRef} onClick={(e) => e.stopPropagation()}><DropdownMenu
                setIsOpenCloseModal={handleOpenModal}/></Box>}
            <CancelModal isOpen={isOpenCloseModal} setOpen={handleCloseModal}
                         counterparty={data.counterpartyNickname || shortAddress(counterpartyAddress)}/>
        </Box>

    );
};

export default ProcessedStreamItem