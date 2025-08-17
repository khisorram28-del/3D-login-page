function login() {
  // Input fields se values lo
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  // Dummy credentials (test purpose)
  let correctUser = "mukesh74";
  let correctPass = "12345";

  if (user === correctUser && pass === correctPass) {
    alert("Login Successful 🎉");
  } else {
    alert("Invalid Username or Password ❌");
  }
}
