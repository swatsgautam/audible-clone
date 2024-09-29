import React from 'react'
import './ProductList.css'
import ProductCategory from '../ProductCategory/ProductCategory'
import AdBanner from '../AdBanner/AdBanner'
import ExploreComponent from '../ExploreComponent/ExploreComponent'

const ProductList = () => {   

  return (
    <div className='product-container'>
        <div className="container">
            <div className="product-content-header">
                <h1>Feel every word with award-winning performances</h1>
                <span>Here are some of our favourites to get you started. Listen to a sample by clicking on a play button.</span>
            </div>
            <ProductCategory categoryTitle="Editor's picks" key="Editor's picks" />
            <AdBanner />
            <ProductCategory categoryTitle="Popular Audible Originals" key="Popular Audible Originals" />
            <ExploreComponent />
            <ProductCategory categoryTitle="Most Popular Podcasts" key="Most Popular Podcasts" />
     
        </div>
        
    </div>
  )
}

export default ProductList
