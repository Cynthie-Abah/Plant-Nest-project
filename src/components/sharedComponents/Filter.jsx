import React, { useContext, useState } from 'react'
import { ProductContext } from '../catlog/ProductContext';

const Filter = ({setProducts}) => {

    const products = useContext(ProductContext);
    const [searchInput, setSearchInput] = useState();

    const uniqueCategories = [];

    products?.forEach(product => {
      if (!uniqueCategories.includes(product.category_name)) {
    
        uniqueCategories.push(product.category_name);

      }
    });

    console.log(uniqueCategories);

  return (
    <div className="col-xl-3 col-lg-4 order-2 order-lg-1 pt-5 pt-lg-0">
        <div className="sidebar-area">
                {/* SEARCH BOX */}
            <div className="widgets-searchbox">
                <form id="widgets-searchbox">
                    <input className="input-field" type="text" onChange={(e)=> setSearchInput(e.target.value)} placeholder="Search"/>
                    <button className="widgets-searchbox-btn" type="submit">
                        <i className="fa fa-search"></i>
                    </button>
                </form>
            </div>

            <div className="widgets-area">
                {/* CATEGORIES */}
                <div className="widgets-item pt-0">
                    <h2 className="widgets-title mb-4">Categories</h2>
                    <ul className="widgets-category">

                    <li>
                        <a>
                            <i className="fa fa-chevron-right"></i>
                            All <span>({products?.length})</span>
                        </a>
                    </li>

                        {
                            uniqueCategories.map((index,category)=>{

                                return(
                                    <li key={index} >
                                        <a>
                                            <button>
                                            <i className="fa fa-chevron-right"></i>
                                            {category}
                                            </button>
                                           
                                        </a>
                                    </li>
                                )

                            })
                        }

                        

                        {/* <li>
                            <a>
                                <i className="fa fa-chevron-right"></i>
                                Bansai <span>(12)</span>
                            </a>
                        </li>

                        <li>
                            <a>
                                <i className="fa fa-chevron-right"></i>
                                House Plants <span>(22)</span>
                            </a>
                        </li>

                        <li>
                            <a>
                                <i className="fa fa-chevron-right"></i>
                                Indoor Living <span>(19)</span>
                            </a>
                        </li>

                        <li>
                            <a>
                                <i className="fa fa-chevron-right"></i>
                                Perennnials <span>(17)</span>
                            </a>
                        </li>

                        <li>
                            <a>
                                <i className="fa fa-chevron-right"></i>
                                Plant For Gift <span>(01)</span>
                            </a>
                        </li>

                        <li>
                            <a>
                                <i className="fa fa-chevron-right"></i>
                                Garden Tools <span>(12)</span>
                            </a>
                        </li> */}
                    </ul>
                </div>
                {/* COLOR */}
                {/* <div className="widgets-item">
                    <h2 className="widgets-title mb-4">Color</h2>
                    <ul className="widgets-category widgets-color">
                        <li>
                            <a>
                                <i className="fa fa-chevron-right"></i>
                                All <span>(65)</span>
                            </a>
                        </li>
                        <li>
                            <a>
                                <i className="fa fa-chevron-right"></i>
                                Gold <span>(12)</span>
                            </a>
                        </li>
                        <li>
                            <a>
                                <i className="fa fa-chevron-right"></i>

                                Green <span>(22)</span>
                            </a>
                        </li>
                        <li>
                            <a>
                                <i className="fa fa-chevron-right"></i>
                                white <span>(13)</span>
                            </a>
                        </li>
                        <li>
                            <a>
                                <i className="fa fa-chevron-right"></i>
                                Black <span>(10)</span>
                            </a>
                        </li>
                    </ul>
                </div> */}
                    {/* PRICE FILTER */}
                {/* <div className="widgets-item widgets-filter">
                    <h2 className="widgets-title mb-4">Price Filter</h2>
                    <div className="price-filter">
                        <input type="text" className="pronia-range-slider" name="pronia-range-slider" value="" data-type="double" data-min="16" data-from="16" data-to="300" data-max="350" data-grid="false" />
                    </div>
                </div> */}
                    {/* POPULAR TAGS */}
                {/* <div className="widgets-item">
                    <h2 className="widgets-title mb-4">Populer Tags</h2>
                    <ul className="widgets-tag">
                        <li>
                            <a>Fashion</a>
                        </li>
                        <li>
                            <a>Organic</a>
                        </li>
                        <li>
                            <a>Old Fashion</a>
                        </li>
                        <li>
                            <a>Men</a>
                        </li>
                        <li>
                            <a>Fashion</a>
                        </li>
                        <li>
                            <a>Dress</a>
                        </li>
                    </ul>
                </div> */}

            </div>
                {/* COLLECTIONS */}
            <div className="banner-item widgets-banner img-hover-effect">
                <div className="banner-img">
                    <img src="images/sidebar/banner/1-270x300.jpg" alt="Banner Image"/>
                </div>
                <div className="banner-content text-position-center">
                    <span className="collection">New Collection</span>
                    <h3 className="title">Plant Port</h3>
                    <div className="button-wrap">
                        <a className="btn btn-custom-size sm-size btn-pronia-primary">Shop
                            Now</a>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Filter