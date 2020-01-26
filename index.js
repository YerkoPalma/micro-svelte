const { router } = require('micro-fork')
const handler = require('serve-handler')
const { routes } = require('./api/index.js')

const options = {
  public: 'public',
  directoryListing: false
}

const defaultPages = async (req, res) => {
  await handler(req, res, options)
}

module.exports = router({
  defaultRoute: defaultPages
}).apply(null, routes)
