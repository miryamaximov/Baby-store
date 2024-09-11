function editDetailsForm1(name_id, email_id, password_id, lan_id) {
  cnt = window.localStorage.getItem("counter");
  cnt++;
  window.localStorage.setItem("currentCounter", cnt);
  window.localStorage.setItem("counter", cnt);

  let client = {
    name: document.getElementById(name_id).value,
    email: document.getElementById(email_id).value,
    password: document.getElementById(password_id).value,
    lan: document.getElementById(lan_id).value,
    map: new Map(),
  };

  let JSONclient = JSON.stringify(client);
  localStorage.setItem("client" + cnt, JSONclient);
}
