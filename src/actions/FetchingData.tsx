"use server";

import { postProps } from "@/types/postList";

export const FetchingData = async () => {
    // Using Function to fetching data in Server Component.....
    const apiURL = process.env.API_URL;
    ;
    try {
      let response = await fetch(`${apiURL}/api/blog`, {
        cache: "force-cache"
      });
      let data: postProps[] = await response.json();
      return data;
    } catch (error) {
      throw new Error("Server is not Responding");
    }
  };