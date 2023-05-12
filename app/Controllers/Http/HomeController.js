class HomeController {
    async index ({ auth, view }) {
      const user = await auth.getUser()
  
      return view.render('welcome', {
        user: user || null
      })
    }
  }

  module.exports = HomeController