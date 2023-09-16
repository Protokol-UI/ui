import { WkBox } from '@woodkit/core';
import { FC } from 'react';

/* eslint-disable-next-line */
export interface WkSidebarProps {
  children?: React.ReactNode;
}

export const WkSidebar: FC<WkSidebarProps> = ({ children }) => {
  return <WkBox c="hidden lg:mt-10 lg:block">{children}</WkBox>;
};

export default WkSidebar;
