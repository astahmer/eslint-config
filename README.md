```sh
pnpm add -D @astahmer/eslint-config-ts
```

```sh
pnpm add -D @astahmer/eslint-config-react
```

// package.json

```json
"lint": "eslint .",
"lint:fix": "eslint . --fix"
```

// eslint config

```js
extends: [
    "@astahmer/eslint-config-ts",
],
```

`eslint-formatter-pretty` ?
