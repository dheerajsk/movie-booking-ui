
// const { createSlice } = require("@reduxjs/toolkit");
import { createSlice } from "@reduxjs/toolkit";

// Handle actions related to bookings

const initialState = {
    selectedSeats:[],
    seatPrice:150
}

// Creates reducers/actions
const bookingSlice = createSlice({
    name:'booking',
    initialState:initialState,
    reducers:{
        // here we define multiple actions 
        // which reducer will be handling.
    }

})