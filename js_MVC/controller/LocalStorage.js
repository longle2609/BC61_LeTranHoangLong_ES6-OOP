import { Student } from "../model/Student.js";
import { Customer } from "../model/Customer.js";
import { Employee } from "../model/Employee.js";
// Write to local
function wirteLocal(personList, localDB) {
    localStorage.setItem(
      localDB,
      JSON.stringify(personList)
    );
  }
  //read from local
  function readLocal(jsonData) {
    return JSON.parse(jsonData).map(function (item) {
        switch (item.type) {
            case "Học sinh": {
              return new Student(
                item.accountID,
                item.fullname,
                item.email,
                item.address,
                item.type,
                item.mathScore,
                item.phyScore,
                item.chemScore
              );
            }
            case "Nhân viên": {
              return new Employee(
                item.accountID,
                item.fullname,
                item.email,
                item.address,
                item.type,
                item.dayWork,
                item.salaryPerDay
              );
            }
            case "Khách hàng": {
              return new Customer(
                item.accountID,
                item.fullname,
                item.email,
                item.address,
                item.type,
                item.compName,
                item.invoiceUnit,
                item.rank
              );
            }
          }
    });
  }

export {wirteLocal,readLocal}
  