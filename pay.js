window.onload = function () {
  document.getElementById("id_user").innerHTML +=
    window.sessionStorage.getItem("tempUser");
};

function contin() {
  window.location.href = "first.html";
}

function deleteMap() {
  let currUser = JSON.parse(
    window.localStorage.getItem(
      "client" + localStorage.getItem("currentCounter")
    ),
    (key, value) => {
      if (key === "map") {
        return new Map(Object.entries(value));
      }
      return value;
    }
  );
  currUser.map.clear();
  window.localStorage.setItem(
    "client" + localStorage.getItem("currentCounter"),
    JSON.stringify(currUser)
  );
}
