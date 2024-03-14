import {
  resetForm,
  clearFormNoti,
  retriveFormData,
  renderPersonList,
  renderSelectedType,
} from "./controller/controller.js";
import {
  getEle,
  localStorageList,
  findIndexOfPerson,
  findPersonByType,
  deletePersonByID,
} from "./utils/utils.js";
import { kiemTraTrung } from "./utils/validate.js";
import { wirteLocal, readLocal } from "./controller/LocalStorage.js";
let personList = [];
const Person_Local = "Person_Local";
//read from local
var jsonData = localStorage.getItem(Person_Local);
if (jsonData != null) {
  personList = readLocal(jsonData);
  //render
  renderPersonList(personList);
}
//handle selected type
window.loaiNguoiDungBtn = () => {
  const type = getEle("#loaiNguoiDung").value;
  renderSelectedType(type);
};
//add new Person
getEle("#btnThem").addEventListener("click", () => {
  $("#myModal").modal("toggle");
  clearFormNoti();
  resetForm();
  getEle("#tknv").disabled = false;
  getEle("#btnThemNV").disabled = false;
  getEle("#btnCapNhat").disabled = true;
});

getEle("#btnThemNV").addEventListener("click", () => {
  //validate
  const formObj = retriveFormData();
  if (formObj === null) {
    return;
  }
  if (
    !kiemTraTrung(
      formObj.getAccountID(),
      personList,
      `#tbTKNV`,
      "Tài khoản đã tồn tại, vui lòng chọn tên tài khoản khác"
    )
  ) {
    return;
  }
  personList.push(formObj);
  //write to local
  const localList = localStorageList(personList);
  wirteLocal(localList, Person_Local);
  //render
  $("#myModal").modal("hide");
  renderPersonList(personList);
});

//edit Person
window.editPerson = (index) => {
  $("#myModal").modal("toggle");
  getEle("#tknv").disabled = true;
  getEle("#btnThemNV").disabled = true;
  getEle("#btnCapNhat").disabled = false;
  clearFormNoti();
  resetForm();
  const resObj = personList[index];
  getEle("#tknv").value = resObj.getAccountID();
  getEle("#name").value = resObj.getFullName();
  getEle("#email").value = resObj.getEmail();
  getEle("#diachi").value = resObj.getAddress();
  getEle("#loaiNguoiDung").value = resObj.getType();
  renderSelectedType(resObj.getType());
  switch (resObj.getType()) {
    case "Học sinh": {
      getEle("#mathScore").value = resObj.getMathScore();
      getEle("#phyScore").value = resObj.getPhyScore();
      getEle("#chemScore").value = resObj.getChemScore();
      break;
    }
    case "Nhân viên": {
      getEle("#dayWork").value = resObj.getDayWork();
      getEle("#salaryPerDay").value = resObj.getSalaryPerDay();
      break;
    }
    case "Khách hàng": {
      getEle("#compName").value = resObj.getCompName();
      getEle("#invoiceUnit").value = resObj.getInvoiceUnit();
      getEle("#rank").value = resObj.getRank();
    }
  }
};

//update Person
getEle("#btnCapNhat").addEventListener("click", () => {
  //validate
  const formObj = retriveFormData();
  if (formObj === null) {
    return;
  }
  const index = findIndexOfPerson(formObj, personList);
  personList[index] = formObj;
  //update local
  const localList = localStorageList(personList);
  wirteLocal(localList, Person_Local);
  $("#myModal").modal("hide");
  renderPersonList(personList);
});

//view detail Person

window.viewDetailPerson = (index) => {
  const resObj = personList[index];
  switch (resObj.getType()) {
    case "Học sinh": {
      let grade =
        (parseInt(resObj.getMathScore()) +
          parseInt(resObj.getPhyScore()) +
          parseInt(resObj.getChemScore())) /
        3;
      grade = grade.toFixed(2);
      alert(`Điểm trung bình của bạn là: ${grade}`);
      break;
    }
    case "Nhân viên": {
      let totalSalary = resObj.getSalaryPerDay() * resObj.getDayWork();
      alert(
        `Tổng lương của bạn là: ${totalSalary.toLocaleString("it-IT", {
          style: "currency",
          currency: "VND",
        })}`
      );
      break;
    }
    case "Khách hàng": {
      let rank = resObj.getRank();
      alert(`Đánh giá của bạn dành cho chúng tôi là: ${rank}`);
      break;
    }
  }
};

//sort by full name
getEle("#sortByFullNameBtn").addEventListener("click", () => {
  personList.sort(function (a, b) {
    let x = a.getFullName().toLowerCase();
    let y = b.getFullName().toLowerCase();
    if (x < y) {
      return -1;
    }
    if (x > y) {
      return 1;
    }
    return 0;
  });
  renderPersonList(personList);
});

//find Person
getEle("#btnTimNV").addEventListener("click", () => {
  const findQuerry = getEle("#searchName").value;
  const foundList = findPersonByType(findQuerry, personList);
  if (foundList.length == 0) {
    alert("Không tìm thấy người dùng theo yêu cầu");
  } else renderPersonList(foundList);
});

//del Person
getEle("#btnXoaNV").addEventListener("click", () => {
  const delID = getEle("#delID").value;
  deletePersonByID(delID, personList);
  //update to local
  const localList = localStorageList(personList);
  wirteLocal(localList, Person_Local);
  renderPersonList(personList);
});
