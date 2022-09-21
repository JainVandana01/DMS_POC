const customer = {
  id: 1,
  first_name: "Customer",
  last_name: "One",
  email: "customer1@mail.com",
  phone: "00000000000",
  address: "Customer_1 Address",
  description: "Customer_1 description",
};

const CustomerDetails = () => {
  const deleteCustomer = () => {};

  return (
    <div className="container">
      <div className="row">
        <table className="table table-bordered">
          <thead className="thead-light">
            <tr>
              <th scope="col">First name</th>
              <th scope="col">Last name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Address</th>
              <th scope="col">Description</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr key={customer.id}>
              <td>{customer.first_name}</td>
              <td>{customer.last_name}</td>
              <td>{customer.email}</td>
              <td>{customer.phone}</td>
              <td>{customer.address}</td>
              <td>{customer.description}</td>
              <td>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button
                      className="btn btn-sm btn-outline-secondary"
                      onClick={deleteCustomer}
                    >
                      Delete Customer
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerDetails;
