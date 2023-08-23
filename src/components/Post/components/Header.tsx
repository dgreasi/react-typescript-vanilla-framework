import * as React from 'react';

interface Props {
  data?: any;
}

export const Header = ({ data }: Props) => {
  return (
    <div style={{ paddingBottom: 8 }}>
        <p className="textAlignLeft">CLOUD AND SERVER</p>
        <hr className="u-sv1" />
    </div>
  );
};
