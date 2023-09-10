import {configureStore} from "@reduxjs/toolkit";
import particleSlice from "./particleSlice";

const store = configureStore({
	reducer: {
		todoReducer: particleSlice,
	}
})

export default store;