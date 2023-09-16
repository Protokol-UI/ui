import { WkBox } from '@woodkit/core';

/* eslint-disable-next-line */
export interface WkContentProps {
  children?: React.ReactNode;
}

export const WkContent: React.FunctionComponent<WkContentProps> = ({
  children,
}) => {
  return (
    <WkBox c="relative flex h-full flex-col px-4 pt-14 sm:px-6 lg:px-8">
      {children}
    </WkBox>
  );
};

export default WkContent;
