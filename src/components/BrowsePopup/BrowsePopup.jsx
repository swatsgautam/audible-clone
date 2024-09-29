// BrowsePopup.jsx
import React from 'react';
import browseData from '../../data/browseData'; 
import './BrowsePopup.css'; 

const BrowsePopup = () => {

  return (
    <div className="browse-popup">
      <h3>{browseData[0].main}</h3>
      <ul className="browse-categories">
        {browseData[0].subcategories.map((category, index) => (
          <li key={index} className="category">
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BrowsePopup;
