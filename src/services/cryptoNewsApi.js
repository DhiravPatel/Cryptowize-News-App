import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
  'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '14d0058fb3msh6d2672c374fbecap1bb505jsnc989a0be406b',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
};

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });
const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;