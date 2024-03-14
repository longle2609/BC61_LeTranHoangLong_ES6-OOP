function getEle(querryID) {
  return document.querySelector(querryID);
}

function localStorageList(personList) {
  let resList = [];
  personList.forEach((item) => {
    let resObj = {
      accountID: item.getAccountID(),
      fullname: item.getFullName(),
      email: item.getEmail(),
      address: item.getAddress(),
      type: item.getType(),
    };
    switch (item.getType()) {
      case "Học sinh": {
        resObj.mathScore=item.getMathScore();
        resObj.phyScore=item.getPhyScore();
        resObj.chemScore=item.getChemScore();
        break;
      }
      case "Nhân viên": {
        resObj.dayWork=item.getDayWork();
        resObj.salaryPerDay=item.getSalaryPerDay();
        break;
      }
      case "Khách hàng": {
        resObj.compName= item.getCompName();
        resObj.invoiceUnit= item.getInvoiceUnit();
        resObj.rank = item.getRank();
        break;
      }
    }
    resList.push(resObj);
  });
  return resList;
}

function findIndexOfPerson(searchObj, PersonList) {
  return PersonList.indexOf(
    PersonList.find((ele) => {
      return ele.getAccountID() == searchObj.getAccountID();
    })
  );
}

function findPersonByType(findQuerry, PersonList) {
  findQuerry=findQuerry.trim().toLowerCase()
  return PersonList.filter((ele) => {
    return ele.getType().trim().toLowerCase() == findQuerry;
  });
}

function deletePersonByID(id,PersonList)
{
  const index= PersonList.indexOf(
    PersonList.find((ele) => {
      return ele.getAccountID() == id;
    })
  );
  if (index==-1) {
    alert('Không tìm thấy người dùng, vui lòng kiểm tra lại mã!')
    return;
  }
  PersonList.splice(index, 1);
}

export { getEle, localStorageList,findIndexOfPerson,findPersonByType,deletePersonByID };
