import { WkBox } from '@woodkit/core';
import { FC } from 'react';

/* eslint-disable-next-line */
export interface WkTopBarProps {
  children?: React.ReactNode;
}

export const WkTopBar: FC<WkTopBarProps> = ({ children }) => {
  return (
    <WkBox c="fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between gap-12 px-4 transition sm:px-6 lg:z-30 lg:px-8 backdrop-blur-sm dark:backdrop-blur lg:left-72 xl:left-80 bg-white/[var(--bg-opacity-light)] dark:bg-zinc-900/[var(--bg-opacity-dark)]">
      {children}
      <WkBox
        c="absolute inset-x-0 top-full h-px transition bg-zinc-900/7.5 dark:bg-white/7.5" /* divider */
      />
    </WkBox>
  );
};

export default WkTopBar;
