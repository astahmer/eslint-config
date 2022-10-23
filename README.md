```sh
pnpm add -D eslint @typescript-eslint/eslint-plugin @astahmer/eslint-config-ts
```

```sh
pnpm add -D eslint @typescript-eslint/eslint-plugin @astahmer/eslint-config-react
```

// package.json

```json
"lint": "eslint './{src,tests}/**/*.ts' --cache ",
"lint:fix": "eslint './{src,tests}/**/*.ts' --cache --fix",
"lint:debug": "TIMING=1 eslint './{src,tests}/**/*.ts'",
```

// eslint config

```js
extends: [
    "@astahmer/eslint-config-ts",
],
```

`eslint-formatter-pretty` ?
