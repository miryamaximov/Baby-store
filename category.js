let idObj, indCurrClient, changeUser;
function  addItem(indexInArray, inputId, btnId) {
    if (document.getElementById(inputId).value === "" || document.getElementById(inputId).value<=0)
  {
    alert("בחר כמות הגיונית לפני הוספה לסל!");
    return;
  }
  idObj = arrProduct[indexInArray].id; //the id of the product
  indCurrClient = window.localStorage.getItem("currentCounter"); //id of the cuurent client
  changeUser = window.localStorage.getItem("client" + indCurrClient);
  changeUser = JSON.parse(changeUser);
  changeUser.map[idObj] = (changeUser.map[idObj] || 0)+ parseInt(document.getElementById(inputId).value);
  window.localStorage.setItem("client" + indCurrClient, JSON.stringify(changeUser) );
  document.getElementById(btnId).innerHTML = "✔";
}

function scrollToAll(){
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  }  );
}
