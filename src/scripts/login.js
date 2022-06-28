function firstAcessDefinePassword() {
  let password = document.getElementById("password");
  let confirmPassword = document.getElementById("confirmPassword");

  var users = JSON.parse(localStorage.getItem("users"));
  var currentUser = JSON.parse(localStorage.getItem("currentUser"));
  console.log(currentUser);
  users.splice(
    users.findIndex((user) => user.register == currentUser.register),
    1
  );

  currentUser.firstAcess = false;
  currentUser.password = password.value;

  users.push(currentUser);
  localStorage.removeItem("users");
  localStorage.removeItem("currentUser");
  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("currentUser", JSON.stringify(currentUser));

  if (currentUser.permission == "admin") {
    location.href = "../home/homeAdmin.html";
  } else {
    location.href = "../home/homeUser.html";
  }
}

function validateUser() {
  let database = JSON.parse(localStorage.getItem("users"));
  let register = document.getElementById("matricula").value;
  let password = document.getElementById("password").value;

  var currentUser;

  database.forEach((user) => {
    if (user.register == register && user.password == password) {
      currentUser = user;
    }
  });

  console.log(currentUser);

  if (currentUser != undefined) {
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    if (currentUser.firstAcess == true) {
      location.href = "./pages/loginScreen/firstLogin.html";
    } else {
      if (currentUser.permission == "admin") {
        location.href = "./pages/home/homeAdmin.html";
      } else {
        location.href = "./pages/home/homeUser.html";
      }
    }
  } else {
    const alertTrigger = document.getElementById("liveAlertBtn");
    if (alertTrigger) {
      alert("Usuário ou senha inválida! Tente novamente", "danger");
    }
  }
}

const alertPlaceholder = document.getElementById("liveAlertPlaceholder");

const alert = (message, type) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    "</div>",
  ].join("");

  alertPlaceholder.append(wrapper);
};
