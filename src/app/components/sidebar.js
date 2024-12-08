"use client"
import React, { useState } from 'react';
import './sidebar.css'; 

const Sidebar = () => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>3425 ITEMS</h2>
        <button className="hide-filter">HIDE FILTER</button>
      </div>
      <div className="sidebar-content">
        {[
          { title: 'CUSTOMIZABLE', items: [] },
          { title: 'IDEAL FOR', items: ['Men', 'Women', 'Baby & Kids'] },
          { title: 'OCCASION', items: ['All'] },
          { title: 'WORK', items: ['All'] },
          { title: 'FABRIC', items: ['All'] },
          { title: 'SEGMENT', items: ['All'] },
          { title: 'SUITABLE FOR', items: ['All'] },
          { title: 'RAW MATERIALS', items: ['All'] },
          { title: 'PATTERN', items: ['All'] },
        ].map((section, idx) => (
          <div key={idx} className="filter-section">
            <button
              className="filter-toggle"
              onClick={() => toggleSection(section.title)}
            >
              {section.title}
              <span className="toggle-icon">
                {openSections[section.title] ? '-' : '+'}
              </span>
            </button>
            {openSections[section.title] && (
              <div className="filter-items">
                {section.items.map((item, i) => (
                  <div key={i} className="filter-item">
                    <input
                      type="checkbox"
                      id={`${section.title}-${i}`}
                      className="filter-checkbox"
                    />
                    <label htmlFor={`${section.title}-${i}`}>{item}</label>
                  </div>
                ))}
                {!section.items.length && <p>All</p>}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
