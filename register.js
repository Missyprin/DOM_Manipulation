const registerPage = document.createElement("section");
registerPage.id = "register";
let users = [
  {
    firstname: "Jhon Doe",
    lastname: "Crux",
    email: "johndoe@gmail.com",
    password: "password",
  },
];

const registrationForm = () => {
  const firstname = document.createElement("input");
  const lastname = document.createElement("input");
  const email = document.createElement("input");
  const password = document.createElement("input");
  const confirmPassword = document.createElement("input");
  const submitButton = document.createElement("input");
  const form = document.createElement("form");

  const labelEmail = document.createElement("label");
  const labelFirstname = document.createElement("label");
  const labelLastname = document.createElement("label");
  const labelPassword = document.createElement("label");
  const labelConfirmPassword = document.createElement("label");

  labelFirstname.innerText = "Firstname: ";
  labelFirstname.setAttribute("for", "Email");
  labelLastname.innerText = "Lastname:";
  labelLastname.setAttribute("for", "lastname");
  form.method = "POST";

  firstname.type = "text";
  firstname.name = "firstname";
  lastname.type = "text";
  lastname.name = "lastname";
  email.type = "email";
  email.name = "email";
  password.type = "password";
  password.name = "password";
  confirmPassword.type = "password";
  confirmPassword.name = "confirm_password";
  submitButton.type = "submit";

  form.appendChild(labelFirstname);
  form.appendChild(firstname);
  form.appendChild(labelLastname);
  form.appendChild(lastname);
  form.appendChild(password);
  form.appendChild(confirmPassword);
  registerPage.appendChild(form);

  return form;
};

const validateUser = (user) => {};

const registerUser = (user) => {};

export { users, registrationForm, registerPage, validateUser, registerUser };