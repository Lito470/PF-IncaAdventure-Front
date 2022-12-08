import React from 'react'
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
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
          <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

          <div class="form-floating col-5 mb-2 mx-auto">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating col-5 mx-auto">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword col-5 mx-auto">Password</label>
          </div>

          <div class="checkbox mt-2 col-5 mx-auto">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <div className="justify-content-space-around">
          <button class="w-5 m-2 btn btn-lg btn-primary" type="submit">
            Sign in
          </button>
          <button class="w-5 m-2 btn btn-lg btn-light" type="submit" value="go to register">
            <Link to='/register' className="text-decoration-none"><a >Register</a></Link>
          </button>
          </div>
          <p class="col-1 mx-auto mt-5 mb-3 text-muted no-interaction border">Auth0</p>
        </form>
      </main>
      </div>
    </div>
  );
}

export default LoginPage