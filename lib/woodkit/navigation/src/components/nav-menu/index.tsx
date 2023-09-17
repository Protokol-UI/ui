import { WkBox } from '@woodkit/core';

export interface WkNavMenuProps {
  children?: React.ReactNode;
}

export const WkNavMenu: React.FC<WkNavMenuProps> = ({ children }) => {
  return (
    <WkBox c="">
      {children}
      <WkBox c="border">NAV_MENU</WkBox>
    </WkBox>
  );
};

export default WkNavMenu;
