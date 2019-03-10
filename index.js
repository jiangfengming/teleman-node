global.FormData = require('form-data')
global.fetch = require('node-fetch')
global.Headers = fetch.Headers
global.Request = fetch.Request
global.Response = fetch.Response

if (!global.URL) {
  const url = require('url')
  global.URL = url.URL
  global.URLSearchParams = url.URLSearchParams
}

module.exports = require('teleman')
