#!/usr/bin/env bun

import { Command } from 'commander';
import { listCommand } from './commands/list';
import project from '../package.json';

const program = new Command();

program.name(project.name).description(project.description).version(project.version);

program.addCommand(listCommand);

program.parse(process.argv);
