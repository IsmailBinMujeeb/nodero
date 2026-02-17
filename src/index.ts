#!/usr/bin/env bun

import { Command } from 'commander';
import project from '../package.json';

const program = new Command();

program.name(project.name).description(project.description).version(project.version);

program.parse(process.argv);
