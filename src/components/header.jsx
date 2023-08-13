import { NavLink } from "react-router-dom";
export const Header = () => {
  const nav = [
    { to: "/", name: "Home" },
    { to: "/accesories", name: "Accesories" },
    { to: "/catlog", name: "Catlog" },
    { to: "/contact-us", name: "Contact Us" },
  ];

  return (
    <>
      <div className="preloader-activate preloader-active open_tm_preloader">
        <div className="preloader-area-wrap">
          <div className="spinner d-flex justify-content-center align-items-center h-100">
            <div className="bounce1"></div>
            <div className="bounce2"></div>
            <div className="bounce3"></div>
          </div>
        </div>
      </div>
      <div className="main-wrapper">
        <header className="main-header-area">
          <div className="header-top bg-pronia-primary d-none d-lg-block">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-6">
                  <div className="header-top-left">
                    <span className="pronia-offer">
                      HELLO EVERYONE! 25% Off All Products
                    </span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="header-top-right">
                    <ul className="dropdown-wrap">
                      <li className="dropdown">
                        <button
                          className="btn btn-link dropdown-toggle ht-btn"
                          type="button"
                          id="currencyButton"
                          data-bs-toggle="dropdown"
                          aria-label="currency"
                          aria-expanded="false"
                        >
                          USD
                        </button>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="currencyButton"
                        >
                          <li>
                            <NavLink className="dropdown-item" to="#">
                              GBP
                            </NavLink>
                          </li>
                          <li>
                            <NavLink className="dropdown-item" to="#">
                              ISO
                            </NavLink>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <button
                          className="btn btn-link dropdown-toggle ht-btn"
                          type="button"
                          id="languageButton"
                          data-bs-toggle="dropdown"
                          aria-label="language"
                          aria-expanded="false"
                        >
                          English
                        </button>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="languageButton"
                        >
                          <li>
                            <NavLink className="dropdown-item" to="#">
                              French
                            </NavLink>
                          </li>
                          <li>
                            <NavLink className="dropdown-item" to="#">
                              Italian
                            </NavLink>
                          </li>
                          <li>
                            <NavLink className="dropdown-item" to="#">
                              Spanish
                            </NavLink>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="header-middle py-30">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-12">
                  <div className="header-middle-wrap position-relative">
                    <div className="header-contact d-none d-lg-flex">
                      <i className="pe-7s-call"></i>
                      <NavLink to="tel://+00-123-456-789">
                        +00 123 456 789
                      </NavLink>
                    </div>

                    <NavLink to="index.html" className="header-logo">
                      <img src="images/logo/dark.png" alt="Header Logo" />
                    </NavLink>

                    <div className="header-right">
                      <ul>
                        <li>
                          <a
                            href="#exampleModal"
                            className="search-btn bt"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i className="pe-7s-search"></i>
                          </a>
                        </li>
                        <li className="dropdown d-none d-lg-block">
                          <button
                            className="btn btn-link dropdown-toggle ht-btn p-0"
                            type="button"
                            id="stickysettingButton"
                            data-bs-toggle="dropdown"
                            aria-label="setting"
                            aria-expanded="false"
                          >
                            <i className="pe-7s-users"></i>
                          </button>
                          <ul
                            className="dropdown-menu"
                            aria-labelledby="stickysettingButton"
                          >
                            <li>
                              <NavLink
                                className="dropdown-item"
                                to={'/my-account'}
                              >
                                My account
                              </NavLink>
                            </li>
                            <li>
                              <NavLink to={'/auth'}
                                className="dropdown-item"
                              >
                                Login | Register
                              </NavLink>
                            </li>
                          </ul>
                        </li>
                        <li className="d-none d-lg-block">
                          <a href="wishlist.html">
                            <i className="pe-7s-like"></i>
                          </a>
                        </li>
                        <li className="minicart-wrap me-3 me-lg-0">
                          <NavLink to={'/cart'} className="minicart-btn toolbar-btn">
                            <i className="pe-7s-shopbag"></i>
                            <span className="quantity">3</span>
                          </NavLink>
                        </li>
                        <li className="mobile-menu_wrap d-block d-lg-none">
                          <a
                            href="#mobileMenu"
                            className="mobile-menu_btn toolbar-btn pl-0"
                          >
                            <i className="pe-7s-menu"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="header-bottom d-none d-lg-block">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="main-menu position-relative">
                    <nav className="main-nav">
                      <ul>
                        {nav.map((item, index) => (
                          <li key={index}>
                            <NavLink to={item.to}>{item.name}</NavLink>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="header-sticky py-4 py-lg-0">
            <div className="container">
              <div className="header-nav position-relative">
                <div className="row align-items-center">
                  <div className="col-lg-3 col-6">
                    <NavLink to="/" className="header-logo">
                      <img src="images/logo/dark.png" alt="Header Logo" />
                    </NavLink>
                  </div>
                  <div className="col-lg-6 d-none d-lg-block">
                    <div className="main-menu">
                      <nav className="main-nav">
                        <ul>
                          {nav.map((item, index) => (
                            <li key={index}>
                              <NavLink to={item.to}>{item.name}</NavLink>
                            </li>
                          ))}
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <div className="col-lg-3 col-6">
                    <div className="header-right">
                      <ul>
                        <li>
                          <a
                            href="#exampleModal"
                            className="search-btn bt"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i className="pe-7s-search"></i>
                          </a>
                        </li>
                        <li className="dropdown d-none d-lg-block">
                          <button
                            className="btn btn-link dropdown-toggle ht-btn p-0"
                            type="button"
                            id="stickysettingButton"
                            data-bs-toggle="dropdown"
                            aria-label="setting"
                            aria-expanded="false"
                          >
                            <i className="pe-7s-users"></i>
                          </button>
                          <ul
                            className="dropdown-menu"
                            aria-labelledby="stickysettingButton"
                          >
                            <li>
                              <NavLink
                                className="dropdown-item"
                                to="my-account.html"
                              >
                                My account
                              </NavLink>
                            </li>
                            <li>
                              <NavLink
                                className="dropdown-item"
                                to="/auth"
                              >
                                Login | Register
                              </NavLink>
                            </li>
                          </ul>
                        </li>
                        <li className="d-none d-lg-block">
                          <a href="wishlist.html">
                            <i className="pe-7s-like"></i>
                          </a>
                        </li>
                        <li className="minicart-wrap me-3 me-lg-0">
                          <NavLink
                            to="/cart"
                            className="minicart-btn toolbar-btn"
                          >
                            <i className="pe-7s-shopbag"></i>
                            <span className="quantity">3</span>
                          </NavLink>
                        </li>
                        <li className="mobile-menu_wrap d-block d-lg-none">
                          <a
                            href="#mobileMenu"
                            className="mobile-menu_btn toolbar-btn pl-0"
                          >
                            <i className="pe-7s-menu"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mobile-menu_wrapper" id="mobileMenu">
            <div className="offcanvas-body">
              <div className="inner-body">
                <div className="offcanvas-top">
                  <NavLink to="#" className="button-close">
                    <i className="pe-7s-close"></i>
                  </NavLink>
                </div>
                <div className="header-contact offcanvas-contact">
                  <i className="pe-7s-call"></i>
                  <NavLink to="tel://+00-123-456-789">+00 123 456 789</NavLink>
                </div>
                <div className="offcanvas-user-info">
                  <ul className="dropdown-wrap">
                    <li className="dropdown dropdown-left">
                      <button
                        className="btn btn-link dropdown-toggle ht-btn"
                        type="button"
                        id="languageButtonTwo"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        English
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="languageButtonTwo"
                      >
                        <li>
                          <NavLink className="dropdown-item" to="#">
                            French
                          </NavLink>
                        </li>
                        <li>
                          <NavLink className="dropdown-item" to="#">
                            Italian
                          </NavLink>
                        </li>
                        <li>
                          <NavLink className="dropdown-item" to="#">
                            Spanish
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <button
                        className="btn btn-link dropdown-toggle ht-btn usd-dropdown"
                        type="button"
                        id="currencyButtonTwo"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        USD
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="currencyButtonTwo"
                      >
                        <li>
                          <NavLink className="dropdown-item" to="#">
                            GBP
                          </NavLink>
                        </li>
                        <li>
                          <NavLink className="dropdown-item" to="#">
                            ISO
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <button
                        className="btn btn-link dropdown-toggle ht-btn p-0"
                        type="button"
                        id="settingButtonTwo"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="pe-7s-users"></i>
                      </button>
                      <ul
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="settingButtonTwo"
                      >
                        <li>
                          <NavLink
                            className="dropdown-item"
                            to="/my-account"
                          >
                            My account
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            className="dropdown-item"
                            to="/auth"
                          >
                            Login | Register
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <NavLink to="wishlist.html">
                        <i className="pe-7s-like"></i>
                      </NavLink>
                    </li>
                  </ul>
                </div>
                <div className="offcanvas-menu_area">
                  <nav className="offcanvas-navigation">
                    <ul className="mobile-menu">
                      {nav.map((item, index) => (
                        <li key={index}>
                          <NavLink to={item.to}>
                            <span className="mm-text">{item.name}</span>
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>

          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModal"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-fullscreen">
              <div className="modal-content modal-bg-dark">
                <div className="modal-header">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    data-tippy="Close"
                    data-tippy-inertia="true"
                    data-tippy-animation="shift-away"
                    data-tippy-delay="50"
                    data-tippy-arrow="true"
                    data-tippy-theme="sharpborder"
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="modal-search">
                    <span className="searchbox-info">
                      Start typing and press Enter to search or ESC to close
                    </span>
                    <form action="#" className="hm-searchbox">
                      <input
                        type="text"
                        name="Search..."
                        value="Search..."
                        onBlur={() => {}}
                        onFocus={() => {}}
                        onChange={() => {}}
                        autoComplete="off"
                      />
                      <button
                        className="search-btn"
                        type="submit"
                        aria-label="searchbtn"
                      >
                        <i className="pe-7s-search"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="offcanvas-minicart_wrapper" id="miniCart">
            <div className="offcanvas-body">
              <div className="minicart-content">
                <div className="minicart-heading">
                  <h4 className="mb-0">Shopping Cart</h4>
                  <NavLink to="#" className="button-close">
                    <i
                      className="pe-7s-close"
                      data-tippy="Close"
                      data-tippy-inertia="true"
                      data-tippy-animation="shift-away"
                      data-tippy-delay="50"
                      data-tippy-arrow="true"
                      data-tippy-theme="sharpborder"
                    ></i>
                  </NavLink>
                </div>
                <ul className="minicart-list">
                  <li className="minicart-product">
                    <NavLink className="product-item_remove" to="#">
                      <i
                        className="pe-7s-close"
                        data-tippy="Remove"
                        data-tippy-inertia="true"
                        data-tippy-animation="shift-away"
                        data-tippy-delay="50"
                        data-tippy-arrow="true"
                        data-tippy-theme="sharpborder"
                      ></i>
                    </NavLink>
                    <NavLink
                      to="single-product-variable.html"
                      className="product-item_img"
                    >
                      <img
                        className="img-full"
                        src="images/product/small-size/2-1-70x78.png"
                        alt="Product Image"
                      />
                    </NavLink>
                    <div className="product-item_content">
                      <NavLink
                        className="product-item_title"
                        to="single-product-variable.html"
                      >
                        American Marigold
                      </NavLink>
                      <span className="product-item_quantity">1 x $23.45</span>
                    </div>
                  </li>
                  <li className="minicart-product">
                    <NavLink className="product-item_remove" to="#">
                      <i
                        className="pe-7s-close"
                        data-tippy="Remove"
                        data-tippy-inertia="true"
                        data-tippy-animation="shift-away"
                        data-tippy-delay="50"
                        data-tippy-arrow="true"
                        data-tippy-theme="sharpborder"
                      ></i>
                    </NavLink>
                    <NavLink
                      to="single-product-variable.html"
                      className="product-item_img"
                    >
                      <img
                        className="img-full"
                        src="images/product/small-size/2-2-70x78.png"
                        alt="Product Image"
                      />
                    </NavLink>
                    <div className="product-item_content">
                      <NavLink
                        className="product-item_title"
                        to="single-product-variable.html"
                      >
                        Black Eyed Susan
                      </NavLink>
                      <span className="product-item_quantity">1 x $25.45</span>
                    </div>
                  </li>
                  <li className="minicart-product">
                    <NavLink className="product-item_remove" to="#">
                      <i
                        className="pe-7s-close"
                        data-tippy="Remove"
                        data-tippy-inertia="true"
                        data-tippy-animation="shift-away"
                        data-tippy-delay="50"
                        data-tippy-arrow="true"
                        data-tippy-theme="sharpborder"
                      ></i>
                    </NavLink>
                    <NavLink
                      to="single-product-variable.html"
                      className="product-item_img"
                    >
                      <img
                        className="img-full"
                        src="images/product/small-size/2-3-70x78.png"
                        alt="Product Image"
                      />
                    </NavLink>
                    <div className="product-item_content">
                      <NavLink
                        className="product-item_title"
                        to="single-product-variable.html"
                      >
                        Bleeding Heart
                      </NavLink>
                      <span className="product-item_quantity">1 x $30.45</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="minicart-item_total">
                <span>Subtotal</span>
                <span className="ammount">$79.35</span>
              </div>
              <div className="group-btn_wrap d-grid gap-2">
                <NavLink to="cart.html" className="btn btn-dark">
                  View Cart
                </NavLink>
                <NavLink to="checkout.html" className="btn btn-dark">
                  Checkout
                </NavLink>
              </div>
            </div>
          </div>
          <div className="global-overlay"></div>
        </header>
      </div>
    </>
  );
};
