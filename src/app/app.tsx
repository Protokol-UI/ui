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

export function App() {
  return (
    <WkLayout>
      <WkNavigation>
        <WkBox c="hidden lg:flex">
          <WkLogo />
          <WkTopBar>Topbard</WkTopBar>
        </WkBox>
        <WkSidebar>asdf</WkSidebar>
      </WkNavigation>
      <WkContent footer={'footer'}>
        <WkArticle footer={'article footer'}>article</WkArticle>
      </WkContent>
    </WkLayout>
  );
}

export default App;
