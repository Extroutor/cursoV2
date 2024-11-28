import {SubtitleTypography} from "../../Typography/SubtitleTypography.tsx";
import {Box} from "@mui/material";
import DetailsGroup from "./DetailsGroup.tsx";
import DetailsContainer from "./DetailsContainer.tsx";
import {StatusObj} from "@/options/StatusBarOptions.ts";
import {CancelObj} from "@/options/cancelationOptions.tsx";

const Details = ({data}: {data: any}) => {
    const statusID = (data.status === 0 && data.end_date < Date.now() ? 3 : data.start_date > Date.now() ? 4 : 0) || 1
    const counterpartyAddress = data.amIRecipient ? data.address_from : data.address_to
    const statusValue = StatusObj.find(item => item.id === statusID)
    const whoCancel = CancelObj.find(item => item.id === data.whoCancel)

    return (
        <Box sx={{
            padding: '0 20px 16px',
        }}>
            <SubtitleTypography>Details</SubtitleTypography>
            <DetailsContainer>
                <DetailsGroup title='Status' value={statusValue?.title || ''}/>
                {data.counterpartyNickname &&
                    <DetailsGroup title='Recipient’s Nickname' value={data.counterpartyNickname}/>
                }
                <DetailsGroup title='Recipient’s Wallet Address' value={counterpartyAddress}/>
                <DetailsGroup title='Stream Rate' value='60 USD / hour'/>
                <DetailsGroup title='Duration' value='2 hours 20 minutes'/>
                <DetailsGroup title='Total Amount' value={`${data.amount} USD`}/>
                <DetailsGroup title='Service Fee' value='0.1 USD'/>
                <DetailsGroup title='Cancellation' value={whoCancel?.title || ''}/>
            </DetailsContainer>
        </Box>
    )
}

export default Details;