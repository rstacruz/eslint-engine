# Options

## files
tape-eslint scans `**/*.js` and `**/*.jsx` by default. To configure what files to consume, use:

```js
test('eslint', require('tape-eslint')({
  files: [ 'index.js', 'test/*.js' ]
}))
```

## ignore
Some files are [ignored by default][ignores]. To add more files to ignore, use:

```js
test('eslint', require('tape-eslint')({
  ignore: [ 'app/**' ]
}))
```

## eslint
To specify options to pass onto `eslint.CLIEngine`, add them here. See [eslint's source](https://github.com/eslint/eslint/blob/v1.10.3/lib/cli-engine.js#L47-L60) for details.

```js
// to specify a different config file
test('eslint', require('tape-eslint')({
  eslint: {
    configFile: path.join(__dirname, 'eslintrc.json')
  }
}))
```

```js
// to specify your eslint config inline
test('eslint', require('tape-eslint')({
  eslint: {
    baseConfig: { extends: ['standard', 'standard-react'] }
  }
}))
```

[ignores]: ../index.js
