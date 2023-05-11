"use strict";

const User = use("App/Models/User");

class AuthController {
  showRegisterForm({ view }) {
    return view.render("register");
  }
  showLoginForm() {
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
}

module.exports = AuthController;
