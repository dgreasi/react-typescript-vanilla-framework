import * as React from 'react';

interface Props {
  type: string;
}

export const Footer = ({ type }: Props) => {
  return (
    <div>
      <hr className="u-sv1" />
      <p className="textAlignLeft marginBottom0" style={{ textTransform: 'capitalize' }}>{type}</p>
    </div>
  );
};
