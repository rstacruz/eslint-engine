var eslint = require('./index')
var errorify = require('./lib/errorify')

module.exports = function mochaEslint (options) {
  return function () {
    this.timeout(10000)

    global.it('passes', function (done) {
      eslint(options, function (err, res) {
        if (err) return done(err)
        var count = res.errorCount + res.warningCount
        if (count === 0) {
          return done()
        } else {
          err = new Error('' + count + (count === 1 ? ' issue' : ' issues') + ' found:')
          err.stack = ''
          errorify(res, function (_, msg) {
            err.message += '\n     ' + msg.description
          })
          return done(err)
        }
      })
    })
  }
}
