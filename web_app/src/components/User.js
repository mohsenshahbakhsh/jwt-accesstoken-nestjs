import React from "react";
import LogInForm from "./LogInForm";
import SignUpForm from "./SignUpForm";
import SignedUpUsersTabel from "./SignedUpUsers";
import LoggedInUsersTabel from "./LoggedInUsers";

const User = () => {
  let dateOption = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  return (
    <div className="h-full flex flex-row space-x-16">
      {/* user signup */}
      <div className="w-auto p-4 flex flex-col space-y-8 justify-start border rounded-lg shadow">
        <SignUpForm />
        {/* users list */}
        <SignedUpUsersTabel
          userList={[
            { username: "john", password: "doe" },
            { username: "mike", password: "hanson" },
            { username: "debby", password: "panda" },
          ]}
        />
      </div>
      {/* user login */}
      <div className="w-auto p-4 flex flex-col space-y-8 justify-start border rounded-lg shadow">
        <div className="flex flex-row justify-start items-center space-x-4">
          {/* <div className="w-96"> */}
          <LogInForm />
          {/* </div> */}
        </div>
        <LoggedInUsersTabel
          userList={[
            {
              username: "john",
              accessTokenExp: new Date()
                .toLocaleString("en-US", dateOption)
                .split(","),
            },
            {
              username: "john",
              accessTokenExp: new Date()
                .toLocaleString("en-US", dateOption)
                .split(","),
            },
          ]}
        />
        <div className="p-4 flex flex-col justify-start space-y-8">
          <label className="text-sm text-blue-900 text-opacity-80 font-medium">
            Access Token Expires 2 minutes After Successful Login.
            <br />
            <br />
            Access Token And Refresh Token Will Be Stored In Cookies.
          </label>
        </div>
      </div>
    </div>
  );
};
export default User;
