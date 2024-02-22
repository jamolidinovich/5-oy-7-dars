import { getData } from "./functions.js";
const name = document.getElementById("name");
const surname = document.getElementById("surname");
const age = document.getElementById("age");
const email = document.getElementById("email");
const username = document.getElementById("username");
const poosword = document.getElementById("poosword");
const tun = document.getElementById("tun");
let fullUrel = window.location.href;
let index = fullUrel.search("pages");
let baseUrl = fullUrel.substring(0, index);

document.addEventListener("DOMContentLoaded", function () {
  let users = getData();
  let activeUser = localStorage.getItem("activeUser");
  if (activeUser) {
    let user = users.find((el) => {
      return el.username == activeUser;
    });
    if (user) {
      name.innerHTML = user.name;
      surname.innerHTML = user.surname;
      age.innerHTML = user.age;
      email.innerHTML = user.email;
      username.innerHTML = user.username;
      poosword.innerHTML = user.poosword;
    } else {
      window.location.assign(`${baseUrl}/pages/login.html`);
    }
  } else {
    window.location.assign(`${baseUrl}/pages/login.html`);
  }
});

tun &&
  tun.addEventListener("click", () => {
    // document.body.classList.add("tun");
    // document.body.classList.remove("tun");
    if (tun.innerHTML == "Tun") {
      tun.innerHTML = "Kun";
    } else {
      tun.innerHTML = "Tun";
    }
    document.body.classList.toggle("tun");
  });
