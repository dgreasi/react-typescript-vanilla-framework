import * as React from 'react';
import { IPost } from '../../api/posts/postsResponse';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HeaderLine } from './components/HeaderLine';
import { Title } from './components/Title';
import { AuthorFooter } from './components/AuthorFooter';

interface Props {
  post: IPost;
}

export const Post = ({ post }: Props) => {
  return (
    <div className="col-3 post">
      <div className="p-card card-container" style={{ position: 'relative' }}>
        <HeaderLine />
        <Header />
        <div className="p-card__content">
          <img className="p-card__image" alt="" height="185" width="330" src={post.featured_media} />
          <Title title={post.title.rendered} link={post.link} />
          <AuthorFooter
            author={post._embedded.author?.[0]?.name}
            link={post._embedded.author?.[0]?.link}
            date={post.date}
          />
          <Footer type={post.type} />
        </div>
      </div>
    </div>
  );
};
