# Privacy Policy

**flipsuite-mcp** is a local Model Context Protocol server that you run on your
own machine.

## What it does

- It runs as a local process and communicates with your MCP client (e.g. Claude)
  over stdio.
- When you invoke one of its tools, it makes HTTPS requests to the FlipSuite
  Community API (`https://api.flipsuite.xyz`, or a base URL you configure),
  authenticating with the API key you supply via the `FLIPSUITE_API_KEY`
  environment variable.

## What it stores

- **Nothing.** This server keeps no database, logs no requests to disk, and
  retains no data between runs. Your API key is read from the environment at
  startup and held only in memory for the lifetime of the process.

## What it sends, and to whom

- Tool inputs you (or your MCP client) provide are sent to the FlipSuite API to
  create or read quests, along with your API key in the `x-api-key` header.
- No data is sent to the author of this package or any third party other than
  FlipSuite. Your use of the FlipSuite API is governed by FlipSuite's own
  [Terms of Service](https://docs.flipsuite.xyz/legal/tos) and
  [Privacy Policy](https://docs.flipsuite.xyz/legal/privacy).

## Your responsibilities

- Keep your `FLIPSUITE_API_KEY` secret. Treat it like a password.
- Anyone who can run this server with your key can create and read quests in your
  community.

## Contact

For issues with this server, open an issue on the project's GitHub repository.
