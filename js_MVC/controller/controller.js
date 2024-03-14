import {
  showMessage,
  kiemTraRong,
  kiemTraEmail,
  kiemTraChuoi,
  kiemTraDoDai,
  kiemTraSo,
} from "../utils/validate.js";
import { getEle } from "../utils/utils.js";
import { Student } from "../model/Student.js";
import { Customer } from "../model/Customer.js";
import { Employee } from "../model/Employee.js";
function resetForm() {
  getEle("#tknv").value = "";
  getEle("#name").value = "";
  getEle("#email").value = "";
  getEle("#diachi").value = "";
  renderSelectedType("");
  getEle("#loaiNguoiDung").value = "Loại người dùng";
}
function clearFormNoti() {
  showMessage(`#tbTKNV`, "");
  showMessage(`#tbTen`, "");
  showMessage(`#tbDiaChi`, "");
  showMessage(`#tbEmail`, "");
  renderSelectedType("");
  showMessage(`#tbLoaiNguoiDung`, "");
}
function validateFormData(accountID, fullname, email, address, type) {
  let flag = true;

  //accountID
  flag &=
    kiemTraRong(accountID, `#tbTKNV`, "Vui lòng nhập tài khoản") &&
    kiemTraDoDai(
      accountID,
      4,
      6,
      `#tbTKNV`,
      "Vui lòng nhập tài khoản với độ dài từ 4 đến 6 ký số"
    );

  //fullname
  flag &=
    kiemTraRong(fullname, `#tbTen`, "Vui lòng nhập họ và tên") &&
    kiemTraChuoi(fullname, `#tbTen`, "Vui lòng nhập tên chỉ có chữ");

  //email
  flag &=
    kiemTraRong(email, `#tbEmail`, "Vui lòng nhập email") &&
    kiemTraEmail(email, `#tbEmail`, "Vui lòng nhập email đúng định dạng");

  //address
  flag &= kiemTraRong(address, `#tbDiaChi`, "Vui lòng nhập địa chỉ");

  //type
  if (type === "Loại người dùng") {
    showMessage(`#tbLoaiNguoiDung`, "Vui lòng chọn loại người dùng");
    flag &= false;
  } else {
    switch (type) {
      case "Học sinh": {
        const mathScore = getEle("#mathScore").value;
        const phyScore = getEle("#phyScore").value;
        const chemScore = getEle("#chemScore").value;
        const scoreNotiMess1 = "Vui lòng nhập điểm với định dạng số";
        const scoreNotiMess2 = "Vui lòng nhập điểm từ 0 đến 10";
        //mathScore
        if (kiemTraSo(mathScore, "#tbMathScore", scoreNotiMess1)) {
          if (mathScore < 0 || mathScore > 10) {
            showMessage("#tbMathScore", scoreNotiMess2);
            flag &= false;
          }
        } else {
          flag &= false;
        }
        //phyScore
        if (kiemTraSo(phyScore, "#tbPhyScore", scoreNotiMess1)) {
          if (phyScore < 0 || phyScore > 10) {
            showMessage("#tbPhyScore", scoreNotiMess2);
            flag &= false;
          }
        } else {
          flag &= false;
        }
        //chemScore
        if (kiemTraSo(chemScore, "#tbChemScore", scoreNotiMess1)) {
          if (chemScore < 0 || chemScore > 10) {
            showMessage("#tbChemScore", scoreNotiMess2);
            flag &= false;
          }
        } else {
          flag &= false;
        }

        break;
      }
      case "Nhân viên": {
        const dayWork = getEle("#dayWork").value;
        const salaryPerDay = getEle("#salaryPerDay").value;
        //dayWork
        if (
          kiemTraSo(
            dayWork,
            "#tbDayWork",
            "Vui lòng nhập số ngày làm việc với định dạng số"
          )
        ) {
          if (dayWork < 1 || dayWork > 45) {
            showMessage("#tbDayWork", "Số ngày làm việc phải từ 1 đến 45 ngày");
            flag &= false;
          }
        } else {
          flag &= false;
        }
        //salary per day
        if (
          kiemTraSo(
            salaryPerDay,
            "#tbSalaryPerDay",
            "Vui lòng nhập lương theo ngày với định dạng số"
          )
        ) {
          if (salaryPerDay < 300000 || salaryPerDay > 1000000) {
            showMessage(
              "#tbSalaryPerDay",
              "Lương theo ngày phải từ 300 000 đến 1 000 000"
            );
            flag &= false;
          }
        } else {
          flag &= false;
        }
        break;
      }
      case "Khách hàng": {
        const compName = getEle("#compName").value;
        const invoiceUnit = getEle("#invoiceUnit").value;
        const rank = getEle("#rank").value;
        //comp Name
        flag &= kiemTraRong(
          compName,
          `#tbCompName`,
          "Vui lòng nhập tên công ty"
        );

        //invoice Unit
        if (
          kiemTraSo(
            invoiceUnit,
            "#tbInvoiceUnit",
            "Vui lòng nhập lương trị giá hóa đơn với định dạng số"
          )
        ) {
          if (invoiceUnit < 200000 || invoiceUnit > 3000000) {
            showMessage(
              "#tbInvoiceUnit",
              "Trị giá hóa đơn phải từ 200 000 đến 3 000 000"
            );
            flag &= false;
          }
        } else {
          flag &= false;
        }

        //rank
        flag &= kiemTraRong(rank, `#tbRank`, "Vui lòng nhập đánh giá");

        break;
      }
      default:
        break;
    }
  }

  return flag;
}


