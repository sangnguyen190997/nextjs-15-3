import { getHistoryByUserId } from "@/services/historyApi";
import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DefaultLayout from "../components/Layout/DefaultLayout";

const index = () => {
  const [history, setHistory] = useState();
  const user = useSelector((state) => state.auth.login.currentUser);

  useEffect(() => {
    (async () => {
      const data = await getHistoryByUserId(user.id, user.access_token);
      setHistory(data);
    })();
  }, []);

  // console.log(history);
  if (!history) {
    return;
  }

  return (
    <Fragment>
      <DefaultLayout>
        <div className="container mx-auto">
          <h1 className="m-12 text-3xl	text-center font-bold">Your history</h1>

          <div class="relative overflow-x-auto shadow-md sm:rounded-lg m-20">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr className="font-bold">
                  <th scope="col" class="px-6 py-3">
                    ID User
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Full Name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Address
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Phone Number
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Total Price
                  </th>
                  <th scope="col" class="px-6 py-3">
                    More
                  </th>
                </tr>
              </thead>
              <tbody>
                {history.map((item) => (
                  <tr>
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {item.user.id}
                    </th>
                    <td class="px-6 py-4">{item.fullname}</td>
                    <td class="px-6 py-4">{item.address}</td>
                    <td class="px-6 py-4">{item.phone}</td>
                    <td class="px-6 py-4">{item.total}</td>
                    <td class="px-6 py-4">
                      <a
                        href="#"
                        class="font-medium text-green-600 dark:text-green-500 hover:underline"
                      >
                        Detail
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </DefaultLayout>
    </Fragment>
  );
};

export default index;
