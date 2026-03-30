class Password {
  constructor(value) {
    this.value = value;
  }

  changePassword(newPass) {
    this.value = newPass;
  }

  checkPassword() {
    console.log(`თქვენი ამჟამინდელი პაროლია: ${this.value}`);
    return this.value;
  }
}

const pass = new Password("Secret123");
pass.changePassword("NewPass");
pass.checkPassword();
