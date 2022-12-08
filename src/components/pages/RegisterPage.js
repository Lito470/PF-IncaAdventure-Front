import React from "react";
import { Link } from "react-router-dom";
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';

function RegisterPage() {
  return (
    <div>
      <div class="container text-center">
        <div class="row text-center pt-5 mt-5">
          <main class="form-signin w-100 m-auto">
            <form>
              <img
                class="mb-4"
                src="https://cdn-icons-png.flaticon.com/512/4135/4135890.png"
                alt=""
                width="72"
                height="57"
              />
              <h1 class="h3 mb-3 fw-normal">
                Please enter the following information
              </h1>

              <div class="form-floating col-3 mx-auto my-1">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">First Name</label>
              </div>

              <div class="form-floating col-3 mx-auto my-1">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">Last Name</label>
              </div>

              <div class="form-floating col-3 mx-auto my-1">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating col-3 mx-auto my-1">
                <input
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label for="floatingPassword col-5 mx-auto my-1">Password</label>
              </div>
              <div class="form-floating col-3 mx-auto my-1">
                <form>
                  <div class="input-group">
                    <input type="tel" class="form-control rounded-end" id="floatingInput" placeholder="Phone number" />
                    <span class="floatingPassword  col-2 mx-auto input-group-addon m-2"><span className="no-interaction">+</span><PhoneEnabledIcon/></span>
                  </div>
                </form>
              </div>
              <div className="justify-content-space-around">
                <button
                  class="w-5 m-2 btn btn-lg btn-light"
                  type="submit"
                  value="go to register"
                >
                  <Link to="/register" className="text-decoration-none">
                    <a>Register</a>
                  </Link>
                </button>
              </div>
              <p class="mt-5 mb-3 text-muted">&copy; 2022–2023</p>
            </form>
          </main>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
