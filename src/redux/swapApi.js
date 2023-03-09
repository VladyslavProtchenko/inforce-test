import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const swapApi = createApi({
    reducerPath: 'swapApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json' }),

    endpoints: (builder) => ({
        getSwapData: builder.query({
        query: () => `currency`,
        }),
    }),
})

export const { useGetSwapDataQuery } = swapApi;