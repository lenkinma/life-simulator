import {createSlice} from "@reduxjs/toolkit";

function getRndmNumb(a, b) {
	return Math.floor(Math.random() * (b - a + 1)) + a;
}

const particleSlice = createSlice({
	name: 'particles',
	initialState: {
		particles: [
			// {id: 0, on: true, color: `rgb(${getRndmNumb(0, 255)}, ${getRndmNumb(0, 255)}, ${getRndmNumb(0, 255)})`, amount: 500, interaction: [{id: 0, amount: 100}, {id: 1, amount: 100}, {id: 2, amount: 100}]},
			// {id: 1, on: true, color: `rgb(${getRndmNumb(0, 255)}, ${getRndmNumb(0, 255)}, ${getRndmNumb(0, 255)})`, amount: 500, interaction: [{id: 0, amount: 100}, {id: 1, amount: 100}, {id: 2, amount: 100}]},
			// {id: 2, on: false, color: `rgb(${getRndmNumb(0, 255)}, ${getRndmNumb(0, 255)}, ${getRndmNumb(0, 255)})`, amount: 500, interaction: [{id: 0, amount: 100}, {id: 1, amount: 100}, {id: 2, amount: 100}]},
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
			let interaction = particle.interaction.find(e => e.id === action.payload.interactionId)
			interaction.amount = action.payload.amount;
		},
		deleteParticle(state, action) {
			state.particles = state.particles.filter(e => e.id !== action.payload.id);
			state.particles = state.particles.map(e => {
				e.interaction = e.interaction.filter(i => i.id !== action.payload.id)
				return e;
			})
		},
		createParticle(state, action) {
			let newId = state.particles.length ? (state.particles[state.particles.length - 1].id  + 1) : 0;
			let newPart = {
				id: newId,
				on: true,
				color: `rgb(${getRndmNumb(0, 255)}, ${getRndmNumb(0, 255)}, ${getRndmNumb(0, 255)})`,
				amount: getRndmNumb(1, 1000),
				interaction: state.particles.map(e => ({id: e.id, amount: getRndmNumb(-1000, 1000)}))
			};
			state.particles.push(newPart);
			state.particles.map(e => e.interaction.push({id: newId, amount: getRndmNumb(-1000, 1000)}));
		},
		randomChange(state, action) {
			let particle = state.particles.find(e => e.id === action.payload.id);
			particle.color = `rgb(${getRndmNumb(0, 255)}, ${getRndmNumb(0, 255)}, ${getRndmNumb(0, 255)})`;
			particle.interaction = state.particles.map(e => ({id: e.id, amount: getRndmNumb(-1000, 1000)}));
			particle.amount = getRndmNumb(1, 1000);
		},
	}
})

export const {changeStatus, changeColor, changeAmount, changeInteraction, deleteParticle, createParticle, randomChange} = particleSlice.actions;
export default particleSlice.reducer;