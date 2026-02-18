#!/usr/bin/env bun

import { Command } from 'commander';
import { listCommand } from './commands/list';
import project from '../package.json';
import { openCommand } from './commands/open';
import { configCommand } from './commands/config';
import { infoCommand } from './commands/info';
import { devCommand } from './commands/dev';
import { startCommand } from './commands/start';
import { testCommand } from './commands/test';

const program = new Command();

program.name(project.name).description(project.description).version(project.version);

program.addCommand(listCommand);
program.addCommand(openCommand);
program.addCommand(configCommand);
program.addCommand(infoCommand);
program.addCommand(devCommand);
program.addCommand(startCommand);
program.addCommand(testCommand);

program.parse(process.argv);
