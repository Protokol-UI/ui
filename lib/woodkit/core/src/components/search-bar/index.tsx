import { WkBox } from '@woodkit/core';
import { useEffect, useState } from 'react';
import MagnifyingGlassIcon from '@heroicons/react/20/solid/MagnifyingGlassIcon';

export interface WkSearchBarProps {
  children?: React.ReactNode;
}

const useSearchProps = () => ({
  buttonProps: {},
  dialogProps: {},
});

export const WkSearchBar: React.FC<WkSearchBarProps> = ({ children }) => {
  let [modifierKey, setModifierKey] = useState<string>();
  let { buttonProps, dialogProps } = useSearchProps();

  useEffect(() => {
    setModifierKey(
      /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? '⌘' : 'Ctrl ',
    );
  }, []);

  return (
    <WkBox c="hidden lg:block lg:max-w-md lg:flex-auto">
      <button
        type="button"
        className="hidden h-8 w-full items-center gap-2 rounded-full bg-white pl-2 pr-3 text-sm text-zinc-500 ring-1 ring-zinc-900/10 transition hover:ring-zinc-900/20 ui-not-focus-visible:outline-none dark:bg-white/5 dark:text-zinc-400 dark:ring-inset dark:ring-white/10 dark:hover:ring-white/20 lg:flex"
        {...buttonProps}
      >
        <MagnifyingGlassIcon className="h-5 w-5 stroke-current" />
        Find something...
        <kbd className="ml-auto text-2xs text-zinc-400 dark:text-zinc-500">
          <kbd className="font-sans">{modifierKey}</kbd>
          <kbd className="font-sans">K</kbd>
        </kbd>
      </button>
      {/* <Suspense fallback={null}>
          <SearchDialog className="hidden lg:block" {...dialogProps} />
        </Suspense> */}
    </WkBox>
  );
};

export default WkSearchBar;
