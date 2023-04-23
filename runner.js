const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Ijc0MjBjNjdkLThjZmUtNGY2Zi1iMTVhLTkxYjM5ZjlkNTFmYS0xNjgyMjU2MTk0MDI2IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiYTJhMTRjYjYtMWZhZi00ZmZkLWJmMTktY2NkMDQ2ZTk2Yjg5IiwidHlwZSI6InQifQ.ar4NyGFSLfYbobzX4Jy1ipwPa5ITFi99OVwifw6dC2Y'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})