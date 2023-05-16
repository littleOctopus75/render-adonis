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
      const fs = require('fs');
      const buff = fs.readFileSync('/hola');
      const file = await octokit.repos.createOrUpdateFileContents({
        owner: 'littleOctopus75',
        repo: 'pruebasOctokit',//repositorio donde se va a guardar
        path: 'hola',//el archivo que se va a crear con el contenido que estoy guardando
        message: '🐱‍💻',
        content: buff.toString('base64'),
       // sha: '...', // Asumiendo que tenemos el SHA del archivo existente (para actualizar)
      });
    }
  }

  module.exports = HomeController