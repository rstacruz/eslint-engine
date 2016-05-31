var cwd = process.cwd()
var firstSlash = new RegExp('^' + require('path').sep.replace('\\', '\\\\'))

/*
 * Converts eslint errors into `t.fail()` errors.
 * This works like Array.prototype.reduce.
 *
 *     var err = errorify(res, (err, msg, { line, column, message, ruleId }) {
 *       err.stack += msg
 *      }, new Error('Issues found:'))
 */

module.exports = function errorify (res, fn, acc) {
  res.results.forEach(function (result) {
    if (result.errorCount || result.warningCount) {
      result.messages.forEach(function (msg) {
        var filePath = strip(result.filePath)
        var description = '' + filePath +
          ':' + msg.line + ':' + msg.column + ': ' +
          msg.message + ' (' + msg.ruleId + ')'
        acc = fn(acc, {
          description: description,
          line: msg.line,
          column: msg.column,
          filePath: filePath,
          fullPath: result.fullPath,
          message: msg.message,
          ruleId: msg.ruleId
        })
      })
    }
  })
  return acc
}

function strip (str) {
  return str.replace(cwd, '').replace(firstSlash, '')
}
