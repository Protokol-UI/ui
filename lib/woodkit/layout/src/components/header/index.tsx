import { FC, ReactNode } from 'react';

export type WkHeaderProps = {
  children?: ReactNode;
};

export const WkHeader: FC<WkHeaderProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default WkHeader;
