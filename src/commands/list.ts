import { Command } from 'commander';
import { findPackageJson } from '../utils/findPackageJson';
import chalk from 'chalk';
import { conf } from '../config/conf';

export const listCommand = new Command('ls')
  .description('List all projects')
  .argument('[searchTerm]', 'Search term to filter projects')
  .action(async (searchTerm?: string) => {
    console.log('Listing packages...');

    try {
      const results = await findPackageJson(conf.projectsDir || '/home', searchTerm);

      console.log(`Found ${results.length} packages:`);

      results
        .sort((a, b) => a.data?.name?.localeCompare(b.data?.name))
        .forEach((result) => {
          if (result.data.name)
            console.log(`${chalk.yellow.bold(result.data.name)} - ${chalk.blue(result.path)}\n`);
        });
    } catch (error) {
      console.error('Error listing packages:', error);
    }
  });
