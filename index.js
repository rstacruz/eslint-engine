var eslint = require('./eslint')

module.exports = function tapeEslint (options) {
  return function (t) {
    eslint(options, function (err, res) {
      if (err) return t.fail(err)
      errorify(t, res)
      t.end()
    })
  }
}

/*
 * Converts eslint errors into `t.fail()` errors
 */

function errorify (t, res) {
  res.results.forEach(function (result) {
    if (result.errorCount || result.warningCount) {
      result.messages.forEach(function (msg) {
        t.fail('' +
          result.filePath.replace(process.cwd(), '') +
          ':' + msg.line + ':' + msg.column + ': ' +
          msg.message + ' (' + msg.ruleId + ')')
      })
    }
  })
}
