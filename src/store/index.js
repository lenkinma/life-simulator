import {configureStore} from "@reduxjs/toolkit";
import particleSlice from "./particleSlice";

const store = configureStore({
	reducer: {
		particleReducer: particleSlice,
	}
})

export default store;