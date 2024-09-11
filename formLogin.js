function editDetailsForm2(name_id, password_id) {
  let i;
  let myObj = {};
  let name_ = document.getElementById(name_id).value;
  let password_ = document.getElementById(password_id).value;
  let cnt = window.localStorage.getItem("counter");
  for (i = 1; i <= cnt; i++) {
    myObj = JSON.parse(window.localStorage.getItem("client" + i));
    if (myObj.name == name_ && myObj.password == password_) break;
  }

  if (i > cnt) {
    alert("You need to sign up!!");
    window.open("formSignup.html");
  } else {
    window.localStorage.setItem("currentCounter", i);
  }
}
