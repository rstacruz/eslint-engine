# eslint-engine

> Check JS syntax using [eslint][] conveniently in your project

eslint-engine is a streamlined way to use eslint in your project. Just type `eslint-check` and you're done.

- No need to specify files to check.
- Some files are automatically ignored.
- Presets for popular eslint configs can be installed easily.
- You can lock eslint versions in your project.

![](https://raw.githubusercontent.com/rstacruz/tape-standard/gh-pages/screenshot.png)

[![Status](https://travis-ci.org/rstacruz/tape-eslint.svg?branch=master)](https://travis-ci.org/rstacruz/tape-eslint "See test builds")

[eslint]: http://eslint.org/

## Usage

Install it:

```sh
npm install -g eslint-engine
```

Then in your project, create an `.eslintrc`. One of these presets ought to help you out:

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

### via Tape

Add this test file to your [tape] suite:

```js
test('eslint', require('eslint-engine/tape')())
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
