export default {
  setToken(token) {
    if (token)
      window.localStorage.setItem('wela_token', JSON.stringify(token));
    else
      window.localStorage.removeItem('wela_token');
  },
  getToken() {
    try {
      return window.localStorage.getItem('wela_token')
    } catch (e) {
      return null;
    }
  },

  setUser(user) {
    if (user)
      window.localStorage.setItem('wela_user', JSON.stringify(user));
    else
      window.localStorage.removeItem('wela_user');
  },
  getUser() {
    try {
      return JSON.parse(window.localStorage.getItem('wela_user'));
    } catch (e) {
      return null;
    }
  },

  setKeepLogin(keepLogin) {
    window.localStorage.setItem('wela_keepLogin', JSON.stringify(keepLogin));
  },

  getKeepLogin() {
    var keepLogin = window.localStorage.getItem('wela_keepLogin');

    try {
      keepLogin = JSON.parse(keepLogin);
      return keepLogin;
    } catch (e) {
      return null;
    }
  },

  getMyScore() {
    let myScore = localStorage.getItem('wela_myScore');

    try {
      myScore = JSON.parse(myScore);
      return myScore;
    } catch (e) {
      return null;
    }
  },

  setMyScore(_myScore) {
    if (_myScore)
      localStorage.setItem('wela_myScore', JSON.stringify(_myScore));
    else
      localStorage.removeItem('wela_myScore');
  }
}
