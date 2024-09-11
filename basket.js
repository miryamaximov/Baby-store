function returnPrice(productId) {
  for (let i = 0; i < arrProduct.length; i++)
    if (arrProduct[i].id == productId) return arrProduct[i].price;
}

function returnSrc(productId) {
  for (let i = 0; i < arrProduct.length; i++)
    if (arrProduct[i].id == productId) return arrProduct[i].url;
}

function returnName(productId) {
  for (let i = 0; i < arrProduct.length; i++)
    if (arrProduct[i].id == productId) return arrProduct[i].name;
}

let currUser;

//פונקציה למחיקת פריט מהסל
function deleteFromBasket(idProduct) {
  currUser = JSON.parse(
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

  currUser.map.forEach((value, key) => {
    if (key === idProduct) {
      if (value - 1 == 0) currUser.map.delete(key);
      else currUser.map[key] = value - 1;
    } else currUser.map[key] = value;
  });

  localStorage.setItem(
    "client" + localStorage.getItem("currentCounter"),
    JSON.stringify(currUser)
  );
  location.reload();
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("id_user").innerHTML +=
    window.sessionStorage.getItem("tempUser");
  let count = window.localStorage.getItem("currentCounter");

  currUser = JSON.parse(
    window.localStorage.getItem("client" + count),
    (key, value) => {
      if (key === "map") {
        return new Map(Object.entries(value));
      }
      return value;
    }
  );

  let sum = 0;
  //לולאה שרצה על כל המפ של הלקוח הנוכחי
  currUser.map.forEach((value, key) => {
    sum += returnPrice(key) * value;
    var myDiv = document.createElement("div");
    var myImg = document.createElement("img");
    var desc = document.createElement("div");
    var name = document.createElement("h4");
    var amount = document.createElement("h4");
    var currPrice = document.createElement("h4");
    var del = document.createElement("button");
    myImg.src = returnSrc(key);
    myImg.style.width = "150px";
    myImg.style.margin = "16px";
    myDiv.style.border = "2px solid rgb(241, 207, 223)";
    myDiv.style.position = "relative";
    desc.style.maxWidth = "400px";
    desc.style.height = "auto";
    desc.style.position = "absolute";
    desc.style.top = "-5px";
    desc.style.left = "350px";
    desc.style.fontFamily =
      "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif";
    name.innerHTML = "your product: " + returnName(key);
    amount.innerHTML = "amount: " + value;
    currPrice.innerHTML =
      "all price for this product: " + returnPrice(key) * value;
    del.innerHTML = "❌ delete";
    del.style.border = "none";
    del.style.background = "none";
    del.style.cursor = "pointer";
    del.addEventListener("click", function () {
      deleteFromBasket(key);
    });
    del.style.position = "absolute";
    del.style.left = "750px";
    del.style.top = "50%";
    del.style.fontSize = "large";
    desc.appendChild(name);
    desc.appendChild(amount);
    desc.appendChild(currPrice);
    myDiv.appendChild(del);
    myDiv.appendChild(desc);
    myDiv.appendChild(myImg);
    document.getElementById("divBasket").appendChild(myDiv);
  });

  document.getElementById("final").innerHTML += sum;
});

function pay() {
  let temp = 0;
  currUser.map.forEach((value, key) => {
    temp += returnPrice(key) * value;
  });
  if (temp === 0) {
    alert("אתה צריך להוסיף מוצרים לסל שלך!");
    window.location.href = "first.html";
  } else {
    window.location.href = "pay.html";
  }
}
