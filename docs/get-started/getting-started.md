---
id: getting-started
title: Getting Started
next: quickstart-generate-sdk
---

import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"
import NextStep from "../../src/components/NextStep.tsx"
import GetStartedBlock from "../../src/components/GetStartedBlock.tsx"

# Getting started

liblab helps you automatically generate SDKs in different programming languages as well as developer documentation for your API. This guide will help you get started, giving you an overview of liblab, the CLI, and the process to generate SDKs.

<GetStartedBlock text="Sign up now to get started with liblab for free" />

## The SDK generation process

To generate SDKs you use the liblab CLI - a command line interface that has features including the ability to configure and generate SDKs. This CLI takes a configuration file and an API spec, and outputs SDKs and documentation.

<div className="generation-img-container"></div>

liblab supports API specs in <a href="https://swagger.io">Swagger</a>, <a href="https://www.openapis.org">OpenAPI</a>, and <a href="https://www.postman.com/collection/">Postman Collection</a> formats. You can find a full list of what we support in our <a href="">supported specs guide</a>.

The <a href="">config file</a> is a JSON file that configures the SDK generation. It includes information such as the name of the SDK, the programming language, the API spec file to use, how your API authenticates, and more. The liblab CLI takes this config file, verifies it and your spec, then generates an SDK and documentation. You can find out more about the config file in our <a href="">config file guide</a>.

The usual developer flow is to work through this process manually a few times to ensure your spec is correct, and that your configuration file is correctly set up for your needs. After this, you can automate the process via your CI/CD pipeline.

## Install the liblab CLI

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
To install the liblab CLI make sure you have <a href="https://nodejs.org">Node.js</a> version 18.17 or later installed, as well as <a href="https://pnpm.io/installation">`pnpm`</a>.

You can install the CLI using `pnpm` by running this command in your terminal:

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
You can read more on installation in our <a href="">CLI installation guide</a>.

## Register or login

Use the <code>liblab login</code> command to either register with liblab, or to log in:

```bash

liblab login
```

You can read more on the registration and log in process in our <a href="">CLI authentication guide</a>.

## Next steps

You are now ready to generate SDKs using liblab 🎉. Head to our <a href="">Generate an SDK from your OpenAPI spec guide</a> to generate your first SDK from an OpenAPI spec you already have.

To learn more about the CLI and the configuration file, check out the <a href="">CLI documentation</a>.

Otherwise, check out one of our hands-on tutorials to help you get started.

<NextStep />
