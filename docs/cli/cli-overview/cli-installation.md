---
id: cli-installation
title: Install the CLI
---

import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"

# Install the CLI

The liblab CLI can be installed using <a href="https://www.npmjs.com">npm</a> or <a href="https://brew.sh">Homebrew</a>:
<Tabs>
<TabItem value="npm" label="npm" default>

To install the liblab CLI make sure you have <a href="https://nodejs.org">Node.js</a> version 18.17 or later installed. We recommend using <a href="https://github.com/nvm-sh/nvm">`nvm`</a> to manage your Node.js versions.

You can install the CLI using `npm` by running this command in your terminal:

```bash
npm install -g liblab
```

</TabItem>
<TabItem value="pnpm" label="pnpm">
To install the liblab CLI make sure you have <a href="https://nodejs.org">Node.js</a> version 18.17 or later installed. We recommend using <a href="https://github.com/nvm-sh/nvm">`nvm`</a> to manage your Node.js versions.

You can install the CLI using `npm` by running this command in your terminal:

```bash
pnpm add -g liblab
```

</TabItem>
<TabItem value="brew" label="Homebrew">

If you are using Homebrew, first you need to add the liblab repository to your list of Homebrew taps. You can do this by running this command in your terminal:

```bash
brew tap liblaber/homebrew-liblab
```

Then you can install the liblab CLI by running this command:

```bash
brew install liblab
```

</TabItem>

</Tabs>

This will install the latest version of the CLI to your computer. To verify that the CLI has been installed properly, run:

```bash
liblab --version
```

You should see the version in the output:

```bash
➜  ~ liblab --version
liblab/0.18.0 darwin-arm64 node-v18.17.2
```

If a new version of the CLI is released, you will need to update - if you try to run a command with an outdated version of the CLI, you will see an error message telling you to update. To update the CLI to the latest version, run:

<Tabs>
<TabItem value="npm" label="npm" default>

```bash
npm update -g liblab
```

:::note
If you prefer to run the latest version at all times, you can do so using `npx`. Just add `npx` before any of your commands. For example:

```bash
npx liblab@latest [command]
```

This is useful when an automated system needs to run the CLI such as in the case of CI/CD.

:::

</TabItem>
<TabItem value="pnpm" label="pnpm">

```bash
pnpm up -g liblab
```

</TabItem>
<TabItem value="brew" label="Homebrew">

First update the Homebrew package list by running:

```bash
brew update
```

Then upgrade the CLI:

```bash
brew install liblab
```

</TabItem>

</Tabs>
