import { validateRegister, getData } from "./functions.js";
const name = document.getElementById("name");
const surname = document.getElementById("surname");
const age = document.getElementById("age");
const email = document.getElementById("email");
const username = document.getElementById("username");
const poosword = document.getElementById("poosword");
const repoosword = document.getElementById("repoosword");
const button = document.getElementById("button");
const form = document.getElementById("form");
const tun = document.getElementById("tun");

button &&
  button.addEventListener("click", function (e) {
    e.preventDefault();
    const isValid = validateRegister(
      name,
      surname,
      age,
      email,
      username,
      poosword,
      repoosword
    );
    if (isValid) {
      const user = {
        name: name.value,
        surname: surname.value,
        age: age.value,
        email: email.value,
        username: username.value,
        poosword: poosword.value,
      };
      let users = getData();
      users.push(user);
      localStorage.setItem("users", JSON.stringify(users));
      form.reset();
      let index = window.location.href.search("pages");
      let baseUrl = window.location.href.substring(0, index);

      window.location.assign(`${baseUrl}pages/login.html`);
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
