import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../utils/baseUrl";

interface postItem {
  main_text: string;
  user_id: number;
  id: number;
  reg_date: string;
  user_fk: {
    name: string;
    user_city: string;
    id: number;
    password: number;
    email: string;
    phone_number: string;
    reg_date: string;
  };
  photos: [
    {
      photo_id: 8;
      photo_url: "/api/photo_api/photos/8.jpg";
    }
  ];
  comments: [];
}

interface GetPostListResult {
  status: number;
  message: postItem[];
}

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getPostList: builder.query({
      query: () => ({
        url: "/post",
        method: "GET",
      }),
    }),
    getPostListItem: builder.query({
      query: (postId: string) => ({
        url: `/post?post_id=${postId}`,
        method: "GET",
      }),
    }),
  }),
});


export const {useGetPostListQuery} = postApi;
