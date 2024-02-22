const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
function validateRegister(
  name,
  surname,
  age,
  email,
  username,
  poosword,
  repossword
) {
  if (name.value.trim().length < 3) {
    alert("Name kiritilishi shart");
    name.focus();
    return false;
  }
  if (Number(name.value)) {
    alert("Name raqam bumasligi kerak");
    name.focus();
    return false;
  }
  if (surname.value.trim().length < 3) {
    alert("Surname kiritilishi shart");
    surname.focus();
    return false;
  }
  if (Number(surname.value)) {
    alert("Surname raqam bumasligi kerak");
    name.focus();
    return false;
  }
  if (!age.value) {
    alert("Age kiritilishi shart");
    age.focus();
    return false;
  }
  if (age.value < 0 || age.value > 200) {
    alert("Yosh bunaqa bumidi");
    age.focus();
    return false;
  }
  if (!Number(age.value)) {
    alert("age raqam bulishi shart");
    age.focus();
    return false;
  }
  if (email.value.trim().length < 3) {
    alert("Email kiritilishi shart");
    email.focus();
    return false;
  }
  if (!validateEmail(email.value)) {
    alert("Email notugri");
    email.focus();
    return false;
  }
  if (username.value.trim().length < 3) {
    alert("username kiritilishi shart");
    username.focus();
    return false;
  }
  if (poosword.value.trim().length < 4) {
    alert("poosword kiritilishi shart");
    poosword.focus();
    return false;
  }
  if (repossword.value.trim().length < 4) {
    alert("repossword kiritilishi shart");
    repossword.focus();
    return false;
  }
  if (poosword.value != repoosword.value) {
    alert("Poosword bilan Repoosword bir xil bulishi shart");
    poosword.focus();
    repoosword.value = "";
    return false;
  }
  let users = getData();
  if (users.length) {
    let isExist = users.some((user) => {
      return user.username == username.value;
    });

    if (isExist) {
      alert("Bunday username mavjud");
      return false;
    }
  }
  return true;
}
function validateLogin(username, poosword) {
  if (username.value.trim().length < 3) {
    alert("username kiritilishi shart");
    username.focus();
    return false;
  }
  if (poosword.value.trim().length < 4) {
    alert("poosword kiritilishi shart");
    poosword.focus();
    return false;
  }

  let users = getData();
  if (users.length) {
    let isExist = users.some((user) => {
      return user.username == username.value;
    });

    // if (isExist) {
    //   alert("Bunday username mavjud");
    //   return false;
    // }
  }
  return true;
}
function getData() {
  let data = [];
  if (localStorage.getItem("users")) {
    data = JSON.parse(localStorage.getItem("users"));
  }
  return data;
}
export { validateRegister, getData, validateLogin };
