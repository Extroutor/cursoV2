import {Box} from '@mui/material'
import TextFormField from '@/fields/TextFormField.tsx'
import {FieldTitleTypography} from '../Typography/FieldTitleTypography.tsx'
import TextSelectorField from '@/fields/TextSelectorField.tsx'
import ButtonSelector from './ButtonsSelector/ButtonSelector.tsx'
import {useState} from 'react'
import RateModal from './Modal/RateModal.tsx'
import DropDownList from '@/fields/DropDownList.tsx'
import CancellationModal from './Modal/CancellationModal.tsx'
import CustomTimeModal from './Modal/CustomTimeModal.tsx'
import useNickname from "@/hooks/useNickname.tsx"
import {ClipLoader} from "react-spinners"
import {useTranslation} from "react-i18next"
import {useFormContext} from "react-hook-form"

const BasicForm = ({setStep}: { setStep: any }) => {
    const { t } = useTranslation()

    const [openModal, setOpenModal] = useState(false)
    const [openCancelModal, setOpenCancelModal] = useState(false)
    const [openTimeModal, setOpenTimeModal] = useState(false)

    const {getValues} = useFormContext()

    const {data, isLoading} = useNickname(getValues('address') || '')


    const handleModalClose = () => setOpenModal(false)
    const handleModalOpen = () => setOpenModal(true)
    const handleCancelModalClose = () => setOpenCancelModal(false)
    const handleCancelModalOpen = () => setOpenCancelModal(true)
    const handleTimeModalClose = () => setOpenTimeModal(false)
    const handleTimeModalOpen = () => setOpenTimeModal(true)

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
        }}>
            <Box sx={{
                bgcolor: '#F4F4F4',
                borderRadius: '10px',
                padding: '16px',
            }}
                 onClick={() => setStep(0)}>
                <div style={{
                    fontSize: '16px',
                    lineHeight: '18.75px',
                }}>
                    {isLoading
                        ? <ClipLoader size={10} color='#000'/>
                        : data ? <Box mb='4px'>{String(data)}</Box> : <></>
                    }
                </div>
                <div style={{
                    fontSize: '12px',
                    color: '#8F8F8F',
                    lineHeight: '14.06px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                }}>{getValues('address')}</div>
            </Box>
            <Box>
                <FieldTitleTypography>{t('form:rate')}, USD</FieldTitleTypography>
                <TextSelectorField
                    name='amount'
                    onModalOpen={handleModalOpen}
                />
                <RateModal
                    name='rate'
                    defaultValue={getValues('rate')}
                    openModal={openModal}
                    handleModalClose={handleModalClose}
                />
            </Box>
            <Box>
                <FieldTitleTypography>{t('form:duration')}</FieldTitleTypography>
                <ButtonSelector
                    name='duration'
                    defaultValue={getValues('duration')}
                    onModalOpen={handleTimeModalOpen}
                />
                <CustomTimeModal
                    name='duration'
                    openModal={openTimeModal}
                    handleModalClose={handleTimeModalClose}
                />
            </Box>
            <Box>
                <FieldTitleTypography>{t('form:cancel')}</FieldTitleTypography>
                <DropDownList
                    name='cancellation'
                    value={getValues('cancellation')}
                    onClick={handleCancelModalOpen}
                />
                <CancellationModal
                    name='cancellation'
                    defaultValue={getValues('cancellation')}
                    openModal={openCancelModal}
                    handleModalClose={handleCancelModalClose}
                />
            </Box>
            <Box>
                <FieldTitleTypography>{t('form:title')}</FieldTitleTypography>
                <TextFormField
                    name='title'
                    placeholder='Anna, consultation, 11/04'
                    resettable={true}
                    maxLength={40}
                />
            </Box>
        </Box>
    )
}

export default BasicForm

