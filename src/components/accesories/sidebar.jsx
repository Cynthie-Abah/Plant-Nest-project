export const SideBar = ()=>{
    return (
        <div className="sidebar-area">
        <div className="widgets-searchbox">
          <form id="widgets-searchbox">
            <input
              className="input-field"
              type="text"
              placeholder="Search"
              onChange={()=>{}}
            />
            <button className="widgets-searchbox-btn" type="submit">
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>
        <div className="widgets-area">
          <div className="widgets-item pt-0">
            <h2 className="widgets-title mb-4">Categories</h2>
            <ul className="widgets-category">
              <li>
                <a href="#">
                  <i className="fa fa-chevron-right"></i>
                  All <span>(65)</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-chevron-right"></i>
                  Bansai <span>(12)</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-chevron-right"></i>
                  House Plants <span>(22)</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-chevron-right"></i>
                  Indoor Living <span>(19)</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-chevron-right"></i>
                  Perennnials <span>(17)</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-chevron-right"></i>
                  Plant For Gift <span>(01)</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-chevron-right"></i>
                  Garden Tools <span>(12)</span>
                </a>
              </li>
            </ul>
          </div>
          {/* <div className="widgets-item">
            <h2 className="widgets-title mb-4">Color</h2>
            <ul className="widgets-category widgets-color">
              <li>
                <a href="#">
                  <i className="fa fa-chevron-right"></i>
                  All <span>(65)</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-chevron-right"></i>
                  Gold <span>(12)</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-chevron-right"></i>
                  Green <span>(22)</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-chevron-right"></i>
                  white <span>(13)</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-chevron-right"></i>
                  Black <span>(10)</span>
                </a>
              </li>
            </ul>
          </div> */}
          <div className="widgets-item widgets-filter">
            <h2 className="widgets-title mb-4">Price Filter</h2>
            <div className="price-filter">
              <input
                type="text"
                className="pronia-range-slider"
                name="pronia-range-slider"
                
                data-type="double"
                data-min="16"
                data-from="16"
                data-to="300"
                data-max="350"
                data-grid="false"
              />
            </div>
          </div>
          {/* <div className="widgets-item">
            <h2 className="widgets-title mb-4">Populer Tags</h2>
            <ul className="widgets-tag">
              <li>
                <a href="#">Fashion</a>
              </li>
              <li>
                <a href="#">Organic</a>
              </li>
              <li>
                <a href="#">Old Fashion</a>
              </li>
              <li>
                <a href="#">Men</a>
              </li>
              <li>
                <a href="#">Fashion</a>
              </li>
              <li>
                <a href="#">Dress</a>
              </li>
            </ul>
          </div> */}
        </div>
        <div className="banner-item widgets-banner img-hover-effect">
          <div className="banner-img">
            <img
              src="https://images.pexels.com/photos/4503751/pexels-photo-4503751.jpeg"
              alt="Banner Image"
            />
          </div>
          <div className="banner-content text-position-center">
            <span className="collection">New Collection</span>
            <h3 className="title">Plant Port</h3>
            <div className="button-wrap">
              <a
                className="btn btn-custom-size sm-size btn-pronia-primary"
                href="#"
              >
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </div>
    )
}