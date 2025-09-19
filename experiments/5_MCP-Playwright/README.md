# Experiment # 5: MCP Playwright

## Setup

1. Install [Playwright MCP](https://github.com/microsoft/playwright-mcp) server

First, install the Playwright MCP server with your client.

**Standard config** works in most of the tools:

```js
{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": [
        "@playwright/mcp@latest"
      ]
    }
  }
}
```

[<img src="https://img.shields.io/badge/VS_Code-VS_Code?style=flat-square&label=Install%20Server&color=0098FF" alt="Install in VS Code">](https://insiders.vscode.dev/redirect?url=vscode%3Amcp%2Finstall%3F%257B%2522name%2522%253A%2522playwright%2522%252C%2522command%2522%253A%2522npx%2522%252C%2522args%2522%253A%255B%2522%2540playwright%252Fmcp%2540latest%2522%255D%257D)

2. Open VS Code Chat (Windows / Linux: `Ctrl + Shift + I`, macOS: `⌘ Command + Shift + I`)

3. Copy & paste the tests from `first-test.md` to VS Code Chat.

4. Experiment, debug and make it work.

5. Copy & paste the tests from `more-tests.md` to VS Code Chat.

6. **Challenge:** Add 10 more tests for each app.

7. Discuss opportunities and limitations of the approach.
