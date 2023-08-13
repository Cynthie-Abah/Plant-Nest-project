import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import {FaStar, FaStarHalfAlt, FaRegStar} from 'react-icons/fa'
import axios from 'axios'


export const Item = ({product_img, product_name, product_price, product_ratings, plant_id }) =>{

   const [inCart, setInCart] = useState(false);
   const [inWishlist, setInWishlist] = useState(false);

  const handleAddToCart = async ()=>{

    const storedUser = JSON.parse(localStorage.getItem("user"));

    const raw = {
        // the user id should be stored in session 
        user_id : storedUser.user_id,
        product_id : plant_id,
        qauntity: 1,
    };

    const requestOptions = {
    method: 'POST',
    body: raw,
    redirect: 'follow'
    };
    try {

    const response = await axios.get("https://plant-nest.onrender.com/api/v1/cart/add", requestOptions)
    console.log(response);
    setInCart(true) 
    

    } catch (error) {
        console.error(error)
        alert('failed to add to cart')
    }
  }

  const handleAddToWishlist = async ()=>{

    const storedUser = JSON.parse(localStorage.getItem("user"));

    const raw = {
        // the user id should be stored in session 
        user_id : storedUser.user_id,
        product_id : plant_id,
        qauntity: 1,
    };

    const requestOptions = {
    method: 'POST',
    body: raw,
    redirect: 'follow'
    };
    try {

    const response = await axios.get("https://plant-nest.onrender.com/api/v1/wishlist/add", requestOptions)
    console.log(response);
    setInWishlist(true) 
    

    } catch (error) {
        console.error(error)
        alert('failed to add to cart')
    }
  }
   
    return(
        <div className="col-md-4 col-sm-6">

            <div className="product-item">

                <div className="product-img">
                
                    <Link to={`/product-description/${plant_id}`}>
                    
                        <img className="primary-img" src={product_img[0]} alt={product_name}/>
                        <img className="secondary-img" src={product_img[1]} alt={product_name}/>
                    
                    </Link>
                    
                    <div className="product-add-action">
                        <ul>
                            <li>
                                <a onClick={()=> handleAddToWishlist()} data-tippy="Add to wishlist" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-theme="sharpborder" style={{ backgroundColor: inCart ? 'red' : '' }}>
                                    <i className="pe-7s-like"></i>
                                </a>
                            </li>
                            <li className="quuickview-btn" data-bs-toggle="modal" data-bs-target="#quickModal">
                                <Link to={`/product-description/${plant_id}`} data-tippy="Quickview" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-theme="sharpborder">
                                    <i className="pe-7s-look"></i>
                                </Link>
                            </li>
                            <li>
                                <a onClick={()=> handleAddToCart()} data-tippy="Add to cart" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-theme="sharpborder" style={{ backgroundColor: inCart ? 'red' : '' }}>
                                    <i className="pe-7s-cart"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="product-content">
                    <Link className="product-name" to="single-product-variable.html">{product_name}</Link>
                    <div className="price-box pb-1">
                        <span className="new-price">{product_price}</span>
                    </div>
                    {/* <div className="rating-box">
                            
                        {generateStarRating(product_ratings)}

                    </div> */}
                </div>
            </div>

        </div>  
    )
}

const generateStarRating = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;
  
    const starArray = [];
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        starArray.push(< FaStar className='class="fa fa-star"' />);
      } else if (hasHalfStar && i === fullStars) {
        starArray.push(<FaStarHalfAlt />);
      } else {
        starArray.push(<FaRegStar />);
      }
    }
  
    return (
        <ul>
                                
            {starArray.map((starType, index) => (

              <React.Fragment key={index} >{ starType }</React.Fragment> 
             ))}

        </ul>
    );
  };