import React, { useState, useEffect } from "react";
import Link from "next/link";
import all_orders from "../constants/orders";
import { calculateRange, sliceData } from "../utils/table-pagination";
import Image from "next/image";
import * as api from "../utils/usersApi";
import { useQuery } from "react-query";
import { atom, useAtom } from 'jotai'

const listAtom = atom([])

const OrdersBooking = () => {
  const [pagination, setPagination] = useState<number[]>([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const { data, error, isLoading } = useQuery("users", api.getUsers, {refetchOnWindowFocus: false});
  console.log("order listss", data);
  const [orders, setOrders] = useState([]);

  //const [orders, setOrders] = useState(data);

  useEffect(() => {
    //setPagination(calculateRange(orders, 5));
    //setOrders(sliceData(orders, page, 5));
  }, []);

  // Search
  const __handleSearch = (event:any) => {
    // setSearch(event.target.value);
    // if (event.target.value !== "") {
    //   let search_results = orders.filter(
    //     (item) =>
    //       item.customerName.toLowerCase().includes(search.toLowerCase()) ||
    //       item.customerId.toLowerCase().includes(search.toLowerCase()) ||
    //       item.orderNumber.toLowerCase().includes(search.toLowerCase())
    //   );
    //   setOrders(search_results);
    // } else {
    //   __handleChangePage(1);
    // }
  };

  // Change Page
  const __handleChangePage = (new_page: number) => {
    setPage(new_page);
    //setOrders(sliceData(orders, new_page, 5));
  };

  return (
    <div className="flex-1 border-2 rounded-lg border-grey-600 m-8">
      {/* <SideBar menu={sidebar_menu} /> */}
      <div className="bg-white p-2 rounded-lg shadow-sm">
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
              {isLoading ? (
                    <div data-testid="loading-text">Loading...</div>
                  ):(
                <table className="min-w-full">
                  <caption className="text-black py-8 text-2xl font-extrabold text-left">
                    Order Booking
                  </caption>
                  <thead className="border-b px-2">
                    <tr>
                      <th className="text-lg font-large text-black-900 text-left">
                        Customer name
                      </th>
                      <th
                        scope="col"
                        className="text-lg font-large text-black-900 text-left"
                      >
                        Customer Id
                      </th>
                      <th
                        scope="col"
                        className="text-lg font-large text-black-900 text-left"
                      >
                        Order number
                      </th>
                      <th
                        scope="col"
                        className="text-lg font-large text-black-900 text-left"
                      >
                        Enquiry Id
                      </th>
                      <th
                        scope="col"
                        className="text-lg font-large text-black-900 text-left"
                      >
                        Order date
                      </th>
                    </tr>
                  </thead>
                  
                    <tbody>
                      {data ? data.map((item:any, index:number) => (
                        <tr data-testid="list-item" key={index} className="bg-white border-b transition duration-300 ease-in-out cursor-pointer">
                          <td className="text-sm text-gray-900 font-light whitespace-nowrap">
                            {item.name}
                          </td>
                          <td className="text-sm text-gray-900 font-light whitespace-nowrap">
                            {item.id}
                          </td>
                          <td className="text-sm text-gray-900 font-light whitespace-nowrap">
                            {item.phone}
                          </td>
                          <td className="text-sm text-gray-900 font-light whitespace-nowrap">
                            {item.username}
                          </td>
                          <td className="text-sm text-gray-900 font-light  whitespace-nowrap">
                            {item.email}
                          </td>
                          <td className="text-sm text-gray-900 font-light  whitespace-nowrap">
                            {/* <Link
                              // padding=".8rem"
                              // display="flex"
                              // as={RouterLink}
                              // to={'/orderdetails'}
                              href={{
                                pathname: "/orderdetails",
                                query: { customerId: item.customerId },
                              }}
                              
                              key={index}
                            >
                              <Image
                                width="30"
                                height="30"
                                src="/eye.png"
                                alt="suzuki-logo"
                              />
                            </Link> */}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-0 py-4 whitespace-nowrap">
                            <Image
                              width="20"
                              height="20"
                              src="/delete.png"
                              alt="suzuki-logo"
                            />
                          </td>
                        </tr>
                      ))
                      :null}
                    </tbody>
                 
                </table>
                 )}

                {orders.length !== 0 ? (
                  <div className="text-xl font-bold pb-4">
                    {pagination.map((item, index) => (
                      <span
                        key={index}
                        className={
                          item === page ? "active-pagination" : "pagination"
                        }
                        onClick={() => __handleChangePage(item)}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                ) : (
                  <div className="text-xl font-bold pb-4">
                    <span className="empty-table">No data</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersBooking;
