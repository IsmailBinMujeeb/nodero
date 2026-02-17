import type { IDE } from '../types';

interface IDECommandResult {
  command: string;
  errorInstruction: string;
}

export function getIDEOpenCommand(ide: IDE): IDECommandResult {
  switch (ide) {
    case 'vscode':
      return {
        command: 'code',
        errorInstruction:
          "If 'code' is not found, open VS Code and run: 'Shell Command: Install code command in PATH' from the Command Palette.",
      };

    case 'webstorm':
      return {
        command: 'webstorm',
        errorInstruction:
          "If 'webstorm' is not found, open WebStorm → Tools → Create Command-line Launcher.",
      };

    case 'intellij':
      return {
        command: 'idea',
        errorInstruction:
          "If 'idea' is not found, open IntelliJ → Tools → Create Command-line Launcher.",
      };

    case 'atom':
      return {
        command: 'atom',
        errorInstruction:
          "If 'atom' is not found, open Atom and install shell commands from the menu.",
      };

    case 'sublime':
      return {
        command: 'subl',
        errorInstruction: "If 'subl' is not found, add Sublime's CLI binary to your PATH manually.",
      };

    case 'zed':
      return {
        command: 'zed',
        errorInstruction: "If 'zed' is not found, run: 'zed --install-cli' to install the CLI.",
      };

    default:
      return {
        command: '',
        errorInstruction: 'Unsupported IDE.',
      };
  }
}
