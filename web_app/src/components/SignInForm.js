import React from "react";

const SignInForm = () => {
  return (
    <form className="flex flex-col space-y-2">
      <h5 className="w-full text-primary text-center mb-2">Log In</h5>
      <input
        type="text"
        className="border rounded-md p-2"
        placeholder="username"
      />
      <input
        type="password"
        className="border rounded-md p-2"
        placeholder="password"
      />
      <input
        type="submit"
        className="rounded-md py-2 text-white bg-primary cursor-pointer"
        value="Login"
      />
    </form>
  );
};

export default SignInForm;
