import { WkBox } from '@woodkit/core';

/* eslint-disable-next-line */
export interface WkArticleProps {
  children?: React.ReactNode;
  footer?: React.ReactNode;
}

export function WkArticle({ children, footer }: WkArticleProps) {
  return (
    <WkBox component="article" c="flex h-full flex-col pb-10 pt-16">
      {children}
      {footer && (
        <WkBox
          c="mx-auto mt-16 w-full max-w-2xl lg:max-w-5xl"
          component="footer"
        >
          {footer}
        </WkBox>
      )}
    </WkBox>
  );
}

export default WkArticle;