function retriveFormData() {
  const accountID = getEle("#tknv").value;
  const fullname = getEle("#name").value;
  const email = getEle("#email").value;
  const address = getEle("#diachi").value;
  const type = getEle("#loaiNguoiDung").value;
  //validate
  if (!validateFormData(accountID, fullname, email, address, type)) {
    return null;
  }
  switch (type) {
    case "Học sinh": {
      const mathScore = getEle("#mathScore").value;
      const phyScore = getEle("#phyScore").value;
      const chemScore = getEle("#chemScore").value;
      return new Student(
        accountID,
        fullname,
        email,
        address,
        type,
        mathScore,
        phyScore,
        chemScore
      );
    }
    case "Nhân viên": {
      const dayWork = getEle("#dayWork").value;
      const salaryPerDay = getEle("#salaryPerDay").value;
      return new Employee(
        accountID,
        fullname,
        email,
        address,
        type,
        dayWork,
        salaryPerDay
      );
    }
    case "Khách hàng": {
      const compName = getEle("#compName").value;
      const invoiceUnit = getEle("#invoiceUnit").value;
      const rank = getEle("#rank").value;
      return new Customer(
        accountID,
        fullname,
        email,
        address,
        type,
        compName,
        invoiceUnit,
        rank
      );
    }
  }
}
function renderPersonList(PersonList) {
  let contentHTML = "";

  PersonList.forEach((element) => {
    let contentTr = `
        <tr>
      <td>${element.getAccountID()}</td>
      <td>${element.getFullName()}</td>
      <td>${element.getEmail()}</td>
      <td>${element.getAddress()}</td>
      <td>${element.getType()}</td>
     
      <td>
      <button class="btn btn-warning" onclick="editPerson(
        '${PersonList.indexOf(element)}'
      )">Sửa</button>
      <button class="btn btn-danger" onclick="viewDetailPerson('${PersonList.indexOf(
        element
      )}')">Xem chi tiết</button>
    </td>
        </tr>
        `;
    contentHTML += contentTr;
  });
  getEle("#tableDanhSach").innerHTML = contentHTML;
}

