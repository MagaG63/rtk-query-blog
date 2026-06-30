import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const postsApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001'}),
    tagTypes: ['Posts'],
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => 'posts',

            providesTags: ['Posts']
        })
    })
})

export const {useGetPostsQuery} = postsApi