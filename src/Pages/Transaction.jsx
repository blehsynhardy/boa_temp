import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faSearch,
  faFileDownload,
//   faArrowUp,
//   faArrowDown,
//   faCreditCard,
//   faUtensils,
//   faShoppingBag,
//   faGasPump,
//   faHome,
//   faTags,
} from "@fortawesome/free-solid-svg-icons";

const Transaction = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [dateRange, setDateRange] = useState("last30");

  // Sample transaction data
  const transactions = [
    {
      id: 2,
      date: "2025-03-15",
      description: "Salary Deposit",
      category: "income",
      amount: 100000.0,
      type: "credit",
      icon: faArrowDown,
    },
    // {
    //   id: 3,
    //   date: "2025-03-14",
    //   description: "Grocery Store",
    //   category: "shopping",
    //   amount: -156.87,
    //   type: "debit",
    //   icon: faShoppingBag,
    // },
    // {
    //   id: 4,
    //   date: "2025-03-12",
    //   description: "Transfer to Savings",
    //   category: "transfer",
    //   amount: -500.0,
    //   type: "transfer",
    //   icon: faArrowUp,
    // },
    // {
    //   id: 5,
    //   date: "2025-03-10",
    //   description: "Gas Station",
    //   category: "transportation",
    //   amount: -45.67,
    //   type: "debit",
    //   icon: faGasPump,
    // },
    // {
    //   id: 6,
    //   date: "2025-03-07",
    //   description: "Mortgage Payment",
    //   category: "housing",
    //   amount: -1200.0,
    //   type: "debit",
    //   icon: faHome,
    // },
    // {
    //   id: 7,
    //   date: "2025-03-03",
    //   description: "Online Purchase",
    //   category: "shopping",
    //   amount: -78.5,
    //   type: "debit",
    //   icon: faShoppingBag,
    // },
    // {
    //   id: 8,
    //   date: "2025-03-01",
    //   description: "Credit Card Payment",
    //   category: "bills",
    //   amount: -320.0,
    //   type: "debit",
    //   icon: faCreditCard,
    // },
    // {
    //   id: 9,
    //   date: "2025-02-28",
    //   description: "Bonus Payment",
    //   category: "income",
    //   amount: 750.0,
    //   type: "credit",
    //   icon: faArrowDown,
    // },
    // {
    //   id: 10,
    //   description: "Discount Store",
    //   date: "2025-02-25",
    //   category: "shopping",
    //   amount: -34.29,
    //   type: "debit",
    //   icon: faTags,
    // },
  ];

  const goBack = () => {
    navigate(-1);
  };

  // Filter transactions based on user selection
  const filteredTransactions = transactions.filter((transaction) => {
    // Filter by type
    if (filter !== "all" && transaction.type !== filter) {
      return false;
    }

    // Filter by search term
    if (
      searchTerm &&
      !transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return false;
    }

    // For date range filtering, we'd normally do more sophisticated date parsing
    // This is simplified for demo purposes
    return true;
  });

  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(Math.abs(amount));
  };

  return (
    <div className="container py-4">
      <div className="mb-4 d-flex justify-content-between align-items-center">
        <button className="btn btn-light" onClick={goBack}>
          <FontAwesomeIcon icon={faArrowLeft} className="me-2" />
          Back
        </button>
        <h4 className="mb-0">Transactions</h4>
        <div></div> {/* Empty div for flex alignment */}
      </div>

      {/* Search and Filter Controls */}
      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <div className="row g-3">
            <div className="col-md-6">
              <div className="input-group">
                <span className="input-group-text bg-white">
                  <FontAwesomeIcon icon={faSearch} />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search transactions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-3">
              <select
                className="form-select"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="all">All Transactions</option>
                <option value="debit">Debits</option>
                <option value="credit">Credits</option>
                <option value="transfer">Transfers</option>
              </select>
            </div>
            <div className="col-md-3">
              <select
                className="form-select"
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
              >
                <option value="last30">Last 30 Days</option>
                <option value="last90">Last 90 Days</option>
                <option value="year">This Year</option>
                <option value="custom">Custom Range</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Transaction List */}
      <div className="card shadow-sm">
        <div className="card-header bg-white d-flex justify-content-between align-items-center">
          <h5 className="mb-0">Transaction History</h5>
          <button className="btn btn-sm btn-outline-secondary">
            <FontAwesomeIcon icon={faFileDownload} className="me-2" />
            Export
          </button>
        </div>
        <div className="card-body p-0">
          {filteredTransactions.length > 0 ? (
            <div className="table-responsive">
              <table className="table table-hover mb-0">
                <thead className="table-light">
                  <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th className="text-end">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTransactions.map((transaction) => (
                    <tr key={transaction.id}>
                      <td>{transaction.date}</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <div
                            className="me-3"
                            style={{
                              width: "32px",
                              height: "32px",
                              backgroundColor:
                                transaction.type === "credit"
                                  ? "#e3f7ea"
                                  : "#ffe0e4",
                              borderRadius: "50%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              color:
                                transaction.type === "credit"
                                  ? "#28a745"
                                  : "#e31837",
                            }}
                          >
                            <FontAwesomeIcon icon={transaction.icon} />
                          </div>
                          {transaction.description}
                        </div>
                      </td>
                      <td>
                        <span className="badge rounded-pill bg-light text-dark">
                          {transaction.category.charAt(0).toUpperCase() +
                            transaction.category.slice(1)}
                        </span>
                      </td>
                      <td
                        className={`text-end ${
                          transaction.amount >= 0 ? "text-success" : ""
                        }`}
                      >
                        {transaction.amount >= 0 ? "+ " : "- "}
                        {formatCurrency(transaction.amount)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-5">
              <p className="mb-0">
                No transactions found matching your criteria.
              </p>
            </div>
          )}
        </div>
        <div className="card-footer bg-white">
          <nav aria-label="Transaction pagination">
            <ul className="pagination justify-content-center mb-0">
              <li className="page-item disabled">
                <a className="page-link" href="#" tabIndex="-1">
                  Previous
                </a>
              </li>
              <li className="page-item active">
                <a
                  className="page-link"
                  href="#"
                  style={{ backgroundColor: "#e31837", borderColor: "#e31837" }}
                >
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
