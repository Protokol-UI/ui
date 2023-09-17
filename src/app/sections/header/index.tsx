import { useKonfig } from '@src/contex/config.context';
import { WkBox } from '@woodkit/core';
import Content from './index.mdx';
import { Komponent } from '@protokol/komponent';
import { MDXProvider, useMDXComponents } from '@mdx-js/react';
import { FC } from 'react';

type HeaderProps = {
  md?: string;
};

export const Header: FC<HeaderProps> = ({ md }) => {
  return (
    <Komponent markdown={md}>
      <Content />
    </Komponent>
  );
};
