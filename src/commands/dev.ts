import { Command } from 'commander';
import { conf } from '../config/conf';
import { findPackageJson } from '../utils/findPackageJson';
import chalk from 'chalk';
import path from 'path';

export const devCommand = new Command('dev')
  .description('Run dev command from project')
  .argument('<projectName>', "Name in your project's package.json")
  .action(async (projectName: string) => {
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

      console.log(
        chalk.cyan('$'),
        chalk.gray.bold(`Running dev script in ${projectName}'s package.json`),
      );

      const proc = Bun.spawn(['npm', 'run', 'dev'], {
        cwd: path.dirname(project.path),
        stdout: 'inherit',
        stderr: 'inherit',
      });

      const exitCode = await proc.exited;

      if (exitCode !== 0) {
        console.log(`Failed to run dev command in ${projectName}`);
        console.log(chalk.yellow(`Make sure you have dev script in your package.json`));
        process.exit(exitCode);
      }
    } catch (error) {
      console.error((error as Error).message || error);
    }
  });
