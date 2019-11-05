const GithubApi = require('@octokit/rest')
const HttpsProxyAgent = require('https-proxy-agent')
const Agent = require('http').Agent

const github = new GithubApi({
  auth: 'd657f6bd0dbfdfc6d5230ef0ccb59d5f06a814fd',
  request: {
    agent: new HttpsProxyAgent('http://127.0.0.1:12639/')
  }
})

github.gists
  .get({
    gist_id: '123'
  })
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.error(err)
  })
