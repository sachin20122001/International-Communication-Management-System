let users = [
  {
    name: "dhananjay",
    email: "dhananjay123@gmail.com",
    password: "1234",
  },
];

const signInForm = document.querySelector(".sign-in-form");

signInForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // console.log("heylo");

  const signInEmail = document.querySelector(".signin-email");
  const signInPassword = document.querySelector(".signin-password");

  const email = signInEmail.value;
  const password = signInPassword.value;

  let flag = 0;

  users.forEach((user) => {
    if (user.password == password && user.email == email) {
      flag = 1;
    }
  });

  if (flag) {
   alert("Login Successful");
    location.href = "../../Vansh/main_page.html";
  } else {
    alert("Wrong Credentials!");
  }
});

const signUpForm = document.querySelector(".sign-up-form");

signUpForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.querySelector(".signup-email").value;
  const name = document.querySelector(".signup-name").value;
  const password = document.querySelector(".signup-password").value;

  let isEmailUsed = false;
  users.forEach((user) => {
    if (user.email == email) {
      isEmailUsed = true;
    }
  });

  if (isEmailUsed) {
    alert("Email already in use!");
  } else {
    let user = {
      name,
      email,
      password,
    };

    users.push(user);

    // users.forEach((user) => {
    //   console.log(user);
    // });

   alert("Sign-up Successful");
    location.href = "../../Vansh/main_page.html";
  }
});

// location.href = "../dashboard/index.html";
