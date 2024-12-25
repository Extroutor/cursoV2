import { createSlice } from '@reduxjs/toolkit'

export const userReducer = createSlice({
    name: 'user',
    initialState: {
        address: '',
        nickname: '',
        isConnect: false,
    },
    reducers: {
        addAddress: (state, action) => {
            state.address = action.payload
            localStorage.setItem('address', action.payload)
        },
        setNickname: (state, action) => {
            state.nickname = action.payload
            localStorage.setItem('nickname', action.payload)
        },
        setConnection: (state, action) => {
            state.isConnect = action.payload
        },
        disconnectWallet: (state) => {
            state.address = ''
            state.nickname = ''
            localStorage.removeItem('address')
            localStorage.removeItem('nickname',)
        },
        mockAddress: (state) => {
            state.address = '1'
        }
    },
})

// Action creators are generated for each case reducer function
export const {
    addAddress,
    disconnectWallet,
    setNickname,
    mockAddress,
    setConnection,
} = userReducer.actions

export default userReducer.reducer