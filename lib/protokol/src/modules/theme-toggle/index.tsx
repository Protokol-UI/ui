import MoonIcon from '@heroicons/react/24/outline/MoonIcon';
import SunIcon from '@heroicons/react/24/outline/SunIcon';
import { useTheme, WkIconBtn } from '@woodkit/core';

export const KThemeToggle = () => {
  const { toggle } = useTheme();

  return (
    <WkIconBtn onClick={toggle}>
      <MoonIcon className="hidden h-5 w-5 stroke-white dark:block" />
      <SunIcon className="h-5 w-5 stroke-zinc-900 dark:hidden" />
    </WkIconBtn>
  );
};
