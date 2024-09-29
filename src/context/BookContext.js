import React, { createContext, useState } from 'react';
import categories from '../data/productData'

export const BookContext = createContext();

export const BookProvider = ({children}) =>{
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [books, setBooks] = useState([]);

    const selectCategory = (categoryTitle) => {
        setSelectedCategory(categoryTitle);
        const selectedCategoryData = categories.find(category => category.category === categoryTitle);
    
        if (selectedCategoryData) {
            setBooks(selectedCategoryData.books);
        } else {
            setBooks([]);
        }
    }; 
   
    return(
        <BookContext.Provider value={{ categories: categories, selectCategory, selectedCategory, books }}>
            {children}
        </BookContext.Provider>
    );
}