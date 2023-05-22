import { createSlice } from '@reduxjs/toolkit'

export const dataSlice = createSlice({
    name: 'goods',
    initialState: {},
    reducers: {
        getGoods: (state, action) => {
            state = action.payload;
        }
    },
})

export const { getGoods } = dataSlice.actions

export default dataSlice.reducer