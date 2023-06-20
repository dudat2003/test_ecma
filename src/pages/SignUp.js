import axios from "axios";
import { router, useEffect } from "../lib";

const SignUp = () => {
  useEffect(() => {
    document.querySelector("#signup-form").addEventListener("submit", (e) => {
      e.preventDefault();
      const user = {
        username: document.querySelector("#username").value,
        pass: document.querySelector("#pass").value,
      };
      if (user.username == "" || user.pass == "") {
        alert("Not enough data");
      } else {
        axios.post(`http://localhost:3000/users`, user)
          .then(function (response) {
            if (response.status === 201) {
              alert("Sign up complete!");
              router.navigate("/signin");
            } else {
              alert("Failed to sign up your account!");
            }
          }).catch(function (error) {
            console.log(error);
          });
      }
    });
  });
  return /*html*/ ` 
        <div class="container">
          <h1>Sign Up</h1>
          <form action="" id="signup-form">
              <div class="mb-3"><input type="text" placeholder="Name"  id="username" class="form-control"></div>
              <div class="mb-3"><input type="password" placeholder="Pass" id="pass" class="form-control"></div>
              <button class="btn btn-danger" type="submit">Submit</button>
          </form>
        </div>`;
};

export default SignUp;
