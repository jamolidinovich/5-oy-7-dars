import { validateLogin, getData } from "./functions.js";

const username = document.getElementById("username");
const poosword = document.getElementById("poosword");
const button = document.getElementById("button");
const form = document.getElementById("form");
const error = document.getElementById("error");
const tun = document.getElementById("tun");

button &&
  button.addEventListener("click", function (e) {
    e.preventDefault();
    const isValid = validateLogin(username, poosword);
    if (isValid) {
      let users = getData();
      let user = users.find((el) => {
        return el.username == username.value && el.poosword == poosword.value;
      });
      if (user?.name) {
        let fullUrel = window.location.href;
        let index = fullUrel.search("pages");
        let baseUrl = fullUrel.substring(0, index);
        localStorage.setItem("activeUser", username.value);
        window.location.assign(`${baseUrl}/index.html`);
        error.style.display = "none";
      } else {
        // alert("Parol eki username notugri");
        error.classList = "d-block text-danger";
        error.innerHTML = "Parol eki username notugri";
      }
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
