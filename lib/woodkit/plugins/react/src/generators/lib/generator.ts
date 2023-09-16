import { installPackagesTask } from '@nx/devkit';
import { Linter } from '@nx/linter';
import { libraryGenerator } from '@nx/react';

export async function libGenerator(
  ...args: Parameters<typeof libraryGenerator>
) {
  const [tree, schema] = args;
  const { name, directory } = schema;
  const dir = ['lib', 'woodkit', directory, name].filter(Boolean).join('/');
  await libraryGenerator(tree, {
    name: 'woodkit-' + name,
    style: 'none',
    linter: Linter.EsLint,
    importPath: `@woodkit/${name}`,
    directory: dir,
    projectNameAndRootFormat: 'as-provided',
    bundler: 'vite',
    compiler: 'swc',
  });

  return () => {
    installPackagesTask(tree);
  };
}

export default libGenerator;
