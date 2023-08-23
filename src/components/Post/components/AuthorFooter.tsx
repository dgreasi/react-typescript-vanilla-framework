import * as React from 'react';

interface Props {
  author: string;
  link: string;
  date: Date;
}

export const AuthorFooter = ({ author, link, date }: Props) => {
  return (
    <p className="u-no-padding--bottom textAlignLeft authorFooter">
      <>
        By{' '}
        <a href={link} target="_blank" rel="noreferrer">
          {author}
        </a>{' '}
        on {new Date(date).toDateString()}
      </>
    </p>
  );
};
