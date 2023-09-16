import { FC, ReactNode } from 'react';

/* eslint-disable-next-line */
export interface WkSidebarProps {
  children?: ReactNode;
}

export const WkSidebar: FC<WkSidebarProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default WkSidebar;
