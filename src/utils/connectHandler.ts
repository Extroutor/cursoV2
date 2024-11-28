import {addAddress, setNickname} from "../store/reducers/userReducer.ts"
import {Dispatch} from "react"
import {getNicknameByAddress} from "../blockchain/nickname.ts"

export const connectHandler = async (address: string, dispatch: Dispatch<any>) => {
    dispatch(addAddress(address))
    getNicknameByAddress(address).then((nickname) => {
        if (nickname) dispatch(setNickname(String(nickname)))
    })
}