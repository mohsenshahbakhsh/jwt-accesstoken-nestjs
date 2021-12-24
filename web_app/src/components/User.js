import React from "react";
import SignUpForm from "./SignUpForm";
import UserTable from "./UserTable";

const User = () => {
  return (
    <div className="container h-auto p-5 flex flex-col space-y-8 justify-start">
      {/* user signup */}
      <SignUpForm />
      {/* users list */}
      <div className="border rounded-md shadow">
        <UserTable
          userList={[
            { username: "john", password: "dontbe" },
            { username: "mike", password: "whythefuck" },
            { username: "debby", password: "gust" },
            { username: "fiona", password: "sober" },
          ]}
        />
      </div>
    </div>
  );
};
export default User;
