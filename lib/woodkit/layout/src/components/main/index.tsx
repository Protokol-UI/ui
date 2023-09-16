import { WkBox } from '@woodkit/core';

/* eslint-disable-next-line */
export interface WkMainProps {}

export function WkMain(_props: WkMainProps) {
  return (
    <WkBox c="flex-auto">
      <h1>Welcome to WkMain!</h1>
    </WkBox>
  );
}

export default WkMain;
