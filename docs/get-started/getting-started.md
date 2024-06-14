---
id: getting-started
title: Getting Started
---

# Getting started

liblab helps you automatically generate SDKs in different programming languages as well as developer documentation for your API. This guide will help you get started, giving you an overview of liblab, the CLI, and the process to generate SDKs.

> <div class="get-started-block">
>  <p>Sign up now to get started with liblab for free</p>
>  <a class="learn-more">Learn more</a>
> </div>

## The SDK generation process

To generate SDKs you use the liblab CLI - a command line interface that has features including the ability to configure and generate SDKs. This CLI takes a configuration file and an API spec, and outputs SDKs and documentation.

<div class="generation-img-container"></div>

liblab supports API specs in <a href="https://swagger.io">Swagger</a>, <a href="https://www.openapis.org">OpenAPI</a>, and <a href="https://www.postman.com/collection/">Postman Collection</a> formats. You can find a full list of what we support in our <a href="">supported specs guide</a>.

The <a href="">config file</a> is a JSON file that configures the SDK generation. It includes information such as the name of the SDK, the programming language, the API spec file to use, how your API authenticates, and more. The liblab CLI takes this config file, verifies it and your spec, then generates an SDK and documentation. You can find out more about the config file in our <a href="">config file guide</a>.

The usual developer flow is to work through this process manually a few times to ensure your spec is correct, and that your configuration file is correctly set up for your needs. After this, you can automate the process via your CI/CD pipeline.

## Install the liblab CLI

The liblab CLI can be installed using <a href="https://www.npmjs.com">npm</a> or <a href="https://brew.sh">Homebrew</a>:

To install the liblab CLI make sure you have <a href="https://nodejs.org">Node.js</a> version 18.17 or later installed. We recommend using <code>nvm</code> to manage your Node.js versions.

You can install the CLI using <code>npm</code> by running this command in your terminal:

```bash
npm install -g liblab
```

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

<div class="tutorial-box">
<div class="tutorial"> 
<h3>End-to-end SDK generation and publishing with GitHub Actions</h3>
<p>Automatically generate your SDK every time your API changes using GitHub Actions.</p>
<a href="">Go</a>
</div>
<div class="tutorial">
<h3>Build a retrieval augmented generation (RAG) AI app using SDKs</h3>
<p>Learn how to add RAG to your apps using Semantic Kernel and C# SDKs.</p>
<a href="">Go</a>
</div>
<div class="tutorial">
<h3>Integrate SDK Snippets into your API Reference Documentation using Docusaurus</h3>
<p>Learn how to add SDK documentation to an existing Docusaurus documentation site.</p>
<a href="">Go</a>
</div>
<div class="tutorial">
<h3>Customize your SDK with hooks</h3>
<p>Learn how to customize your SDK with hooks.</p>
<a href="">Go</a>
</div>
<div class="tutorial">
<h3>liblab llama SDK challenge 🦙</h3>
<p>Learn how to build an SDK to control a llama in a game.</p>
<a href="">Go</a>
</div>
</div>
