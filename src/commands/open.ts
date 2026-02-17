import { Command } from 'commander';
import type { IDE } from '../types';
import { conf } from '../config/conf';
import { findPackageJson } from '../utils/findPackageJson';
import chalk from 'chalk';
import path from 'path';
import { getIDEOpenCommand } from '../utils/getIDEOpenCommand';

export const openCommand = new Command('open')
  .description('Open a file or directory')
  .argument('<projectName>', "Name in your project's package.json")
  .option('-i, --ide <ide>', 'IDE to use (vscode, webstorm, etc)')
  .action(async (projectName: string, options: { ide?: IDE }) => {
    const selectedIDE: IDE = options.ide || (conf.ide as IDE) || 'vscode';

    try {
      const projects = await findPackageJson(conf.projectsDir || '/home');

      const project = projects.find(
        (p) => p.data?.name?.toLowerCase() === projectName.toLowerCase(),
      );

      if (!project) {
        console.error(`Project ${projectName} not found`);
        process.exit(1);
        return;
      }

      const ideOpenCommand = getIDEOpenCommand(selectedIDE);
      console.log(
        chalk.cyan('$'),
        chalk.gray.bold(`Opening ${projectName} in ${selectedIDE}, using `),
        chalk.green(`${ideOpenCommand.command} ${path.dirname(project.path)}`),
      );

      const proc = Bun.spawn([ideOpenCommand.command, path.dirname(project.path)], {
        stdout: 'inherit',
        stderr: 'inherit',
      });

      const exitCode = await proc.exited;

      if (exitCode !== 0) {
        console.log(`Failed to open project in ${selectedIDE}`);
        console.log(chalk.yellow(ideOpenCommand.errorInstruction));
        process.exit(exitCode);
      }
    } catch (error) {
      console.error((error as Error).message || error);
      const ideOpenCommand = getIDEOpenCommand(selectedIDE);
      console.log(chalk.yellow(ideOpenCommand.errorInstruction));
    }
  });
