/*
 * Converts eslint errors into `t.fail()` errors.
 * This works like Array.prototype.reduce.
 *
 *     var err = errorify(res, (err, msg) {
 *       err.stack += msg
 *      }, new Error('Issues found:'))
 */

module.exports = function errorify (res, fn, acc) {
  var messages = 0
  res.results.forEach(function (result) {
    if (result.errorCount || result.warningCount) {
      result.messages.forEach(function (msg) {
        messages += 1
        acc = fn(acc, '' +
          result.filePath.replace(process.cwd(), '') +
          ':' + msg.line + ':' + msg.column + ': ' +
          msg.message + ' (' + msg.ruleId + ')')
      })
    }
  })
  return acc
}
