import { configureStore } from '@reduxjs/toolkit'
import { goodsApi } from './goodsApi'
import demoReducer from './goodsSlice'

export const store = configureStore({

    reducer: {
        goods: demoReducer,
        [goodsApi.reducerPath]: goodsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>getDefaultMiddleware().concat(goodsApi.middleware),
})