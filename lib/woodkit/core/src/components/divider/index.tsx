import { WkBox } from '@woodkit/core';

export interface WkDividerProps {
  children?: React.ReactNode;
}

export const WkDivider: React.FC<WkDividerProps> = ({ children }) => {
  return (
    <WkBox c=" ">
      {children}
      <WkBox c="border">
        DIVIDER
      </WkBox>
    </WkBox>
  );
}

export default WkDivider;
