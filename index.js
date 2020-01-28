const { router } = require('micro-fork')
const handler = require('serve-handler')
const { routes } = require('./api/index.js')

const options = {
  public: 'public',
  directoryListing: false
}

const defaultRoute = async (req, res) => {
  await handler(req, res, options)
}

module.exports = router({
  defaultRoute
}).apply(null, routes)
