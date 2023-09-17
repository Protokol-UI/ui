import { KonfigProvider } from '@src/contex/config.context';
import { Header } from './sections/header';

import { WkBox } from '@woodkit/core';
import {
  WkArticle,
  WkContent,
  WkLayout,
  WkLogo,
  WkNavigation,
  WkSidebar,
  WkTopBar,
} from '@woodkit/layout';
import { Konfig } from '@src/contex/config.types';

export interface AppProps {
  config: Konfig;
}

export const App: React.FunctionComponent<AppProps> = ({ config }) => {
  return (
    <KonfigProvider value={config}>
      <WkLayout>
        <WkNavigation>
          <WkBox c="hidden lg:flex">
            <WkLogo />
            <WkTopBar>
              <Header />
            </WkTopBar>
          </WkBox>
          <WkSidebar>asdf</WkSidebar>
        </WkNavigation>
        <WkContent footer={'footer'}>
          <WkArticle footer={'article footer'}>article</WkArticle>
        </WkContent>
      </WkLayout>
    </KonfigProvider>
  );
};

export default App;
