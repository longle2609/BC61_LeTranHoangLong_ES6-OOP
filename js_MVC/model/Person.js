class Person {
  #_accountID;
  #_fullname;
  #_email;
  #_address;
  #_type;
  constructor(
    accountID,
    fullname,
    email,
    address,
    type,
  ) {
    this.#_accountID = accountID;
    this.#_fullname = fullname;
    this.#_email = email;
    this.#_address=address
    this.#_type=type
  }

  getAccountID() {
    return this.#_accountID;
  }
  setAccountID(accountID) {
    this.#_accountID = accountID;
  }
  getFullName() {
    return this.#_fullname;
  }
  setFullName(fullname) {
    this.#_fullname = fullname;
  }
  getEmail() {
    return this.#_email;
  }
  setEmail(email) {
    this.#_email = email;
  }
  getAddress()
  {
    return this.#_address
  }
  setAdress(address)
  {
    this.#_address=address
  }
  getType()
  {
    return this.#_type
  }
  setType(type)
  {
    this.#_type=type
  }
}

export {Person}