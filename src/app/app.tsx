import { WkFooter, WkHeader, WkLayout, WkSidebar } from '@woodkit/layout';

export function App() {
  return (
    <WkLayout>
      <WkSidebar>sidebar</WkSidebar>
      <WkHeader>header</WkHeader>
      <WkFooter>footer</WkFooter>
    </WkLayout>
  );
}

export default App;
