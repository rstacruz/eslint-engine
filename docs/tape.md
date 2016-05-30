# Tape

## Rationale

This offers a finer alternative to adding the *eslint* command as a separate test step in your `npm test`.

* Runs in the same node process as tape, removing maybe 500ms of startup time.
* Painlessly integrate eslint into your travisci.org tests.
* You can get fast realtime linting feedback with [tape-watch].

(Your speed gains may be a bit different from my Pentium II, of course.)

[tape-watch]: https://github.com/rstacruz/tape-watch.git

## Browserify

If you use [Browserify] on your tests (eg: [smokestack], [tape-run], [budo], [hihat], [zuul], and so on), doing `require('tape-eslint')()` is a noop. In practice, this means you can use `tape-eslint` even if your tests are powered by browserify, and your test will now work in both the browser and Node.

[zuul]: https://www.npmjs.com/package/zuul
[tape-run]: https://www.npmjs.com/package/tape-run
[budo]: https://github.com/mattdesl/budo
[hihat]: https://www.npmjs.com/package/hihat
[smokestack]: https://www.npmjs.com/package/smokestack
[Browserify]: http://browserify.org/
