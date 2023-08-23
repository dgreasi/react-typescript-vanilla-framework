import * as React from 'react';

interface Props {
  type: string;
}

export const Footer = ({ type }: Props) => {
  return (
    <div style={{ paddingTop: 0, paddingBottom: 0 }}>
      <hr className="u-sv1" />
      <p className="textAlignLeft" style={{ textTransform: 'capitalize' }}>{type}</p>
    </div>
  );
};
