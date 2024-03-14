import { Person } from "./Person.js";
class Employee extends Person {
  #_dayWork
  #_salaryPerDay
  constructor(
    accountID,
    fullname,
    email,
    address,
    type,
    dayWork,
    salaryPerDay
  ) {
    super(
      accountID,
      fullname,
      email,
      address,
      type
    );
    this.#_dayWork=dayWork
    this.#_salaryPerDay=salaryPerDay
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
  getDayWork()
  {
    return this.#_dayWork
  }
  setDayWork(dayWork)
  {
    this.#_dayWork=dayWork
  }
  getSalaryPerDay()
  {
    return this.#_salaryPerDay
  }
  setSalaryPerDay(salaryPerDay)
  {
    this.#_salaryPerDay=salaryPerDay
  }
}

export {Employee}