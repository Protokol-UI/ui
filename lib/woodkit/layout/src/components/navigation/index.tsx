import { WkBox } from '@woodkit/core';
import { FC, ReactNode } from 'react';

export interface WkNavigationProps {
  children?: ReactNode;
}

export const WkNavigation: FC<WkNavigationProps> = ({ children }) => {
  return (
    <WkBox c="contents lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex">
      <WkBox c="contents lg:pointer-events-auto lg:block lg:w-72 lg:overflow-y-auto lg:border-r lg:border-zinc-900/10 lg:px-6 lg:pb-8 lg:pt-4 lg:dark:border-white/10 xl:w-80">
        {children}
      </WkBox>
    </WkBox>
  );
};

export default WkNavigation;
