# tape-standard

**Integrates [standard] into your tape tests.** This allows you to enforce a "one true" JavaScript coding style in your project via [tape][] tests.

![](https://raw.githubusercontent.com/rstacruz/tape-standard/gh-pages/screenshot.png)

[![Status](https://travis-ci.org/rstacruz/tape-standard.svg?branch=master)](https://travis-ci.org/rstacruz/tape-standard "See test builds")

## Features

This offers a finer alternative to adding *standard* into package.json's `scripts.test` block.

* Runs in the same node process as mocha, removing maybe 500ms of startup time.
* Painlessly integrate standard into your travisci.org tests.

(Your speed gains may be a bit different from my Pentium II, of course.)

## Usage

Install it:

```sh
npm install --save-dev tape-standard standard
```

Then add this test file to your Mocha suite:

```jsj
test('standard', require('tape-standard')())
```

To configure what files to consume:

```js
test('standard', require('tape-standard')({
  files: [ 'index.js', 'test/*.js' ]
}))
```

## Globals

To specify global variables, pass `{ global: [...] }` into `.files()`. This is especially useful for Mocha test files. (Be sure you're using standard 5.0.0 or above.)

```js
test('standard', require('tape-standard')({
  global: ['$', 'jQuery']
}))
```

## Semicolons

To use [semistandard] instead, use:

```sh
npm install --save-dev semistandard
```

```js
test('standard', require('tape-standard')({
module: require('semistandard')
}))
```

[semistandard]: https://github.com/Flet/semistandard
[standard]: https://www.npmjs.com/package/standard
[tape]: https://github.com/substack/tape

## Thanks

**tape-standard** © 2016+, Rico Sta. Cruz. Released under the [MIT] License.<br>
Authored and maintained by Rico Sta. Cruz with help from contributors ([list][contributors]).

> [ricostacruz.com](http://ricostacruz.com) &nbsp;&middot;&nbsp;
> GitHub [@rstacruz](https://github.com/rstacruz) &nbsp;&middot;&nbsp;
> Twitter [@rstacruz](https://twitter.com/rstacruz)

[MIT]: http://mit-license.org/
[contributors]: http://github.com/rstacruz/tape-standard/contributors
