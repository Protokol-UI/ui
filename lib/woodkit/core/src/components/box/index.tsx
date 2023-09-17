import cc from 'clsx';
import { FC } from 'react';

export interface WkBoxProps<K extends keyof JSX.IntrinsicElements> {
  children?: React.ReactNode;
  c?: Parameters<typeof cc> | Parameters<typeof cc>[0];
  component?: K;
  props?: JSX.IntrinsicElements[K];
}

export const WkBox: FC<WkBoxProps<keyof JSX.IntrinsicElements>> = ({
  c,
  children,
  component: EL = 'div',
  props,
}) => {
  return (
    <EL className={cc(c)} {...(props as any)}>
      {children}
    </EL>
  );
};

export default WkBox;
