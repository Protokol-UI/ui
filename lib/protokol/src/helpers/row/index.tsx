import { WkRow, WkRowProps } from '@woodkit/core';

export const KRow = ({ children, ...props }: WkRowProps) => {
  return <WkRow {...props}>{children}</WkRow>;
};
