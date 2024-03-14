import { Person } from "./Person.js";
class Customer extends Person {
  #_compName
  #_invoiceUnit
  #_rank
  constructor(
    accountID,
    fullname,
    email,
    address,
    type,
    compName,
    invoiceUnit,
    rank
  ) {
    super(
      accountID,
      fullname,
      email,
     address,
     type
    );
    this.#_compName=compName
    this.#_invoiceUnit=invoiceUnit
    this.#_rank=rank
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
  getCompName()
  {
    return this.#_compName
  }
  setCompName(compName)
  {
    this.#_compName=compName
  }
  getInvoiceUnit()
  {
    return this.#_invoiceUnit
  }
  setInvoiceUnit(invoiceUnit)
  {
    this.#_invoiceUnit=invoiceUnit
  }
  getRank()
  {
    return this.#_rank
  }
  setRank(rank)
  {
    this.#_rank=rank
  }
}

export {Customer}