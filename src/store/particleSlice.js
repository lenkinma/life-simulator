import {createSlice} from "@reduxjs/toolkit";

const particleSlice = createSlice({
	name: 'particles',
	initialState: {
		particles: [
			{id: 0, on: true, color: 'red', amount: 1000, withSelf: 100, with1: 100, with2: 100, with3: 100},
			{id: 1, on: false, color: 'blue', amount: 1000, withSelf: 100, with1: 100, with2: 100, with3: 100},
			{id: 2, on: false, color: 'green', amount: 1000, withSelf: 100, with1: 100, with2: 100, with3: 100},
		],
	},
	reducers: {

	}
})

export const {} = particleSlice.actions;
export default particleSlice.reducer;