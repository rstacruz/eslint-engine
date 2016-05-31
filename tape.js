var eslint = require('./index')
var errorify = require('./lib/errorify')

module.exports = function tapeEslint (options) {
  return function (t) {
    eslint(options, function (err, res) {
      if (err) return t.fail(err)
      var count = res.errorCount + res.warningCount
      if (count === 0) t.pass('passed')
      else errorify(res, function (_, msg) { t.fail(msg.description) })
      t.end()
    })
  }
}
