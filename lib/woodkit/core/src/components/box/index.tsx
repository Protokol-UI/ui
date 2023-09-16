import cc from 'classnames';

export interface WkBoxProps {
  children?: React.ReactNode;
  c?: Parameters<typeof cc> | Parameters<typeof cc>[0];
  component?: keyof JSX.IntrinsicElements;
}

export function WkBox({ c, children, component: EL = 'div' }: WkBoxProps) {
  return <EL className={cc(c)}>{children}</EL>;
}

export default WkBox;
