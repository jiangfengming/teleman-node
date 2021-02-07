global.FormData = require('form-data');
global.fetch = require('node-fetch');
global.Headers = global.fetch.Headers;
global.Request = global.fetch.Request;
global.Response = global.fetch.Response;

if (!global.URL) {
  const url = require('url');
  global.URL = url.URL;
  global.URLSearchParams = url.URLSearchParams;
}

module.exports = require('teleman');
