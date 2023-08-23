import { useQuery } from 'react-query';
import { apiRQ } from '../api';
import { Post } from "./postsResponse";

const getPostsService = async (): Promise<Post[]> => {
  const data = await apiRQ.get('/~anthonydillon/wp-json/wp/v2/posts.json');
  console.log('data: ', data.data);
  return data.data;
};

export const usePosts = () => {
  return useQuery<Post[], Error>(['posts'], () => getPostsService(), {
    cacheTime: 2000,
  });
};
