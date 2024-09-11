let displayUser;
window.onload = function () {
    displayUser = window.sessionStorage.getItem("tempUser");
    document.getElementById("id_user").innerHTML+=displayUser;
}