import React, {useContext, useState} from 'react'
import { ProductObjectContext } from './ProductContext';
import { Link, useNavigate } from 'react-router-dom/dist';
import axios from 'axios';


export const ProductContent = () => {

    const productObject = useContext(ProductObjectContext);
    const [quantityValue, setQuantityValue] = useState(1); 
    const navigate  = useNavigate();
    const storedUser = JSON.parse(localStorage.getItem("user"));

    const [inCart, setInCart] = useState(false);

    const handleAddToWishlist = async ()=>{

        const raw = {
            // the user id should be stored in session 
            user_id : storedUser.user_id,
            product_id : productObject.plant_id,
            qauntity: quantityValue,
        };
    
        const requestOptions = {
        method: 'POST',
        body: raw,
        redirect: 'follow'
        };
        try {
    
        const response = await axios.get("https://plant-nest.onrender.com/api/v1/wishlist/add", requestOptions)
        console.log(response);
        setInCart(true) 
    
        } catch (error) {
            console.error(error)
            alert('failed to add to wishlist')
        }
      }

    const handleAddToCart = async ()=>{



        const raw = {
            // the user id should be stored in session 
            user_id : storedUser.user_id,
            product_id : productObject.plant_id,
            qauntity: quantityValue,
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
        navigate('/cart')
    
        } catch (error) {
            console.error(error)
            alert('failed to add to cart')
        }
      }

    const handleIncrement = () => {

          if (quantityValue <  productObject?.quantity ) {

                setQuantityValue(quantityValue + 1);
           }
    }

    const handleDecrement = () =>{
        if (quantityValue > 0) {
            setQuantityValue(quantityValue - 1);
          }
    }


  return (
    <div class="col-lg-6 pt-5 pt-lg-0">
        <div class="single-product-content">

            <h2 class="title">{productObject?.name}</h2>

            <div class="price-box">
                <span class="new-price">$ {productObject?.price}</span>
            </div>
            {/* wait for martins to fix this  */}
            <div class="rating-box-wrap pb-4">
                <div class="rating-box">
                    <ul>
                        <li><i class="fa fa-star"></i></li>
                        <li><i class="fa fa-star"></i></li>
                        <li><i class="fa fa-star"></i></li>
                        <li><i class="fa fa-star"></i></li>
                        <li><i class="fa fa-star"></i></li>
                    </ul>
                </div>
                <div class="review-status">
                    <a href="#">( 1 Review )</a>
                </div>
            </div>

            <p class="short-desc">{productObject?.description}</p>
        
            <ul class="quantity-with-btn">
            <div className=" quantity">

                <div className="cart-plus-minus">
                    <input className="cart-plus-minus-box" readOnly value={quantityValue}  type="text"/>
                    <div className="dec qtybutton">
                        <i className="fa fa-minus" onClick={() => handleDecrement()}></i>
                    </div>
                    <div className="inc qtybutton">
                        <i className="fa fa-plus" onClick={() => handleIncrement()}></i>
                    </div>
                </div>

            </div>
                <li class="add-to-cart">
                    <button class="btn btn-custom-size lg-size btn-pronia-primary" onClick={()=>{ handleAddToCart();}} disabled={ productObject?.is_available === 0 } > { productObject?.is_available === 0 ? 'Out of Stock ' : 'Add to Cart'} </button>
                </li>
                <li class="wishlist-btn-wrap">
                    <a onClick={()=> handleAddToWishlist()} class="custom-circle-btn">
                        <i class="pe-7s-like"></i>
                    </a>
                </li>
            </ul>

            <ul class="service-item-wrap">

                <li class="service-item">
                    <div class="service-img">
                        <img src="images/shipping/icon/car.png" alt="Shipping Icon"/>
                    </div>
                    <div class="service-content">
                        <span class="title">Free <br/> Shipping</span>
                    </div>
                </li>
                <li class="service-item">
                    <div class="service-img">
                        <img src="images/shipping/icon/card.png" alt="Shipping Icon"/>
                    </div>
                    <div class="service-content">
                        <span class="title">Safe <br/> Payment</span>
                    </div>
                </li>
                <li class="service-item">
                    <div class="service-img">
                        <img src="images/shipping/icon/service.png" alt="Shipping Icon"/>
                    </div>
                    <div class="service-content">
                        <span class="title">Safe <br/> Payment</span>
                    </div>
                </li>
            </ul>
            
            <div class="product-category">
                <span class="title">Categories :</span>
                <ul>
                    <li>
                        <a href="#">{productObject?.category_name}</a>
                    </li>
                </ul>
            </div>

            <div class="product-category product-tags">
                <span class="title">Tags :</span>
                <ul>
                    <li>
                        <a href="#">{productObject?.category_name}</a>
                    </li>
                </ul>
            </div>

            <div class="product-category social-link align-items-center pb-0">
                <span class="title pe-3">Share:</span>
                <ul>
                    <li>
                        <a href="#" data-tippy="Pinterest" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-theme="sharpborder">
                            <i class="fa fa-pinterest-p"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" data-tippy="Twitter" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-theme="sharpborder">
                            <i class="fa fa-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" data-tippy="Tumblr" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-theme="sharpborder">
                            <i class="fa fa-tumblr"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" data-tippy="Dribbble" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-theme="sharpborder">
                            <i class="fa fa-dribbble"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
