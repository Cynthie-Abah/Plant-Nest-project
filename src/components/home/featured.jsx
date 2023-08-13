export const Featured = ({title,items})=>{
    return(
        <div className="container mb-5">
                <div className="section-title-wrap mb-5">
                    <h2 className="section-title mb-0" style={{fontSize:"1.2rem"}}>{title}</h2>
                </div>
                <div className="product-item-wrap row">
                        {
                            items.map((item,index) => (
                                <div key={index} className="col-xl-3 col-md-4 col-sm-6">
                                <div className="product-item">
                                        <div className="product-img">
                                            <a href="shop.html">
                                                    <img className="primary-img" src="images/product/medium-size/1-2-270x300.jpg" alt="Product Images"/>
                                                    <img className="secondary-img" src="images/product/medium-size/1-3-270x300.jpg" alt="Product Images"/>
                                                </a>

                                                <div className="product-add-action">
                                                    <ul>
                                                        <li>
                                                            <a href="wishlist.html" data-tippy="Add to wishlist" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-theme="sharpborder">
                                                                <i className="pe-7s-like"></i>
                                                            </a>
                                                        </li>
                                                        <li className="quuickview-btn" data-bs-toggle="modal" data-bs-target="#quickModal">
                                                            <a href="#" data-tippy="Quickview" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-theme="sharpborder">
                                                                <i className="pe-7s-look"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="cart.html" data-tippy="Add to cart" data-tippy-inertia="true" data-tippy-animation="shift-away" data-tippy-delay="50" data-tippy-arrow="true" data-tippy-theme="sharpborder">
                                                                <i className="pe-7s-cart"></i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                        </div>
                                        <div className="product-content">
                                                <a className="product-name" href="shop.html">Black Eyed Susan</a>
                                                <div className="price-box pb-1">
                                                    <span className="new-price">$25.45</span>
                                                </div>
                                                <div className="rating-box">
                                                    <ul>
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star"></i></li>
                                                    </ul>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                            ))
                        }
                </div>
               
            </div>
    )
}