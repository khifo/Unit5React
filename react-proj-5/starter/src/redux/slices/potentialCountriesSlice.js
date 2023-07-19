import { createSlice } from "@reduxjs/toolkit";

export const potentialContriesSlice = createSlice({
    name: "potentialCountries",
    initialState: {
        value: [
            {
                name: {
                    common: "This is initialPotential",
                },
            },
        ],
    },
    reducers: {
        setPotentialCountries: (state, action) => {
            state.value = null;
        },
    },
}); 