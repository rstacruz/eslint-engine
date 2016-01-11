module.exports = function tapeStandard (options) {
  return function (t) {
    t.pass('tape-standard not supported on this platform')
    t.end()
  }
}
