import { WkBox } from '@woodkit/core';
import clsx from 'clsx';

export interface WkRowProps {
  children?: React.ReactNode;
  center?: boolean;
  top?: boolean;
  bottom?: boolean;
  left?: boolean;
  right?: boolean;
  middle?: boolean;
  between?: boolean;
  around?: boolean;
  gap?: number;
}

export const WkRow: React.FC<WkRowProps> = ({
  children,
  around,
  between,
  center,
  top,
  bottom,
  left,
  right,
  middle,
  gap,
}) => {
  return (
    <WkBox
      c={clsx('flex', {
        'items-start': top,
        'items-end': bottom,
        'items-center': center,
        'justify-start': left,
        'justify-end': right,
        'justify-center': middle,
        'justify-between': between,
        'justify-around': around,
        'gap-1': gap === 1,
        'gap-2': gap === 2,
        'gap-3': gap === 3,
        'gap-4': gap === 4,
        'gap-5': gap === 5,
        'gap-6': gap === 6,
        'gap-7': gap === 7,
        'gap-8': gap === 8,
        'gap-9': gap === 9,
        'gap-10': gap === 10,
        'gap-11': gap === 11,
        'gap-12': gap === 12,
        'gap-14': gap === 14,
        'gap-16': gap === 16,
        'gap-20': gap === 20,
      })}
    >
      {children}
    </WkBox>
  );
};

export default WkRow;
