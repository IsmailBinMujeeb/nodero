import { Glob } from 'bun';
import path from 'path';

type PackageJsonResult = {
  path: string;
  data: any;
};

type InputPath = string | string[];

export async function findPackageJson(
  input: InputPath,
  searchTerm?: string,
): Promise<PackageJsonResult[]> {
  const roots = Array.isArray(input) ? input : [input];

  const results: PackageJsonResult[] = [];

  for (const root of roots) {
    const glob = new Glob('**/package.json');

    for await (const file of glob.scan({
      cwd: root,
      absolute: true,
    })) {
      try {
        if (file.includes('node_modules') || file.includes('wailsapp/wails')) continue;
        const content = await Bun.file(file).json();
        if (content.name.includes(searchTerm || '')) {
          results.push({
            path: path.resolve(file),
            data: content,
          });
        }
      } catch (err) {
        console.warn('Failed to parse:', file);
      }
    }
  }

  return results;
}
