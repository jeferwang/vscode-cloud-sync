const GithubApi = require('@octokit/rest')
const HttpsProxyAgent = require('https-proxy-agent')
const Agent = require('http').Agent

const github = new GithubApi({
  auth: 'token 170fb493e738a19367cd55737bdd74cc19f13064',
  request: {
    agent: new HttpsProxyAgent('http://127.0.0.1:12639/')
  }
})

// github.gists
//   .update({
//     gist_id: '1dd8db54602c8068f488d6a8b02720f1',
//     files: {
//       'hello.php': null
//     },
//     description: '测试222'
//   })
//   .then(res => {
//     console.log(res)
//   })
//   .catch(err => {
//     console.error(err)
//   })

// github.gists
//   .create({
//     files: {
//       'demo.php': {
//         content: `
//         <?php
//           echo "demo";
//         ?>
//         `
//       },
//       'hello.php': {
//         content: `
//         <?php
//           echo "hello world";
//         ?>
//         `
//       }
//     },
//     public: false,
//     description: '测试'
//   })
//   .then(res => {
//     console.log(res)
//   })
//   .catch(err => {
//     console.error(err)
//   })
