import{createApi,fetchBaseQuery}from'@reduxjs/toolkit/query/react';

export const cartApi=createApi({
    reducerPath:'cartApi',
    baseQuery:fetchBaseQuery({baseUrl:'https://course-api.com/'}),
    endpoints:(builder)=>({
        getAllItems:builder.query({
            query:()=>'react-useReducer-cart-project'
        })
    })
})

export const{useGetAllItemsQuery}=cartApi