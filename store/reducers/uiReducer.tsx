import { createSlice } from '@reduxjs/toolkit'

export const uiReducer = createSlice({
    name: 'ui',
    initialState: {
        loading: false,
        isCopyTooltip: false,
        disconnectModal: false
    },
    reducers: {
        isLoading: (state, action) => {
            state.loading = action.payload
        },
        copyTooltip: (state, action) => {
            state.isCopyTooltip = action.payload
        },
        showDisconnectModal: (state, action) => {
            state.disconnectModal = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { isLoading, copyTooltip, showDisconnectModal } = uiReducer.actions

export default uiReducer.reducer