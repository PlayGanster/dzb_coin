import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type Error = any

interface UserState {
	error: Error
}

const initialState: UserState = {
	error: []
}

export const SettingsSlice = createSlice({
	name: 'settings',
	initialState,
	reducers: {
		addError: (state, action:PayloadAction<{data: any}>) => {
			state.error = [...state.error, action.payload.data]
		},
	}
})

export default SettingsSlice.reducer
export const {addError} = SettingsSlice.actions