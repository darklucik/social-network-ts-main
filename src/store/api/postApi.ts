import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../utils/baseUrl";
import { PostItem } from "../../Types/post";

interface getPostListResult {
  status: number;
  message: PostItem[];
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

export const { useGetPostListQuery } = postApi;
