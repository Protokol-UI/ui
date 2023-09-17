import { WkBox } from '@woodkit/core';

export type WkIconBtnProps = {
  children?: React.ReactNode;
  sm?: boolean;
} & React.HTMLAttributes<HTMLButtonElement>;

export const WkIconBtn: React.FC<WkIconBtnProps> = ({ children, ...props }) => {
  return (
    <WkBox
      c="flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-zinc-900/5 dark:hover:bg-white/5"
      component="button"
      props={props}
    >
      {children}
    </WkBox>
  );
};

export default WkIconBtn;
