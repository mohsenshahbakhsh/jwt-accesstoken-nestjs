import React from "react";

const UserTable = ({ userList }) => {
  const users = userList.map((item, index) => {
    return (
      <tr>
        <td className="px-6 py-2 text-gray-500">{++index}</td>
        <td className="px-6 py-2">{item.username}</td>
        <td className="px-6 py-2">{item.password}</td>
      </tr>
    );
  });
  return (
    <div className="container flex justify-start">
      <table className="container table-auto text-primary">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-6 py-2">id</th>
            <th className="px-6 py-2">username</th>
            <th className="px-6 py-2">password</th>
          </tr>
        </thead>
        <tbody className="container">{users}</tbody>
      </table>
    </div>
  );
};

export default UserTable;
