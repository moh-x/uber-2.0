import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	origin: null,
	destination: null,
	travelTimeInfo: null,
	locations: [],
};

export const navSlice = createSlice({
	name: "nav",
	initialState,
	reducers: {
		setOrigin: (state, action) => {
			state.origin = action.payload;
		},
		setDestination: (state, action) => {
			state.destination = action.payload;
		},
		setTravelTimeInfo: (state, action) => {
			state.travelTimeInfo = action.payload;
		},
		setLocations: (state, action) => {
			state.travelTimeInfo = action.payload;
		},
	},
});

export const { setOrigin, setDestination, setTravelTimeInfo, setLocations } =
	navSlice.actions;

// Selectors

export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInfo = (state) => state.nav.travelTimeInfo;
export const selectLocations = (state) => state.nav.travelTimeInfo;

export default navSlice.reducer;
