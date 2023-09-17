import {
  applyChangesToString,
  ChangeType,
  formatFiles,
  generateFiles,
  joinPathFragments,
  names,
  readProjectConfiguration,
  Tree,
} from '@nx/devkit';

import { ComponentGeneratorSchema } from './schema';

import * as path from 'path';

export async function generator(tree: Tree, options: ComponentGeneratorSchema) {
  const project = readProjectConfiguration(tree, options.project);
  const { fileName, className, constantName } = names(options.name);

  const p = joinPathFragments('components', options.directory || '', fileName);

  await generateFiles(
    tree,
    path.join(__dirname, 'files'),
    joinPathFragments(project.sourceRoot, p),
    { ...options, className, fileName, constantName },
  );

  const indexFilePath = joinPathFragments(project.sourceRoot, 'index.ts');
  const indexSource = tree.read(indexFilePath, 'utf-8');

  const changes = applyChangesToString(indexSource, [
    {
      type: ChangeType.Insert,
      index: 0,
      text: `export * from './${p}';\n`,
    },
  ]);

  tree.write(indexFilePath, changes);

  await formatFiles(tree);
}

export default generator;
