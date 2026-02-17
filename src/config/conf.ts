import Conf from 'conf';
import os from 'os';
import path from 'path';

const config = new Conf({
  projectName: 'nodero',
  defaults: {
    projectsDir: os.homedir(),
    ide: 'vscode',
  },
});

// export default config;

export const conf = {
  projectsDir: config.get('projects-dir') as string,
  ide: config.get('ide') as string,
  save: () => {
    if (conf.projectsDir) config.set('projects-dir', conf.projectsDir);
    if (conf.ide) config.set('ide', conf.ide);
  },
};
