# eslint-plugin-use-agnostic

`eslint-plugin-use-agnostic` highlights problematic server-client imports in projects made with the Fullstack React Architecture (Next.js App Router, etc.) based on each of their modules' derived effective directives through detailed import rule violations, thanks to the introduction of its very own `'use agnostic'` directive.

![Intro example of linting with the use-agnostic ESLint plugin including the suggestion to use the 'use agnostic' directive.](./assets/README/example-screenshot.png)

## Installation

```
npm install eslint@^9.0.0 eslint-plugin-use-agnostic --save-dev
```

## Setup (using TypeScript and the Flat Config)

```js
// eslint.config.js

import { defineConfig, globalIgnores } from "eslint/config";
import tseslint from "typescript-eslint"; // for compatibility with TypeScript, not included as a devDependency

import useAgnostic, {
  useAgnosticPluginName,
  agnostic20ConfigName,
} from "eslint-plugin-use-agnostic"; // no declaration file at this time

export default defineConfig([
  globalIgnores([".next", ".react-router", "node_modules"]),
  {
    // files: ['**/*.js', '**/*.jsx'], // if you're using vanilla JavaScript
    files: ["**/*.ts", "**/*.tsx"],
    plugins: {
      [useAgnosticPluginName]: useAgnostic,
    },
    extends: [`${useAgnosticPluginName}/${agnostic20ConfigName}`],
    languageOptions: {
      parser: tseslint.parser, // for compatibility with .ts and .tsx
    },
  },
]);
```

And don't forget the VS Code settings via `./.vscode/settings.json`:

```json
{
  "eslint.useFlatConfig": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ]
}
```

## How it works

In the beginning, there were not two kinds of modules in the Fullstack React Architecture (server vs. client), there were three:

- **Server Modules**
- **Client Modules**
- and Shared Modules, now **Agnostic Modules**

Shared Modules, which I've now renamed as Agnostic Modules, are still here today. In fact, the React team originally anticipated that most modules used in conjunction with React Server Components would be Agnostic Modules. The problem is that Agnostic Modules are never surfaced between the current trifecta of 'use server', 'use client', and the lack of a directive:

- **`'use server'`** denotes modules that exclusively export Server Functions
- **`'use client'`** denotes modules that exclusively export code that is meant to be executed on the client
- and the lack of a directive implies that a module is server-first... until it isn't

This means that while `'use server'` denotes some special Server Modules but not all, and `'use client'` denotes all Client Modules regardless of their range of behaviors, the lack of a directive denotes both Server Modules that do possess server-side code, and Agnostic Modules that possess code that is neither server nor client and can safely run in both environments.

With the **`'use agnostic'`** directive, taking advantage of its being innocuous and entirely ignored by React at this time, it now becomes possible to manually distinguish between Server Modules, which are to remain unmarked by any directive to fullfill their server-first promise, and Agnostic Modules, which the `'use agnostic'` directive now allows to identify; with `eslint-plugin-use-agnostic` linting your project accordingly.

But it doesn't end there. With React Components into the mix, the reality is that not all Server, Client, and Agnostic Modules are born the same. For example, though a Server Module made of Server Components cannot import client-side code, it can actually import and compose with Client Components. This is where a new distinction intervenes, one that particularly takes into account the file extensions of the modules at hand to establish a list of 7 known modules in the Fullstack React Architecture:

- **Server Logics Modules**, which _DO NOT_ export React Components, and _DO NOT_ use a JSX file extension
- **Server Components Modules**, which _ONLY_ export React Components (Server Components), and _ONLY_ use a JSX file extension
- **Server Functions Modules**, which _ONLY_ export Server Functions, and _DO NOT_ use a JSX file extension
- **Client Logics Modules**, which _DO NOT_ export React Components, and _DO NOT_ use a JSX file extension
- **Client Components Modules**, which _ONLY_ export React Components (Client Components), and _ONLY_ use a JSX file extension
- **Agnostic Logics Modules**, which _DO NOT_ export React Components, and _DO NOT_ use a JSX file extension
- **Agnostic Components Modules**, which _ONLY_ export React Components (Agnostic Components), and _ONLY_ use a JSX file extension

With this list established, it thus becomes possible to recognize static import violations between these 7 known modules that `eslint-plugin-use-agnostic` can now highlight for you in your code editor and in the CLI.
