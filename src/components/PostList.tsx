import * as React from 'react';
import { usePosts } from '../api/posts/usePosts';
import { useCallback } from 'react';
import { Post } from './Post/Post';
import '../styles/index.scss';

export const PostList = () => {
  const { data: posts } = usePosts();

  const getPosts = useCallback(() => {
    return posts?.map((post) => {
      return <Post post={post} key={post.id} />;
    });
  }, [posts]);

  return <div className="postList">{getPosts()}</div>;
};
