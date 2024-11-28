import {SubtitleTypography} from "../Typography/SubtitleTypography.tsx"
import {Box} from "@mui/material"
import DetailsGroup from "../Pages/StreamPage/DetailsGroup.tsx"
import DetailsContainer from "../Pages/StreamPage/DetailsContainer.tsx"
import {useFormContext} from "react-hook-form"
import useNickname from "@/hooks/useNickname.tsx"
import {formatDuration} from "../../utils/milsecConverter.ts"
import {CancelObj} from "@/options/cancelationOptions.tsx"
import {rateOptions} from "@/options/StreamFormOptions.ts"

const Confirmation = () => {
    const {getValues} = useFormContext()
    const {address, amount, cancellation, duration, rate, title} = getValues()
    const {data: nickname, isLoading} = useNickname(address || '')
    const whoCancel = CancelObj.find(item => item.id === cancellation)?.title
    const streamRate = rateOptions.find(item => item.id === rate) || null

    const totalAmount = (Number(amount) / (streamRate?.value ?? 1)) * (duration / 1000)
    const fee = totalAmount * 0.01

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
        }}>
            <Box>
                <SubtitleTypography>Recipient</SubtitleTypography>
                <DetailsContainer>
                    {!isLoading && nickname && <DetailsGroup title='Nickname' value={String(nickname)}/>}
                    <DetailsGroup title='Wallet Address' value={address}/>
                    {title && <DetailsGroup title='Payment Title' value={title}/>}
                </DetailsContainer>
            </Box>
            <Box>
                <SubtitleTypography>Stream</SubtitleTypography>
                <DetailsContainer>
                    <DetailsGroup title='Stream Rate' value={`${Number(amount).toFixed(2)} USD ${streamRate?.label}`}/>
                    <DetailsGroup title='Duration' value={formatDuration(duration)}/>
                    <DetailsGroup title='Cancellation' value={whoCancel}/>
                    <DetailsGroup title='Total Amount' value={`${totalAmount} USD`}/>
                    <Box sx={{
                        fontSize: '12px',
                        lineHeight: '14.06px',
                        color: '#8F8F8F'
                    }}>
                        We have included a service fee of <span style={{color: '#292929'}}>{fee} USD</span> in the amount of the stream. A service fee is
                        required to pay for gas. <span style={{color: '#46A2C3', cursor: 'pointer'}}>Learn more.</span>
                    </Box>
                </DetailsContainer>
            </Box>
        </Box>
    )
}

export default Confirmation