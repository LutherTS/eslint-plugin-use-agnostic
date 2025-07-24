import { createRequire } from "module";
const require = createRequire(import.meta.url);

const raw = require("../../../comments.config.json");
export const resolvedConfigData = raw;

/* Notes
We're actually not supposed to install comment-variables-resolve-config. What's supposed to happen is that the resolved config data should be made and consumed as a JSON either via a command in the CLI or automatically on save by the VS Code extension. 
For the CLI, the decision has been taken to automatically create the JSON every time the CLI is successfully run with any command.
*/
