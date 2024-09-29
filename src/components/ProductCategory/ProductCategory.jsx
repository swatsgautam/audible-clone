import React, {useContext, useEffect, useState} from 'react'
import { BookContext } from '../../context/BookContext'
import Popup from '../Popup/Popup';

const ProductCategory = ({categoryTitle}) => {
    const { selectCategory, books } = useContext(BookContext)
    const [hoveredProduct, setHoveredProduct] = useState(null);
    const [popupPosition, setPopupPosition] = useState('right');
    
    // Select the category when the component mounts
    useEffect(() => {
        selectCategory(categoryTitle);
    }, [categoryTitle, selectCategory]);


    const handleMouseEnter = (product, event) => {
        const productItem = event.currentTarget.getBoundingClientRect(); 
        const windowWidth = window.innerWidth;
    
        // Determine if there's enough space to the right for the popup, otherwise position it to the left
        if (windowWidth - productItem.right < 250) {
          setPopupPosition('left'); // Set to left if not enough space on the right
        } else {
          setPopupPosition('right'); // Default to right
        }
    
        setHoveredProduct(product); // Set the hovered product to show the popup
      };
      
      const handleMouseLeave = () => {
        console.log("mouse hover leave")
        setHoveredProduct(null);
      };

  return (
    <>
        <div className="top-row">
            <h2>{categoryTitle}</h2>
        </div>
        <div className="product-category">           
            {books.length > 0 ? (
                books.map((product) => (
                                   
                    <div className="product-item" 
                        style={{ width: '196px' }} 
                        key={product.id}
                        onMouseEnter={(e) => handleMouseEnter(product, e)} 
                        onMouseLeave={handleMouseLeave}
                    >
                                        
                        <div className="product-img" >
                            <img src={product.src} alt={product.title} />
                        </div>
                                       
                        <div className="product-info">
                            <h3>
                                <a href="/">{product.title}</a>
                            </h3>
                            <div className="product-author-detail">
                                <span>Written by: <a href="/">{product.author}</a></span>
                            </div>
                        </div>
                        {hoveredProduct === product && (
                        
                        <Popup
                        product={product}
                        className={`popup-container popup-${popupPosition}`}
                        />
                        )}
                    </div>
                ))
            ) : (
                <p>No products available in this category.</p>
            )}
        </div>
    </>
  )
}

export default ProductCategory
