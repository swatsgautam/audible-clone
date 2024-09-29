import React from 'react';
import './Footer.css'

// Data for links and their labels to avoid redundancy
const footerLinks = [
  { title: "Contact Us", url: "/" },
  { title: "Help", url: "/" },
  { title: "How to Listen", url: "/" },
  { title: "Listening Apps", url: "/" },
  { title: "Audible Suno", url: "/" },
  { title: "Facebook", url: "/" },
  { title: "Twitter", url: "/" },
  { title: "Instagram", url: "/" },
  { title: "Learn more about Audible", url: "/" },
  { title: "Learn more about membership", url: "/" },
  { title: "Best Sellers", url: "/" },
  { title: "New Releases", url: "/" },
  { title: "Indian Listens", url: "/" },
  { title: "Hindi Audiobooks", url: "/" },
  { title: "Free Shows & Audiobooks", url: "/" },
  { title: "Mysteries & Thrillers", url: "/" },
  { title: "Romance", url: "/" },
  { title: "Fiction", url: "/" },
  { title: "Sci-Fi & Fantasy", url: "/" },
  { title: "Self Development", url: "/" }
];

// Helper function to split data into chunks
const chunkArray = (array, chunkSize) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  };
// Footer component
const Footer = () => {
  // Split footerLinks into 4 chunks (4 columns with 5 items each)
  const footerColumns = chunkArray(footerLinks, 5);

  return (
    <div className="footer-section">
        <div className="container">
            <div className="footer-row">
            {footerColumns.map((column, colIndex) => (
                <div className="footer-column" key={colIndex}>
                <ul>
                    {column.map((link, index) => (
                    <li className="footer-item" key={index}>
                        <a className="footer-link" href={link.url}>
                        {link.title}
                        </a>
                    </li>
                    ))}
                </ul>
            </div>
            ))}
        </div>
        <div className="divider"></div>
        <div className="footer-bottom-links">
          <span>© 1997 - 2024 Audible, Inc</span>
          <span className="pipe"></span>
          
          <a href="/">Conditions of Use</a>
          <span className="pipe"></span>

          <a href="/">Privacy Notice</a>
          <span className="pipe"></span>

          <a href="/">Interest-Based Ads</a>
          <span className="pipe"></span>

          <a href="/">Recurring Payment Terms</a>
          <span className="pipe"></span>

          <a href="/">India (English)</a>
        </div>

      </div>
    </div>
    
    
  );
};

export default Footer;
