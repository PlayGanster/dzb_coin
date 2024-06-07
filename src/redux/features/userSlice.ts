import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type Coin = number
type Energy = number
type maxEnergy = number
type InitData = any

interface UserState {
	coin: Coin,
	energy: Energy,
	maxEnergy: maxEnergy,
	initData: InitData
}

const initialState: UserState = {
	coin: 1000000,
	energy: 9500,
	maxEnergy: 9500,
	initData: null
}

export const UserSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setCoin: (state, action:PayloadAction<{data: number}>) => {
			state.coin = action.payload.data
		},
		setEnergy: (state, action:PayloadAction<{data: number}>) => {
			state.energy = action.payload.data
		},
		setInitData: (state, action:PayloadAction<{data: any}>) => {
			state.initData = action.payload.data
		},
	}
})

export default UserSlice.reducer
export const {setCoin, setEnergy, setInitData} = UserSlice.actions