"use strict";

const User = use("App/Models/User");

class AuthController {
  showRegisterForm({ view }) {
    return view.render("register");
  }
  showLoginForm({ view }) {
    return view.render("login");
  }
  async register ({ request, response }) {
    const userData = request.only(['username', 'email', 'password'])
    const user = await User.create(userData)
    return response.json(user)
  } 
  async login ({ request, response, auth }) {
    const { email, password } = request.all()
    const token = await auth.attempt(email, password)
    return response.json(token)
  }
  async logout ({ auth, response }) {
    await auth.logout()
    return response.redirect('/')
  }
}
class HomeController {
  async index ({ auth, view }) {
    const user = await auth.getUser()

    return view.render('welcome', {
      user: user || null
    })
  }
}

module.exports = HomeController

module.exports = AuthController;
