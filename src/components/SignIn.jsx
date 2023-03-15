import React from "react";

export default function SignIn() {
  return (
    <div class="register-main-container register-background">
      <div class="w-75">
        <div class="row rounded bg-white">
          <div class="d-none d-md-block col col-md-5 background-color-twitter rounded-start p-5">
            <div class="d-flex flex-column h-100">
              <i class="bi bi-twitter text-white display-5"></i>
              <h2 class="mt-auto text-white">Hey! Nice to see you again 🥰</h2>
            </div>
          </div>
          <div class="register-form-column col col-sm-12 col-md-6 col-lg-7 p-5">
            <div class="d-flex justify-content-center">
              <form action="/login" method="POST" class="register-form">
                <div class="mb-4">
                  <h1 class="register-main-title">Log In</h1>
                  <p class="small-text">Ready to start using Twitter?</p>
                </div>
                <div class="input-group mb-3">
                  <input
                    class="form-control"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div class="input-group mb-3">
                  <input
                    class="form-control"
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                  />
                </div>
                <div class="mb-3 mt-5">
                  <button
                    type="submit"
                    class="w-100 btn rounded-pill text-white background-color-twitter submitBtn mb-5"
                  >
                    Log In
                  </button>

                  <p class="text-center">
                    Don't have an account?
                    <a href="/register" class="text-decoration-none">
                      Sign up
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
