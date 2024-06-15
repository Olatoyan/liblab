---
id: cli-overview
title: CLI Overview
---

# CLI Overview

The liblab CLI is used to generate SDKs from your API specs. This can be run from your terminal or as part of your CI/CD pipeline.

As a developer generating SDKs from an API, your typical flow might be:

<div className="cli-overview-container"></div>

If you are integrating the CLI into your CI/CD pipeline, your typical flow might be:

<div className="cicd-overview-container"></div>

You can find tutorials walking you through different areas of this flow in our <a href="">tutorials</a>.

## Use the liblab CLI

- <a href="">`Install the CLI`</a>
- <a href="">`Authentication`</a>
- <a href="">`OpenAPI spec management`</a>
- <a href="">`Initialize, validate and generate an SDK and docs`</a>
- <a href="">`Create PRs for your SDKs`</a>
- <a href="">`Get help`</a>

<div className="cli-command-container">
  <p>INFO</p>
You can get a list of all the available commands by running <a href="">`liblab --help`</a>:

```bash
liblab --help

```

You can also get help on individual commands by running the command with <a href="">`--help`</a>. For example:

```bash
liblab build --help
```

</div>
