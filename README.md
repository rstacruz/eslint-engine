# tape-eslint

> Integrate [eslint][] into your tape tests

![](https://raw.githubusercontent.com/rstacruz/tape-standard/gh-pages/screenshot.png)

[![Status](https://travis-ci.org/rstacruz/tape-eslint.svg?branch=master)](https://travis-ci.org/rstacruz/tape-eslint "See test builds")

[eslint]: http://eslint.org/

## Rationale

This offers a finer alternative to adding the *eslint* command as a separate test step in your `npm test`.

* Runs in the same node process as tape, removing maybe 500ms of startup time.
* Painlessly integrate eslint into your travisci.org tests.
* You can get fast realtime linting feedback with [tape-watch].

(Your speed gains may be a bit different from my Pentium II, of course.)

[tape-watch]: https://github.com/rstacruz/tape-watch.git

## Usage

Install it:

```sh
npm install --save-dev tape-eslint eslint
```

Then add this test file to your tape suite:

```js
test('eslint', require('tape-eslint')())
```

Then create an `.eslintrc` in your project:

```
{
  "rules": {
    "semi": [2, "never"]
  }
}
```

## Customization

#### files
tape-eslint scans `**/*.js` and `**/*.jsx` by default. To configure what files to consume, use:

```js
test('eslint', require('tape-eslint')({
  files: [ 'index.js', 'test/*.js' ]
}))
```

#### ignore
Some files are [ignored by default][ignores]. To add more files to ignore, use:

```js
test('eslint', require('tape-eslint')({
  ignore: [ 'app/**' ]
}))
```

#### eslint
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

[ignores]: /eslint.js

## Standard

Here's an example of using [standard].

```
npm i --save-dev tape-eslint eslint
npm i --save-dev eslint-plugin-standard eslint-config-standard
npm i --save-dev eslint-plugin-react eslint-config-standard-react
```

```js
/* .eslintrc */
{
  "extends": ["standard", "standard-react"]
}
```

```js
test('eslint', require('tape-eslint')())
```

[standard]: https://www.npmjs.com/package/standard
[tape]: https://github.com/substack/tape

## Browserify

If you use [Browserify] on your tests (eg: [smokestack], [tape-run], [budo], [hihat], [zuul], and so on), doing `require('tape-eslint')()` is a noop. In practice, this means you can use `tape-eslint` even if your tests are powered by browserify, and your test will now work in both the browser and Node.

[zuul]: https://www.npmjs.com/package/zuul
[tape-run]: https://www.npmjs.com/package/tape-run
[budo]: https://github.com/mattdesl/budo
[hihat]: https://www.npmjs.com/package/hihat
[smokestack]: https://www.npmjs.com/package/smokestack
[Browserify]: http://browserify.org/


## Thanks

**tape-eslint** © 2016+, Rico Sta. Cruz. Released under the [MIT] License.<br>
Authored and maintained by Rico Sta. Cruz with help from contributors ([list][contributors]).

> [ricostacruz.com](http://ricostacruz.com) &nbsp;&middot;&nbsp;
> GitHub [@rstacruz](https://github.com/rstacruz) &nbsp;&middot;&nbsp;
> Twitter [@rstacruz](https://twitter.com/rstacruz)

[MIT]: http://mit-license.org/
[contributors]: http://github.com/rstacruz/tape-eslint/contributors
