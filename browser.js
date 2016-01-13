module.exports = function tapeEslint (options) {
  return function (t) {
    t.pass('tape-eslint not supported on this platform')
    t.end()
  }
}
