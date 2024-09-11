let cnt;

window.onload = function () {
  cnt = window.localStorage.getItem("counter");
  if (cnt == null) window.localStorage.setItem("counter", "0");
  let ind = window.localStorage.getItem("currentCounter");
  let myObj = JSON.parse(window.localStorage.getItem("client" + ind));
  document.getElementById("id_h1").innerHTML += myObj.name;
  window.sessionStorage.setItem("tempUser", myObj.name);
};