function renderSelectedType(typeName) {
  let formObj = document.querySelectorAll(`#form>.form-group`);
  let formLength = formObj.length;
  const accountID = getEle("#tknv").value;
  const name = getEle("#name").value;
  const email = getEle("#email").value;
  const address = getEle("#diachi").value;
  if (formLength > 5) {
    for (let index = 5; index <= formLength; index++) {
      formLength = document.querySelectorAll(`#form>.form-group`).length;
      formObj[index].remove();
    }
  }
  let contentHTML = "";
  switch (typeName) {
    case "Học sinh": {
      contentHTML = `
    <div id='studentType' class="form-group">
    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text"><i class="fa fa-user"></i></span>
      </div>
      <input type="text"  id="mathScore" class="form-control input-sm"
        placeholder="Điểm toán">
    </div>

    <span class="sp-thongbao" id="tbMathScore"></span>
  </div>
  <div id='studentType' class="form-group">
  <div class="input-group">
    <div class="input-group-prepend">
      <span class="input-group-text"><i class="fa fa-user"></i></span>
    </div>
    <input type="text"  id="phyScore" class="form-control input-sm"
      placeholder="Điểm Lý">
      </div>
  <span class="sp-thongbao" id="tbPhyScore"></span>
</div>
</div>
<div id='studentType' class="form-group">
  <div class="input-group">
    <div class="input-group-prepend">
      <span class="input-group-text"><i class="fa fa-user"></i></span>
    </div>
    <input type="text"  id="chemScore" class="form-control input-sm"
      placeholder="Điểm Hóa">
      </div>
  <span class="sp-thongbao" id="tbChemScore"></span>
  </div>
  </div>
    `;
      break;
    }
    case "Nhân viên": {
      contentHTML = `
    <div id='employeeType' class="form-group">
    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text"><i class="fa fa-user"></i></span>
      </div>
      <input type="text"  id="dayWork" class="form-control input-sm"
        placeholder="Số ngày làm việc">
    </div>

    <span class="sp-thongbao" id="tbDayWork"></span>
  </div>
  <div id='employeeType' class="form-group">
  <div class="input-group">
    <div class="input-group-prepend">
      <span class="input-group-text"><i class="fa fa-user"></i></span>
    </div>
    <input type="text"  id="salaryPerDay" class="form-control input-sm"
      placeholder="Lương theo ngày">

  <span class="sp-thongbao" id="tbSalaryPerDay"></span>
</div>
</div>
    `;
      break;
    }
    case "Khách hàng": {
      contentHTML = `
    <div id='cusType' class="form-group">
    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text"><i class="fa fa-user"></i></span>
      </div>
      <input type="text"  id="compName" class="form-control input-sm"
        placeholder="Tên công ty">
    </div>

    <span class="sp-thongbao" id="tbCompName"></span>
  </div>
  <div id='cusType' class="form-group">
  <div class="input-group">
    <div class="input-group-prepend">
      <span class="input-group-text"><i class="fa fa-user"></i></span>
    </div>
    <input type="text"  id="invoiceUnit" class="form-control input-sm"
      placeholder="Trị giá hóa đơn">
      </div>
  <span class="sp-thongbao" id="tbInvoiceUnit"></span>
</div>
</div>
<div id='cusType' class="form-group">
  <div class="input-group">
    <div class="input-group-prepend">
      <span class="input-group-text"><i class="fa fa-user"></i></span>
    </div>
    <input type="text"  id="rank" class="form-control input-sm"
      placeholder="Đánh giá">
      </div>
  <span class="sp-thongbao" id="tbRank"></span>
  </div>
  </div>
    `;
      break;
    }

  }
  //re-render
  getEle("#form").innerHTML += contentHTML;
  getEle("#tknv").value = accountID;
  getEle("#name").value = name;
  getEle("#email").value = email;
  getEle("#diachi").value = address;
  getEle("#loaiNguoiDung").value = typeName;

}

export {
  resetForm,
  clearFormNoti,
  retriveFormData,
  renderPersonList,
  renderSelectedType,
};
