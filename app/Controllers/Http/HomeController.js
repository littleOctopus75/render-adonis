class HomeController {
    async index ({view }) {
      //const user = await auth.getUser()
  
      // return view.render('welcome', {
      //   user: user || null
      // })
      return view.render('welcome')
    }
  }

  module.exports = HomeController