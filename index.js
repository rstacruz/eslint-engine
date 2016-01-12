var eslint = require('./eslint')

module.exports = function tapeEslint (options) {
  return function (t) {
    eslint(options, function (err, res) {
      if (err) return t.fail(err)
      var count = errorify(t, res)
      if (count === 0) t.pass('passed')
      t.end()
    })
  }
}

/*
 * Converts eslint errors into `t.fail()` errors
 */

function errorify (t, res) {
  var messages = 0
  res.results.forEach(function (result) {
    if (result.errorCount || result.warningCount) {
      result.messages.forEach(function (msg) {
        messages += 1
        t.fail('' +
          result.filePath.replace(process.cwd(), '') +
          ':' + msg.line + ':' + msg.column + ': ' +
          msg.message + ' (' + msg.ruleId + ')')
      })
    }
  })
  return messages
}
