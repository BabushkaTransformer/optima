import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { BASE_URL } from '../../constants';

export const authAPI = createApi({
  reducerPath: 'competenceAPI',
  baseQuery: fetchBaseQuery({baseUrl: `${BASE_URL}`}),
  tagTypes: ['Competency', 'Update'],
  endpoints: (build) => ({
    signIn: build.mutation({
      query: (user) => ({
        url: `/signIn`,
        method: 'POST',
        body: user
      })
    })
  })
});