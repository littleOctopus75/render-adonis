const { Octokit } = require("@octokit/rest");
class HomeController {
    async index ({view }) {
      //const user = await auth.getUser()
  
      // return view.render('welcome', {
      //   user: user || null
      // })
      return view.render('welcome')
    }
    async pruebaOctokit () {
      const octokit = new Octokit({
        //se crea el objeto Octokit y lo conecta con github, se ocupa el token de nuestra cuenta de github settings/Developer settings/tokens(classic)
        auth: process.env.GITHUB_TOKEN || '', // Usando process.env para acceder a la variable de entorno GITHUB_TOKEN
      });
    }
  }

  module.exports = HomeController