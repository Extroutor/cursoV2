import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./reducers/userReducer.ts"
import uiReducer from "./reducers/uiReducer.tsx"

const store = configureStore({
    reducer: {
        user: userReducer,
        ui: uiReducer,
    }
})

export default store