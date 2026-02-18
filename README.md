# Nodero - One single cli to manage your projects

<p align="center">
    <img src="https://raw.githubusercontent.com/IsmailBinMujeeb/nodero/refs/heads/main/assets/nodero.png" alt="Nodero Logo" width="200"/>
</p>

Opening projects from the file explorer by right clicking on the project folder? I hate it, There are zillions of cases when you will work on more than one project in a week and opening projects from terminal or file explorer when open machine does not look like a good idea. Different IDEs have different ways of opening projects, and sometimes you just want to open a project quickly without having to remember the exact command.

> Nodero is a simple CLI tool that allows you to manage your projects easily.

## Installation

```
npm install -g nodero
```

## Usage

### Open Command - Open Project in your favorite IDE

```
nodero open <project_name>
```

OR

```
ndr open <project_name>
```

Here the you can also use `ndr` instead of `nodero` to open a project, `<project_name>` is the name of the project you specified in the `projects.json` file of that project.

### ls Command - List Projects

```
nodero ls
```

OR

```
ndr ls
```

This command will travel through all the `package.json` and give list of project name and its directory path.

### dev Command - Run dev script from package.json

```
nodero dev <project_name>
```

OR

```
ndr dev <project_name>
```

This command will travel through all the `package.json` and give list of project name and its directory path.

### Config Command - Confgiuring Cli

```
nodero config
```

OR

```
ndr config
```

This command will options to edit the configuration of the cli. `Project Directory Path` and `IDE`. Default value for `Project Directory Path` is `os.homedir()` and `IDE` is `vscode`.

| Config                 | Default Value |
| ---------------------- | ------------- |
| Project Directory Path | os.homedir()  |
| IDE                    | vscode        |

### Info Command - What configuration is used by the cli

```
nodero info
```

OR

```
ndr info
```

This command will give information about the configuration used by the cli. It will give information about the `Project Directory Path` and `IDE`.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
