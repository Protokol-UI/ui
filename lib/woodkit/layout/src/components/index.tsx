import { WkBox } from '@woodkit/core';

export interface WkLayoutProps {
  children?: React.ReactNode;
}

export const WkLayout: React.FunctionComponent<WkLayoutProps> = ({
  children,
}) => {
  return (
    <WkBox c="h-full">
      <WkBox c="flex min-h-full bg-white antialiased dark:bg-zinc-900">
        <WkBox c="w-full">
          <WkBox c="h-full lg:ml-72 xl:ml-80">{children}</WkBox>
        </WkBox>
      </WkBox>
    </WkBox>
  );
};

export default WkLayout;
