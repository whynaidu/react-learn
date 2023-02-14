import React, { Component } from "react";

export default class Login extends Component {


  loginClicked=(e)=>
  {
  alert("hiii")
  }
  render() {
    return (
      <div>
        <div className="loginPage BG bg-cover">
          <div className="FormContianer">
            <div className="h-full px-6 text-gray-800">
              <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between xl:justify-center">
                <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                    className="w-full"
                    alt="Sample image"
                  />
                </div>
                <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:ml-20 xl:w-5/12">
                  <form>
                    <div className="mb-6">
                      <input
                        type="email"
                        className="w-full 
                    rounded-lg border-0 bg-transparent leading-none text-white placeholder-white backdrop-blur-lg 
                    transition-colors duration-200 focus:bg-black/20 focus:outline-none 
                    md:py-4 md:pr-4 lg:py-4 lg:pr-4"
                        placeholder="Email"
                      />
                    </div>

                    <div className="mb-6">
                      <input
                        type="password"
                        className="w-full 
                    rounded-lg border-0 bg-transparent leading-none text-white placeholder-white backdrop-blur-lg 
                    transition-colors duration-200 focus:bg-black/20 focus:outline-none 
                    md:py-4 md:pr-4 lg:py-4 lg:pr-4"
                        placeholder="Password"
                      />
                    </div>

                    <div className="text-center lg:text-center">
                      {/* <button
                        type="button"
                        className="block w-1/2 rounded-lg bg-transparent px-3 py-3 text-white backdrop-blur-sm hover:bg-black/10
                        hover:text-white hover:backdrop-blur-3xl"
                        onClick={this.loginClicked}
                      >
                        Login
                      </button> */}
                      <button
                        type="button"
                        className="w-2/4 rounded-[1rem] border-0 bg-[#8736bf] bg-none py-3 px-5 text-center text-white"
                        onClick={this.loginClicked}
                      >
                        Login
                      </button>

                      <div className="mb-6 flex items-end justify-end">
                        <a href="#!" className="text-white">
                          Forgot password?
                        </a>
                      </div>
                      <p className="mt-2 mb-0 pt-1 text-sm font-semibold">
                        Don't have an account?
                        <a
                          href="#!"
                          className="text-white transition duration-200 ease-in-out hover:text-[#981ac4--------] focus:text-[#8736bf]"
                        >
                          &nbsp; Register
                        </a>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
