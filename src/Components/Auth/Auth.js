class Auth {
  constructor() {
    this.authenticated = true;
  }

  login(cb) {
    this.authenticated = true;
    console.log('auth.js login()');
    cb();
  }

  logout(cb) {
    this.authenticated = false;
    cb();
  }

  isAuthenticated() {
    return this.authenticated;
  }
}

export default new Auth();
