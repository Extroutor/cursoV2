import {addAddress, setNickname} from "@/store/reducers/userReducer"
import {Dispatch} from "react"
import {getNicknameByAddress} from "@/blockchain/nickname"
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const connectHandler = async (address: string, dispatch: Dispatch<any>) => {
    dispatch(addAddress(address))
    getNicknameByAddress(address).then((nickname) => {
        if (nickname) dispatch(setNickname(String(nickname)))
    })
}