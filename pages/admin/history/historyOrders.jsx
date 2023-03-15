import Image from "next/image";
import queryString from "query-string";
import React, { useEffect, useState } from "react";
import Sidebar_com from "../components/Sidebar_com";
import { delete_Product, getHistoryData } from "@/services/admin";
import { ToastContainer, toast } from "react-toastify";
import Link from "next/link";
import "react-toastify/dist/ReactToastify.css";
import Router from "next/router";
import SearchBox from "@/pages/components/search-box";
import Pagination from "@mui/material/Pagination";
import io from "socket.io-client";
const socket = io("http://localhost:3000");

export async function getStaticProps() {
  const data = (await getHistoryData()) || [];
  return {
    props: { data },
  };
}

export default function historyOrders({ data }) {
  const [finalData, setFinalData] = useState(data);
  const [text, setText] = useState("");

  console.log(text);

  const changePage = (id) => {
    Router.push("getListCartByUser/" + 5);
  };

  useEffect(() => {
    //Nhận dữ liệu từ server gửi lên thông qua socket với key receive_order
    socket.on("receive_order", (data) => {
      console.log({ data });
      setText("User ID: " + data + " Vừa Đặt Hàng");

      setTimeout(() => {
        window.location.reload();
      }, 4000);
    });
  }, []);

  return (
    <div className="w-full h-screen flex">
      <Sidebar_com />
      <div className="w-10/12 h-full bg-gray-300 overflow-auto ">
        <div className="w-full p-4  mt-10 mb-4 flex items-center justify-center">
          <h1 className="text-4xl font-semibold tracking-widest border-b p-2 uppercase">
            History
          </h1>
        </div>
        <div className="flex px-10">
          <div className="flex">
            <SearchBox />
            <h1 className="bg-gray-300 text-5xl	ml-10">{text} Hello</h1>
          </div>
        </div>
        <div className="px-10">
          <div className="overflow-y-auto  sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full ">
              <div className="overflow-hidden">
                <table className="table-auto min-w-full text-center">
                  <thead className="">
                    <tr>
                      <th scope="col" className="text-2xl font-semibold py-4  ">
                        Name
                      </th>

                      <th scope="col" className="text-2xl font-semibold py-4 ">
                        Phone
                      </th>

                      <th
                        scope="col"
                        className="text-2xl font-semibold   py-4 "
                      >
                        Total
                      </th>
                      <th scope="col" className="text-2xl font-semibold py-4 ">
                        Status
                      </th>

                      <th scope="col" className="text-2xl font-semibold  py-4 ">
                        Delivery
                      </th>

                      <th scope="col" className="text-2xl font-semibold  py-4 ">
                        Action
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {finalData?.map((history) => {
                      return (
                        <tr className="" key={history.id}>
                          <td className="text-sm font-light  py-4 whitespace-nowrap ">
                            {history.fullname}
                          </td>

                          <td className="text-sm font-light  py-4 whitespace-nowrap">
                            {history.phone}
                          </td>

                          <td className="text-sm  font-light  py-4 whitespace-nowrap">
                            {history.total}
                          </td>

                          <td className="text-sm  font-light  py-4 whitespace-nowrap">
                            {history.status}
                          </td>

                          <td className="text-sm  fonts-light  py-4 whitespace-nowrap">
                            {history.delivery}
                          </td>

                          <td>
                            <button
                              onClick={() => changePage(history.userId)}
                              className="bg-red-500 mx-2 hover:bg-orange-900  font-bold py-2 px-4 rounded-full"
                            >
                              Check cart
                            </button>
                            {/* <Link href={`cart/getListCartByUser/${5}`} className="bg-orange-500 mx-2 hover:bg-orange-900   font-bold py-2 px-4 rounded-full">Check cart</Link> */}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
