import { FC, ReactNode } from 'react';

export type WkLayoutProps = {
  children?: ReactNode;
};

export const WkLayout: FC<WkLayoutProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default WkLayout;
