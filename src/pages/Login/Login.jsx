import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const Login = () => {
  return (
    <div>
      <Helmet>
        <title>Ten Build - Login</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200 my-12 rounded-lg">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card shrink-0 w-full lg:w-[600px] max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <p>
                New here? Please
                <Link className="text-green-600 ml-2" to="/register">
                  Register
                </Link>
              </p>

              {}

              {user ? (
                <button onClick={handleSignOut} className="btn btn-secondary">
                  Sign Out
                </button>
              ) : (
                <div>
                  <button
                    onClick={handleGoogleSignIn}
                    className="btn btn-secondary w-full"
                  >
                    Sign in with Google
                    <img
                      className="w-6 h-6"
                      src="https://i.ibb.co/tcXrSXm/Google-G-logo-svg.webp"
                      alt=""
                    />
                  </button>
                  <button
                    onClick={handleGithubSignIn}
                    className="btn btn-secondary w-full mt-4"
                  >
                    Github Login
                    <img
                      className="w-6 h-6"
                      src="https://i.ibb.co/WW0FjpL/Git-Hub-Invertocat-Logo-svg.png"
                      alt=""
                    />
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
