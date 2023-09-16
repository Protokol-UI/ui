import WkFooter from '../footer';
import { WkBox } from '@woodkit/core';

/* eslint-disable-next-line */
export interface WkContentProps {
  children?: React.ReactNode;
  footer?: React.ReactNode;
}

export const WkContent: React.FunctionComponent<WkContentProps> = ({
  children,
  footer,
}) => {
  return (
    <WkBox c="relative flex h-full flex-col px-4 pt-14 sm:px-6 lg:px-8">
      <WkBox component="main" c="flex-auto">
        {children}
      </WkBox>
      {footer && <WkFooter>{footer}</WkFooter>}
    </WkBox>
  );
};

export default WkContent;
