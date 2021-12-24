import React from "react";

const SignUpForm = () => {
  return (
    <form className="w-full space-y-2">
      <input
        type="text"
        className="w-full border rounded-md p-2 focus:border-none"
        placeholder="username"
      />
      <input
        type="password"
        className="w-full border rounded-md p-2 focus:border-none"
        placeholder="password"
      />
      <input
        type="submit"
        className="w-full rounded-md py-2 text-white bg-primary cursor-pointer"
        value="signup"
      />
    </form>
  );
};

export default SignUpForm;
