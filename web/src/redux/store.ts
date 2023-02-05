import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
//import logger from 'redux-logger'

// Reducers
import authReducer from "redux/store/authSlice"
import commonReducer from "redux/store/commonSlice"

export const store = configureStore({
	reducer: {
		auth: authReducer,
		common: commonReducer,
	},
	//middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(logger)
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>
