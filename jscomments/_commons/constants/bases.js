import url from "url";
import path from "path";

import { createRequire } from "module";
const require = createRequire(import.meta.url);

// // (Only useful during development.)
// const resolvedConfigDataForType = await import("../../../comments.config.json");

const filename = url.fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const rawPath = path.join(dirname, "../../../comments.config.json");

// /** @type {typeof resolvedConfigDataForType.default} (The `default` property on `resolvedConfigDataForType` – and I assume on `raw` itself – is a copy of the whole thing, naturally not including the `default` property recursively. Though `.default` here is unnecessary and technically untrue, it allows the inferred type to look better.) */
const raw = require(rawPath);
export const resolvedConfigData = raw;

/* Notes
We're actually not supposed to install comment-variables-resolve-config. What's supposed to happen is that the resolved config data should be made and consumed as a JSON either via a command in the CLI or automatically on save by the VS Code extension. 
For the CLI, the decision has been taken to automatically create the JSON every time the CLI is successfully run with any command. For the plugin, that's on every save connected to the config file.
*/
