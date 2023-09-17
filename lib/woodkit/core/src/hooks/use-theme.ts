import { useEffect } from 'react';
import useLocalStorage from 'react-use/lib/useLocalStorage';

export interface UseTheme {
  theme?: 'dark' | 'light';
  toggle: () => void;
}

const cl = document.documentElement.classList;
export function useTheme(): UseTheme {
  const [theme, setTheme] = useLocalStorage<UseTheme['theme']>(
    'theme',
    'light',
  );
  useEffect(() => {
    if (
      theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    )
      cl.add('dark');
    else cl.remove('dark');
  }, [theme]);

  const toggle = () => {
    if (theme === 'light') setTheme('dark');
    else setTheme('light');
  };

  return { theme, toggle };
}

export default useTheme;
