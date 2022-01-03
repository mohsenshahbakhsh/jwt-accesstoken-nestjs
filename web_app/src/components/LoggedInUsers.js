import React from "react";

const LoggedInUsersTabel = ({ userList }) => {
  const users = userList.map((item) => {
    return (
      <tr className="bg-white border-b">
        <td className="py-4 px-6 text-sm text-gray-700 whitespace-nowrap">
          {item.username}
        </td>
        <td className="py-4 px-6 text-sm text-gray-700 whitespace-nowrap">
          {item.accessTokenExp}
        </td>
      </tr>
    );
  });
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block py-2 min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded shadow">
            <table className="min-w-full text-primary">
              <thead className="bg-gray-100 text-gray-400">
                <tr>
                  <th
                    scope="col"
                    className="py-3 px-6 text-xs font-medium tracking-wider text-left uppercase"
                  >
                    username
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-6 text-xs font-medium tracking-wider text-left uppercase"
                  >
                    access token exp
                  </th>
                </tr>
              </thead>
              <tbody>{users}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoggedInUsersTabel;
