# Metro bundler bug

## Reproduction

### Prepare
```shell
npm ci
npm link ./test-lib
```

### Run
```shell
npm run all
npm run root
npm run full
npm run subdir
```

### Expected

It should work as under nodejs

```shell
npm run node:all
npm run node:root
npm run node:full
npm run node:subdir
```

### Actual
```
rror: "Export" statement may only appear at the top level in file test-lib/subroute.js at 6:2
```

But test-lib have export statement at the top level in any resolved file.
