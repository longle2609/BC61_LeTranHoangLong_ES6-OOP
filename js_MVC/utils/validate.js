import { getEle } from "./utils.js";
function showMessage(idTag, message) {
  getEle(idTag).innerHTML = message;
  getEle(idTag).style.display = "block";
}

function kiemTraRong(value, idTag, message) {
  if (value.trim() == "") {
    showMessage(idTag, message);
    return false;
  } else {
    showMessage(idTag, "");
    return true;
  }
}

function kiemTraEmail(value, idTag, message) {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  var isEmail = re.test(value);
  if (isEmail) {
    showMessage(idTag, "");
    return true;
  } else {
    showMessage(idTag, message);
    return false;
  }
}

function kiemTraChuoi(value, idTag, message) {
  const re =
    /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/g;

  var isString = re.test(value);
  if (isString) {
    showMessage(idTag, "");
    return true;
  } else {
    showMessage(idTag, message);
    return false;
  }
}

function kiemTraDoDai(value, min, max, idTag, message) {
  var length = value.length;
  if (length >= min && length <= max) {
    showMessage(idTag, "");
    return true;
  } else {
    showMessage(idTag, message);
    return false;
  }
}

function kiemTraSo(value, idTag, message) {
  const re = /^\d+$/;

  var isString = re.test(value);
  if (isString) {
    showMessage(idTag, "");
    return true;
  } else {
    showMessage(idTag, message);
    return false;
  }
}

function kiemTraTrung(id, employeeList, idTag, message) {
  let viTri = employeeList.findIndex(function (element) {
    return element.getAccountID() == id;
  });
  if (viTri != -1) {
    //  tìm thấy
    showMessage(idTag, message);
    return false;
  } else {
    showMessage(idTag, "");
    return true;
  }
}

export {
  showMessage,
  kiemTraRong,
  kiemTraEmail,
  kiemTraChuoi,
  kiemTraDoDai,
  kiemTraSo,
  kiemTraTrung,
};
