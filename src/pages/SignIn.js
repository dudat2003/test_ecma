import axios from "axios";
import { router, useEffect } from "../lib";

const SignIn = () => {
  useEffect(() => {
    document.querySelector("#login-form").addEventListener("submit", (e) => {
      e.preventDefault();
      const user = {
        username: document.querySelector("#username").value,
        pass: document.querySelector("#pass").value,
      };
      if (user.username == "" || user.pass == "") {
        alert("Not enough data");
      } else {
        axios.get("http://localhost:3000/users")
          .then(function (response) {
            const users = response.data;
            const username = user.username;
            const pass = user.pass;
            const foundUser = users.find((user) => user.username === username && user.pass === pass);

            if (foundUser) {

              alert("Sign in complete!");
              router.navigate("/products");
            } else {

              alert("Username or Password is incorrect!");
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      }

    });
  });
  return /*html*/ ` 
  <div class="container">
  <h1>Sign In</h1>
  <form action="" id="login-form">
      <div class="mb-3"><input type="text" placeholder="Username" name="" id="username" class="form-control"></div>
      <div class="mb-3"><input type="password" placeholder="Pass" name="" id="pass" class="form-control"></div>
      <button class="btn btn-danger" type="submit">Submit</button>
  </form>
</div>`;
};

export default SignIn;
