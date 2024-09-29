import React, {useState, useRef, useEffect} from 'react'
import './NavMenu.css'
import BrowsePopup from '../BrowsePopup/BrowsePopup';

const NavMenu = () => {
  const [showBrowseDropdown, setShowBrowseDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicked outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowBrowseDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div className='container'>
      <div className="menu-left">
        <ul>
            <li>Library</li>
            <li>Wish List</li>
            <li
             onClick={() => setShowBrowseDropdown(!showBrowseDropdown)}
             ref={dropdownRef}
          >
              Browse <i className="fa fa-chevron-down"></i></li> 
              {showBrowseDropdown && <BrowsePopup />}
            <li>About Membership</li>
        </ul>
      </div>
      <div className="menu-right">
        <input type="text" placeholder='Search for a great book' />
      </div>
    </div>
  )
}

export default NavMenu
