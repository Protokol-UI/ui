import { FC, ReactNode } from 'react';

export type WkFooterProps = { children?: ReactNode };

export const WkFooter: FC<WkFooterProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default WkFooter;
