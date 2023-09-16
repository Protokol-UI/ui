import { WkBox } from '@woodkit/core';
import {
  WkContent,
  WkFooter,
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
        <WkSidebar>
          asdf
        </WkSidebar>
      </WkNavigation>
      <WkContent>
        content
        <WkFooter>footer</WkFooter>
      </WkContent>
    </WkLayout>
  );
}

export default App;
