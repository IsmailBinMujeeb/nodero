import { Command } from 'commander';
import { conf } from '../config/conf';
import { findPackageJson } from '../utils/findPackageJson';
import chalk from 'chalk';
import path from 'path';

export const testCommand = new Command('test')
  .description('Run test command from project')
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
        chalk.gray.bold(`Running test script in ${projectName}'s package.json`),
      );

      const proc = Bun.spawn(['npm', 'test'], {
        cwd: path.dirname(project.path),
        stdout: 'inherit',
        stderr: 'inherit',
      });

      const exitCode = await proc.exited;

      if (exitCode !== 0) {
        console.log(`Failed to run test command in ${projectName}`);
        console.log(chalk.yellow(`Make sure you have test script in your package.json`));
        process.exit(exitCode);
      }
    } catch (error) {
      console.error((error as Error).message || error);
    }
  });
