import * as React from 'react';

interface Props {
  title: string;
  link: string;
}

export const Title = ({ title, link }: Props) => {
  return (
    <h4 className="textAlignLeft title">
      <a href={link} target="_blank" rel="noreferrer">
        {title}
      </a>
    </h4>
  );
};
