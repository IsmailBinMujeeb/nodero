import { Command } from 'commander';
import { conf } from '../config/conf';

export const infoCommand = new Command('info')
  .description('Display information about nodero configuration.')
  .action(async () => {
    try {
      const projectsRootDir = conf.projectsDir;
      const ide = conf.ide;

      console.log(`Projects Root Directory: ${projectsRootDir}`);
      console.log(`IDE: ${ide}`);
    } catch (error) {
      console.error('Error displaying nodero information:', error);
    }
  });
