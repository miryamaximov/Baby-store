let i,
  k = 30,
  displayUser;
window.onload = function () {
  displayUser = window.sessionStorage.getItem("tempUser");
  document.getElementById("id_user").innerHTML += displayUser;
  for (let i = 0; i < 10; i++)
    document.getElementById(i + 1).src = arrProduct[k++].url;
};
