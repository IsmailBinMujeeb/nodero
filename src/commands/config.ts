import { Command } from 'commander';
import { conf } from '../config/conf';
import { input, select } from '@inquirer/prompts';
import path from 'path';

const configSettingsLoop = async () => {
  const configOptions = await select({
    message: 'Select config settings',
    choices: [
      {
        name: 'Projects Path',
        value: 'projectsPath',
        description:
          'Set the path for your projects, will be used as the root directory for your projects.',
      },
      {
        name: 'Select IDE',
        value: 'ide',
        description:
          'Select the IDE to use for your projects, open command will open the project in the selected IDE.',
      },
      {
        name: 'Exit',
        value: 'exit',
      },
    ],
  });

  if (configOptions === 'projectsPath') {
    const projectsPath = await input({
      message: 'Enter projects path',
      default: conf.projectsDir,
    });
    conf.projectsDir = path.resolve(projectsPath);
  } else if (configOptions === 'ide') {
    const ide = await select({
      message: 'Select IDE',
      choices: [
        { name: 'VSCode', value: 'vscode' },
        { name: 'IntelliJ', value: 'intellij' },
        { name: 'WebStorm', value: 'webstorm' },
        { name: 'Atom', value: 'atom' },
        { name: 'Sublime', value: 'sublime' },
        { name: 'Zed', value: 'zed' },
      ],
    });
    conf.ide = ide;
  } else if (configOptions === 'exit') {
    return;
  }

  conf.save();
  await configSettingsLoop();
};

export const configCommand = new Command('config')
  .description('Configure nodero settings')
  .action(async () => {
    try {
      await configSettingsLoop();
    } catch (error) {
      console.error('Error configuring nodero settings:', error);
    }
  });
