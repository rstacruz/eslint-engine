# tape-eslint

> Integrate [eslint][] into your tape tests

![](https://raw.githubusercontent.com/rstacruz/tape-standard/gh-pages/screenshot.png)

[![Status](https://travis-ci.org/rstacruz/tape-eslint.svg?branch=master)](https://travis-ci.org/rstacruz/tape-eslint "See test builds")

[eslint]: http://eslint.org/

## Rationale

This offers a finer alternative to adding the *eslint* command as a separate test step in your `npm test`.

* Runs in the same node process as tape, removing maybe 500ms of startup time.
* Painlessly integrate eslint into your travisci.org tests.

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

### Customization

* #### eslint
  It picks up your project's `.eslintrc` by default. If you' dlike to specify your own eslint config, use:

  ```js
  test('eslint', require('tape-eslint')({
    eslint: {
      extends: ['standard'],
      rules: {
        semi: [2, 'never']
      }
    }
  }))
  ```

* #### files
  It scans `**/*.js` and `**/*.jsx` by default. To configure what files to consume, use:

  ```js
  test('eslint', require('tape-eslint')({
    files: [ 'index.js', 'test/*.js' ]
  }))
  ```

* #### ignore
  Some files are [ignored by default][ignores]. To add more files to ignore, use:

  ```js
  test('eslint', require('tape-eslint')({
    ignore: [ 'app/**' ]
  }))
  ```

[ignores]: /eslint.js

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
