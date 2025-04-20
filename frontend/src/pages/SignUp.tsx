import React from "react";

const SignUp = () => {
  return (
    <div className="single-page flex flex-col w-full h-screen lg:flex-row">
      {/* Side Picture Section */}
      <aside className="w-full h-[25%] bg-[var(--tertiary-color)] lg:w-[40%] lg:h-full">
        <img src={""} alt="" />
      </aside>

      {/* Form Section */}

      <section className="w-full h-[75%] flex items-center justify-center lg:w-[60%] lg:h-full">
        <form
          className=" w-[85%] h-[85%] flex flex-col justify-between md:w-[70%] lg:w-[50%] lg:h-[70%]"
          action=""
        >
          <p className=" text-center text-lg">Create Account</p>
          <div className=" flex w-fit mx-auto">
            <img
              className=" size-8 rounded-full bg-[var(--tertiary-color)] mx-2 "
              src=""
              alt=""
            />
            <img
              className=" size-8 rounded-full bg-[var(--tertiary-color)] mx-2 "
              src=""
              alt=""
            />
            <img
              className=" size-8 rounded-full bg-[var(--tertiary-color)] mx-2 "
              src=""
              alt=""
            />
          </div>

          {/* Input bars */}

          <div className=" w-full h-[55%] flex flex-col justify-between lg:h-[60%]">
            <input
              className="bg-[var(--tertiary-color)] rounded-full w-full h-14 pl-10 font-black lg:h-16"
              type="text"
              placeholder="Enter your name"
            />
            <input
              className="bg-[var(--tertiary-color)] rounded-full w-full h-14 pl-10 font-black lg:h-16"
              type="text"
              placeholder="Enter your email address"
            />
            <input
              className="bg-[var(--tertiary-color)] rounded-full w-full h-14 pl-10 font-black lg:h-16"
              type="text"
              placeholder="Enter your Phone no"
            />
            <input
              className="bg-[var(--tertiary-color)] rounded-full w-full h-14 pl-10 font-black lg:h-16"
              type="text"
              placeholder="Default Address: room no. and hostel"
            />
            <input
              className="bg-[var(--tertiary-color)] rounded-full w-full h-14 pl-10 font-black lg:h-16"
              type="text"
              placeholder="Enter your Password"
            />
          </div>

          {/* Sign Up Button and others */}

          <div className=" w-full h-[23%] flex flex-col justify-between md:h-[20%] lg:h-[20%]">
            <div className=" flex items-center pl-2">
              <input type="checkbox" name="seller account" id="seller" />{" "}
              <label className="ml-3" htmlFor="seller">
                Open a seller account
              </label>
            </div>
            <button className=" w-full h-14 rounded-2xl bg-[var(--sec-color)] font-[Lexend] text-lg font-bold text-white lg:h-16">
              Sign up
            </button>
            <p className="">
              Already have an account?{" "}
              <span className="text-blue-500">Login</span>
            </p>
          </div>
        </form>
      </section>
    </div>
  );
};

export default SignUp;
