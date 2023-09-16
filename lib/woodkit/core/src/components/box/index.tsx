import cc from 'classnames';
export interface WkBoxProps {
  children?: React.ReactNode;
  c?: Parameters<typeof cc> | Parameters<typeof cc>[0];
}

export function WkBox(props: WkBoxProps) {
  return <div className={cc(props.c)}>{props.children}</div>;
}

export default WkBox;
