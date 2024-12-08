"use client"

import React, { useState } from "react";
import "./sidebar.css";
const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div>
       <div className="app">
      {/* Header */}
      <header className="header">
        <button className="hamburger" onClick={toggleSidebar}>
          ☰
        </button>
        <h1>3425 Items</h1>
        <button className="hide-filter">Hide Filter</button>
      </header>

      {/* Container */}
      <div className="container">
        {/* Sidebar */}
        <aside className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
          <div className="filters">
            <label>
              <input type="checkbox" /> Customizable
            </label>
            <div className="filter-category">
              <h4>Ideal For</h4>
              <ul>
                <li>
                  <input type="checkbox" /> Men
                </li>
                <li>
                  <input type="checkbox" /> Women
                </li>
                <li>
                  <input type="checkbox" /> Baby & Kids
                </li>
              </ul>
            </div>
            {/* Add more filters here */}
          </div>
        </aside>

        {/* Main Content */}
        <main className="main-content">
          <div className="product-grid">
            {/* Product Cards */}
            <div className="product-card">
              <img src="https://via.placeholder.com/150" alt="Product" />
              <h3>PPXOC MILKYWAY DRESS</h3>
              <p>
                <a href="#">Sign in or Create an account to see pricing</a>
              </p>
            </div>
            {/* Add more products here */}
          </div>
        </main>
      </div>
    </div>
    </div>
  )
}

export default Sidebar

