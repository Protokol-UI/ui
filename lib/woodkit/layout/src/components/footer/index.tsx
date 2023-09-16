import { WkBox } from '@woodkit/core';
import { FC, ReactNode } from 'react';

export type WkFooterProps = { children?: ReactNode };

export const WkFooter: FC<WkFooterProps> = ({ children }) => {
  return (
    <WkBox
      component="footer"
      c="mx-auto w-full max-w-2xl space-y-10 pb-16 lg:max-w-5xl"
    >
      {children}
    </WkBox>
  );
};

export default WkFooter;
