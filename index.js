module.exports = function tapeStandard (options) {
  if (!options) options = {}
  var standard = options.using || require('standard')
  var files = options.files || []
  var sOptions = options.options || {}

  return function (t) {
    standard.lintFiles(files, sOptions, function (err, res) {
      if (err) return t.fail(err)
      if (res.errorCount === 0 && res.warningCount === 0) t.pass('passed standard')
      errorify(t, res)
      t.end()
    })
  }
}

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
