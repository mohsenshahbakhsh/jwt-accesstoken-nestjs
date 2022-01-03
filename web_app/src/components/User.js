import React from "react";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import UserTable from "./UserTable";

const User = () => {
  return (
    <div className="flex flex-row space-x-16">
      <div className="w-1/4 container p-5 flex flex-col space-y-8 justify-start border rounded-lg shadow">
        {/* user signup */}
        <SignUpForm />
        {/* users list */}
        <UserTable
          userList={[
            { username: "john", password: "dontbe" },
            { username: "mike", password: "whythefuck" },
            { username: "debby", password: "gust" },
            { username: "fiona", password: "sober" },
          ]}
        />
      </div>
      <div className="w-1/4 container border rounded-lg shadow p-5">
        <SignInForm />
      </div>
    </div>
  );
};
export default User;
