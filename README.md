# tape-eslint

> Integrate [eslint][] into your tape tests

![](https://raw.githubusercontent.com/rstacruz/tape-eslint/gh-pages/screenshot.png)

[![Status](https://travis-ci.org/rstacruz/tape-eslint.svg?branch=master)](https://travis-ci.org/rstacruz/tape-eslint "See test builds")

[eslint]: http://eslint.org/

## Features

This offers a finer alternative to adding *eslint* as a separate test step.

* Runs in the same node process as tape, removing maybe 500ms of startup time.
* Painlessly integrate standard into your travisci.org tests.

(Your speed gains may be a bit different from my Pentium II, of course.)

## Usage

Install it:

```sh
npm install --save-dev tape-eslint eslint
```

Then add this test file to your tape suite:

```jsj
test('eslint', require('tape-eslint')())
```

To configure what files to consume:

```js
test('eslint', require('tape-eslint')({
  files: [ 'index.js', 'test/*.js' ]
}))
```

## Standard

Here's an example of using [standard].

```
npm i --save-dev tape-eslint eslint eslint-plugin-standard eslint-config-standard
```

```js
test('eslint', require('tape-eslint')({
  eslint: {
    extends: ['standard']
  }
}))
```

[standard]: https://www.npmjs.com/package/standard
[tape]: https://github.com/substack/tape

## Thanks

**tape-eslint** © 2016+, Rico Sta. Cruz. Released under the [MIT] License.<br>
Authored and maintained by Rico Sta. Cruz with help from contributors ([list][contributors]).

> [ricostacruz.com](http://ricostacruz.com) &nbsp;&middot;&nbsp;
> GitHub [@rstacruz](https://github.com/rstacruz) &nbsp;&middot;&nbsp;
> Twitter [@rstacruz](https://twitter.com/rstacruz)

[MIT]: http://mit-license.org/
[contributors]: http://github.com/rstacruz/tape-eslint/contributors
