import React from "react";

const SignUpForm = () => {
  return (
    <form className="flex flex-col space-y-2">
      <label className="w-full text-primary text-center mb-2">Sign Up</label>
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
        value="signup"
      />
    </form>
  );
};

export default SignUpForm;
