class Sign {
  static saveUserInfo(data) {
    const dataObj = JSON.stringify(data);
    sessionStorage.setItem('userInfo', dataObj);
  }

  static saveUserType(data) {
    sessionStorage.setItem('userType', data);
  }

  static getUserInfo() {
    return (sessionStorage.getItem('userInfo') ? JSON.parse(sessionStorage.getItem('userInfo'))
      : {
        name: '',
        password: '',
        passwordConfirm: '',
        tel: '',
        email: '',
      });
  }

  static saveUserId(data) {
    const dataObj = this.getUserInfo();
    dataObj.id = data;
    this.saveUserInfo(dataObj);
  }

  static getUserType() {
    return sessionStorage.getItem('userType') ? sessionStorage.getItem('userType') : '';
  }

  static isUserAuthenticated() {
    return localStorage.getItem('token') !== null;
  }

  static deleteUserInfo() {
    sessionStorage.removeItem('userInfo');
    sessionStorage.removeItem('userType');
  }
}

export default Sign;
