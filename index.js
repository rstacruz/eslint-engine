var deglob = require('deglob')
var eslint = require('eslint')

// https://github.com/sindresorhus/xo/blob/7644b9d9faf517b5b8f049b2083f13e7a803596c/index.js#L12-L21
var DEFAULT_IGNORE = [
  'node_modules/**',
  'bower_components/**',
  'coverage/**',
  '{tmp,temp}/**',
  '**/*.min.js',
  '**/bundle.js',
  'fixture{-*,}.{js,jsx}',
  '{test/,}fixture{s,}/**',
  'vendor/**',
  'dist/**'
]

var DEGLOB_OPTIONS = {
  useGitIgnore: true,
  usePackageJson: true,
  configKey: 'eslint',
  ignore: DEFAULT_IGNORE
}

var DEFAULT_PATTERNS = [
  '**/*.js',
  '**/*.jsx'
]

function runEslint (files, options, cb) {
  try {
    deglob(files || DEFAULT_PATTERNS, DEGLOB_OPTIONS, function (err, files) {
      if (err) return cb(err)
      var cli = new eslint.CLIEngine({})
      var res = cli.executeOnFiles(files)
      cb(null, res)
    })
  } catch (err) {
    cb(err)
  }
}

module.exports = function tapeEslint (files, options) {
  if (!options) options = {}

  return function (t) {
    runEslint(files, options, function (err, res) {
      if (err) return t.fail(err)
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
