import { Person } from "./Person.js";
class Student extends Person {
  #_mathScore;
  #_phyScore;
  #_chemScore;
  constructor(
    accountID,
    fullname,
    email,
    address,
    type,
    mathScore,
    phyScore,
    chemScore
  ) {
    super(
      accountID,
      fullname,
      email,
     address,
     type
    );
    this.#_mathScore=mathScore
    this.#_phyScore=phyScore
    this.#_chemScore=chemScore
  }
  
  getAccountID() {
    return super.getAccountID();
  }
  setAccountID(accountID) {
    super.setAccountID(accountID);
  }
  getFullname() {
    return super.getFullName();
  }
  setFullname(fullname) {
    super.setFullName(fullname);
  }
  getEmail() {
    return super.getEmail();
  }
  setEmail(email) {
    super.setEmail(email);
  }
  getAddress() {
    return super.getAddress();
  }
  setAdress(address) {
    super.setAdress(address);
  }
  getMathScore()
  {
    return this.#_mathScore
  }
  setMathScore(mathScore)
  {
    this.#_mathScore=mathScore
  }
  getPhyScore()
  {
    return this.#_phyScore
  }
  setPhyScore(phyScore)
  {
    this.#_phyScore=phyScore
  }
  getChemScore()
  {
    return this.#_chemScore
  }
  setChemScore(chemScore)
  {
    this.#_chemScore=chemScore
  }
}

export {Student}