export interface UserState {
    address: string,
    extension: any,
    nickName: string,
    isConnect: boolean
}

export enum UserActionTypes {
    EXTENSION_UPDATE = 'EXTENSION_UPDATE',
    IS_CONNECT = 'IS_CONNECT',
    UPDATE_USER_ADDRESS = 'UPDATE_USER_ADDRESS',
    UPDATE_USER_NICK = 'UPDATE_USER_NICK',
}

interface ExtensionUpdateAction {
    type: UserActionTypes.EXTENSION_UPDATE;
    payload: any
}

interface IsConnectAction {
    type: UserActionTypes.IS_CONNECT;
    payload: boolean
}

interface AddressUpdateAction {
    type: UserActionTypes.UPDATE_USER_ADDRESS;
    payload: string
}

interface NicknameUpdateAction {
    type: UserActionTypes.UPDATE_USER_NICK;
    payload: string
}

export type UserAction = ExtensionUpdateAction
    | IsConnectAction
    | AddressUpdateAction
    | NicknameUpdateAction
