import { useQuery } from 'react-query';
import { apiRQ } from '../api';
import { IPost } from "./postsResponse";

const getPostsService = async (): Promise<IPost[]> => {
  const data = await apiRQ.get('/~anthonydillon/wp-json/wp/v2/posts.json');
  return data.data;
};

export const usePosts = () => {
  return useQuery<IPost[], Error>(['posts'], () => getPostsService(), {
    cacheTime: 2000,
  });
};
