import React, { useState, useEffect } from "react";
import all_orders from "../../constants/orders";
import { calculateRange, sliceData } from "../../utils/table-pagination";

function Orders() {
  const [search, setSearch] = useState("");
  const [orders, setOrders] = useState(all_orders);
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState([]);

  useEffect(() => {
    setPagination(calculateRange(all_orders, 5));
    setOrders(sliceData(all_orders, page, 5));
  }, []);

  // Search
  const __handleSearch = (event: any) => {
    setSearch(event.target.value);
    if (event.target.value !== "") {
      let search_results = orders.filter(
        (item) =>
          item.customerName.toLowerCase().includes(search.toLowerCase()) ||
          item.customerId.toLowerCase().includes(search.toLowerCase()) ||
          item.orderNumber.toLowerCase().includes(search.toLowerCase())
      );
      setOrders(search_results);
    } else {
      __handleChangePage(1);
    }
  };

  // Change Page
  const __handleChangePage = (new_page: any) => {
    setPage(new_page);
    setOrders(sliceData(all_orders, new_page, 5));
  };

  return (
    <div className="dashboard-content">
      <div className="dashboard-content-container">
        <h4>Order booking</h4>

        <div className="dashboard-content-header">
          <div className="dashboard-content-search">
            <input
              type="text"
              value={search}
              placeholder="Search by customer name"
              className="dashboard-content-input"
              onChange={(e) => __handleSearch(e)}
            />
          </div>
          <div className="dashbord-header-container">
            <button className="buttonStyle" onClick={(e) => __handleSearch(e)}>
              {"Search"}
            </button>
            <button className="dashbord-header-btn" onClick={(e) => __handleSearch(e)}>
              {"Filter"}
            </button>
          </div>

          <div className="dashbord-header-container">
            <button className="dashbord-header-btn" onClick={(e) => __handleSearch(e)}>
              {"Add"}
            </button>
            <button className="dashbord-header-btn" onClick={(e) => __handleSearch(e)}>
              {"Delete"}
            </button>
          </div>
        </div>
        

        <table className="table-fixed">
          <thead>
            <th className="text-xl font-bold pb-4">Customer name</th>
            <th className="text-xl font-bold pb-4">Customer ID</th>
            <th className="text-xl font-bold pb-4">Order number</th>
            <th className="text-xl font-bold pb-4">Enquiry ID</th>
            <th className="text-xl font-bold pb-4">Order date</th>
          </thead>

          {orders.length !== 0 ? (
            <tbody>
              {orders.map((order, index) => (
                <tr key={index}>
                  <td className="text-xl font-bold pb-4">
                    <span>{order.customerName}</span>
                  </td>
                  <td className="text-xl font-bold pb-4">
                    <span>{order.customerId}</span>
                  </td>
                  <td className="text-xl font-bold pb-4">
                    <span>{order.orderNumber}</span>
                  </td>
                  <td className="text-xl font-bold pb-4">
                    <span>{order.enquiryId}</span>
                  </td>
                  <td className="text-xl font-bold pb-4">
                    <span>{order.date}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          ) : null}
        </table>

        {orders.length !== 0 ? (
          <div className="text-xl font-bold pb-4">
            {pagination.map((item, index) => (
              <span
                key={index}
                className={item === page ? "active-pagination" : "pagination"}
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
  );
}

export default Orders;
