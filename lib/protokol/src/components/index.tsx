import { KHelpers, KModules } from '..'; // object with my custom components
import { EvaluateOptions, evaluateSync } from '@mdx-js/mdx';
import { MDXProvider, useMDXComponents } from '@mdx-js/react';
import { FC, useMemo } from 'react';
import * as runtime from 'react/jsx-runtime';

export interface KomponentProps {
  children?: React.ReactNode;

  /**
   * Markdown string to be rendered. If this is set, `children` will be ignored.
   */
  markdown?: string;

  /**
   * Replace the default components with your own.
   */
  components?: Parameters<typeof MDXProvider>[0]['components'];

  /**
   * Add extra components to the default ones.
   */
  extra?: Parameters<typeof MDXProvider>[0]['components'];
}

export const Komponent: FC<KomponentProps> = ({
  children,
  markdown,
  components,
  extra,
}) => {
  const modules =
    components ??
    Object.entries({ ...KModules, ...KHelpers }).reduce(
      (ms, [key, value]) => ({ ...ms, [key]: value }),
      extra,
    );

  const MDXContent = useMemo(() => {
    try {
      return markdown
        ? evaluateSync(markdown, {
            ...runtime,
            useMDXComponents,
          } as EvaluateOptions).default
        : null;
    } catch (e) {
      return () => (e as Error).message;
    }
  }, [markdown]);

  return (
    <MDXProvider components={modules}>
      {MDXContent ? <MDXContent /> : children}
    </MDXProvider>
  );
};
