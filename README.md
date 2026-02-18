<p align="center">
    <img src="https://raw.githubusercontent.com/IsmailBinMujeeb/nodero/refs/heads/main/assets/nodero.png" alt="Nodero Logo" width="200"/>
</p>

<h1 align="center">Nodero</h1>

Jumping between projects shouldn't be a chore. Whether you're switching between three repos in a day or picking up something you haven't touched in weeks, hunting through the file explorer or remembering IDE-specific commands just slows you down.

> Nodero is a simple CLI tool that allows you to manage your projects easily.

## Installation

```
npm install -g nodero
```

# Usage

Nodero can be invoked using either the full command `nodero` or the shorthand alias `ndr`.

```bash
nodero [options] [command]
# or
ndr [options] [command]
```

## Options

| Option          | Description               |
| --------------- | ------------------------- |
| `-V, --version` | Output the version number |
| `-h, --help`    | Display help for command  |

## Commands

### `ls [searchTerm]`

List all projects. Optionally pass a search term to filter results.

```bash
nodero ls
ndr ls

# Filter projects by name
nodero ls my-app
ndr ls my-app
```

---

### `open [options] <projectName>`

Open a project file or directory. you can pass in which IDE to use for e.g. `open my-app -i zed` or `open my-app -ide vscode`.

```bash
nodero open my-app
ndr open my-app
```

---

### `config`

Configure nodero settings interactively. Like `Project directory` and `IDE`, Defaults to `os.homedir()` and `vscode` respectively.

```bash
nodero config
ndr config
```

---

### `info`

Display information about the current nodero configuration. `Project directory` and `IDE`.

```bash
nodero info
ndr info
```

---

### `dev <projectName>`

Run the `dev` command defined in the project.

```bash
nodero dev my-app
ndr dev my-app
```

---

### `start <projectName>`

Run the `start` command defined in the project.

```bash
nodero start my-app
ndr start my-app
```

---

### `test <projectName>`

Run the `test` command defined in the project.

```bash
nodero test my-app
ndr test my-app
```

---

### `help [command]`

Display help for a specific command.

```bash
nodero help
ndr help

# Help for a specific command
nodero help open
ndr help open
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Icon Credits: <a href="https://www.flaticon.com/free-icons/compass" title="compass icons">Compass icons created by Fajrul Fitrianto - Flaticon</a>
