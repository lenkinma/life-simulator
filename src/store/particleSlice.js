import {createSlice} from "@reduxjs/toolkit";

const particleSlice = createSlice({
	name: 'particles',
	initialState: {
		particles: [
			{id: 0, on: true, color: 'red', amount: 1000, with1: 100, with2: 100, with3: 100},
			{id: 1, on: true, color: 'blue', amount: 1000, with1: 100, with2: 100, with3: 100},
			{id: 2, on: false, color: 'green', amount: 1000, with1: 100, with2: 100, with3: 100},
		],
	},
	reducers: {
		changeStatus(state, action) {
			let particle = state.particles.find(e => e.id === action.payload.id);
			particle.on = !particle.on;
		},
		changeColor(state, action) {
			let particle = state.particles.find(e => e.id === action.payload.id);
			particle.color = action.payload.color;
		},
		changeAmount(state, action) {
			let particle = state.particles.find(e => e.id === action.payload.id);
			particle.amount = action.payload.amount;
		},
		changeInteraction(state, action) {
			let particle = state.particles.find(e => e.id === action.payload.id);
			particle.with1 = action.payload.with1;
		},
	}
})

export const {changeStatus, changeColor, changeAmount, changeInteraction} = particleSlice.actions;
export default particleSlice.reducer;