# eslint-engine

> Check JavaScript syntax using [eslint][] conveniently in your project

eslint-engine is a streamlined way to use eslint in your project. Just type `eslint-check` and you're done.

![](https://raw.githubusercontent.com/rstacruz/tape-standard/gh-pages/screenshot.png)

[![Status](https://travis-ci.org/rstacruz/tape-eslint.svg?branch=master)](https://travis-ci.org/rstacruz/tape-eslint "See test builds")

[eslint]: http://eslint.org/

## Usage

Install it:

```sh
npm install -g eslint-engine
```

Then in your project, install `eslint` as a devDependency and create an `.eslintrc`. Or use one of these presets to help you out:

```sh
# pick one
eslint-install standard
eslint-install airbnb
eslint-install xo
eslint-install --help   # view all
```

Now run a check:

```sh
$ eslint-check

index.js:53:11: Expected indentation of 8 space characters but found 10. (indent)
index.js:57:39: Trailing spaces not allowed. (no-trailing-spaces)
index.js:59:48: There should be no space before ','. (comma-spacing)
```

## Features

- __Convenient:__ eslint-engine checks all the JS files in your project while ignoring some [common ignorables](index.js). It can also be ran as a global command, unlike eslint.

  ```sh
  # with eslint-engine
  eslint-check

  # with eslint
  ./node_modules/.bin/eslint '**/*.js' --ignore-pattern='node_modules'
  ```

- __Easy to install:__ presets for popular eslint configs can be installed easily.

  ```sh
  # with eslint-engine
  eslint-install standard

  # with eslint
  echo "{ extends: ['standard', 'standard-jsx' }" > .eslintrc
  npm install --save eslint eslint-config-standard ... #snip
  ./node_modules/.bin/eslint ... # snip
  ```

- __Test runner integrations:__ eslint-engine can integrate with tape, ava, and mocha to provide you with fast linting as part of your test suite.

## Config

`eslint.ignore` — You can add ignores via package.json.

```js
/* package.json */
{
  "eslint": {
    "ignore": "lib/xyz"
  }
}
```

`eslint.include` — You can add additional files as well.

```js
/* package.json */
{
  "eslint": {
    "include": "bin/*"
  }
}
```

## Alternative usage

### via Tape/Ava

Add this test file to your [tape] or [ava] suite:

```js
test('eslint', require('eslint-engine/tape')())
```

### via Mocha

Add this test file to your [mocha] suite:

```js
describe('eslint', require('eslint-engine/mocha')())
```

### via API

Access the programatic API this way:

```js
var eslint = require('eslint-engine')

eslint(options, (err, res) => {
  res.errorCount
  res.results.forEach(item => {
    item.filePath
    item.messages.forEach(msg => {
      msg.line
      msg.column
      msg.message
      msg.ruleId
    })
  })
})
```

## Thanks

**tape-eslint** © 2016+, Rico Sta. Cruz. Released under the [MIT] License.<br>
Authored and maintained by Rico Sta. Cruz with help from contributors ([list][contributors]).

> [ricostacruz.com](http://ricostacruz.com) &nbsp;&middot;&nbsp;
> GitHub [@rstacruz](https://github.com/rstacruz) &nbsp;&middot;&nbsp;
> Twitter [@rstacruz](https://twitter.com/rstacruz)

[MIT]: http://mit-license.org/
[contributors]: http://github.com/rstacruz/tape-eslint/contributors
[standard]: https://www.npmjs.com/package/standard
[tape]: https://github.com/substack/tape
[ava]: https://www.npmjs.com/package/ava
[mocha]: https://www.npmjs.com/package/mocha
