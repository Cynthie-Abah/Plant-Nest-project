import { useEffect } from "react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../assets/scss/_slider.scss";

import { Featured } from "../components/home/featured";
import { FeaturedCategories } from "../components/home/featuredcategories";
import { FeaturedCategoriesNav } from "../components/home/featuredcategoriesnav";
import "../components/home/style.css";

const Home = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const values = {
    loop: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    items: 1,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };
  const featuredCategories = [
    { name: "Flowering", items: [1, 2, 3, 4] },
    { name: "Non Flowering", items: [1, 2, 3] },
    { name: "Indoors", items: [1, 2, 3, 4, 5] },
  ];

  const sliders = [
    "https://images.pexels.com/photos/2568458/pexels-photo-2568458.jpeg",
    "https://images.pexels.com/photos/5691862/pexels-photo-5691862.jpeg",
    "https://images.pexels.com/photos/2845269/pexels-photo-2845269.jpeg",
    "https://images.pexels.com/photos/2253844/pexels-photo-2253844.jpeg",
    "https://images.pexels.com/photos/7354448/pexels-photo-7354448.jpeg",
    "https://images.pexels.com/photos/74512/pexels-photo-74512.jpeg",
  ];

  const sliders2 = [
    "https://images.pexels.com/photos/9414266/pexels-photo-9414266.jpeg",
    "https://images.pexels.com/photos/2374967/pexels-photo-2374967.jpeg",
    "https://images.pexels.com/photos/3263719/pexels-photo-3263719.jpeg",
    "https://images.pexels.com/photos/3952024/pexels-photo-3952024.jpeg",
  ];
  return (
    <>
      {/* <!-- Begin Slider Area --> */}
      <div className="slider-area">
        {/* <!-- Main Slider --> */}
        <div className="swiper-container main-slider swiper-arrow with-bg_white">
          <div className="swiper-wrapper">
            <OwlCarousel
              className=".owl-theme"
              items={1}
              loop={true}
              autoplay={true}
              animateIn={"fadeIn"}
              autoplayTimeout={3000}
              nav={true}
              navText={[<FaCaretLeft />, <FaCaretRight />]}
              autoplayHoverPause={true}
            >
              <div className="swiper-slide animation-style-01 ">
                <div
                  className="slide-inner bg-width style-1 bg-height"
                  style={{ background: "url(images/slider/bg/1-1.jpg)" }}
                  data-bg-image="assets/"
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-6 order-2 order-lg-1 align-self-center">
                        <div className="slider-content text-black">
                          <span
                            className="offer"
                            data-aos-duration="1800"
                            data-aos={"fade-up"}
                          >
                            65% Off
                          </span>
                          <h2
                            className="title"
                            data-aos-duration="2000"
                            data-aos={"fade-up"}
                          >
                            New Plant
                          </h2>
                          <p
                            className="short-desc"
                            data-aos-duration="2300"
                            data-aos={"fade-up"}
                          >
                            Pronia, With 100% Natural, Organic & Plant Shop.
                          </p>
                          <div
                            className="btn-wrap"
                            data-aos-duration="1600"
                            data-aos={"zoom-in-up"}
                            data-aos-easing="linear"
                          >
                            <a
                              className="btn btn-custom-size xl-size btn-pronia-primary"
                              href="shop.html"
                            >
                              Discover Now
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-8 offset-md-2 offset-lg-0 order-1 order-lg-2">
                        <div className="inner-img">
                          <div className="scene fill">
                            <div
                              className="expand-width"
                              data-depth="0.2"
                              data-aos-duration="2000"
                              data-aos={"zoom-in-up"}
                              data-aos-easing="linear"
                            >
                              <img
                                src="https://images.pexels.com/photos/797793/pexels-photo-797793.jpeg?cs=srgb&dl=pexels-vasanth-babu-797793.jpg&fm=jpg"
                                width={542}
                                height={617}
                                alt="Inner Image"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide animation-style-01 animate__animated animate__fadeUp">
                <div
                  className="slide-inner style-1 bg-height"
                  style={{ background: "url(images/slider/bg/1-1.jpg)" }}
                  data-bg-image="assets/"
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-6 order-2 order-lg-1 align-self-center">
                        <div className="slider-content text-black">
                          <span className="offer">65% Off</span>
                          <h2 className="title">New Plant</h2>
                          <p className="short-desc">
                            Pronia, With 100% Natural, Organic & Plant Shop.
                          </p>
                          <div className="btn-wrap">
                            <a
                              className="btn btn-custom-size xl-size btn-pronia-primary"
                              href="shop.html"
                            >
                              Discover Now
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-8 offset-md-2 offset-lg-0 order-1 order-lg-2">
                        <div className="inner-img">
                          <div className="scene fill">
                            <div className="expand-width" data-depth="0.2">
                              <img
                                src="images/slider/inner-img/1-1-524x617.png"
                                alt="Inner Image"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="swiper-slide animation-style-01">
                <div
                  className="slide-inner style-1 bg-height"
                  style={{ background: "url(images/slider/bg/1-1.jpg)" }}
                  data-bg-image="assets/"
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-6 order-2 order-lg-1 align-self-center">
                        <div className="slider-content text-black">
                          <span className="offer">65% Off</span>
                          <h2 className="title">New Plant</h2>
                          <p className="short-desc">
                            Pronia, With 100% Natural, Organic & Plant Shop.
                          </p>
                          <div className="btn-wrap">
                            <a
                              className="btn btn-custom-size xl-size btn-pronia-primary"
                              href="shop.html"
                            >
                              Discover Now
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-8 offset-md-2 offset-lg-0 order-1 order-lg-2">
                        <div className="inner-img">
                          <div className="scene fill">
                            <div className="expand-width" data-depth="0.2">
                              <img
                                src="images/slider/inner-img/1-1-524x617.png"
                                alt="Inner Image"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>

      <div className="slider-area">
        {/* <!-- Main Slider --> */}
        <div className="swiper-container main-slider swiper-arrow with-bg_white">
          <div className="swiper-wrapper">
            <div className="swiper-slide animation-style-01">
              <div
                className="slide-inner style-1 bg-height"
                data-bg-image="assets/images/slider/bg/1-1.jpg"
              >
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6 order-2 order-lg-1 align-self-center">
                      <div className="slide-content text-black">
                        <span className="offer">65% Off</span>
                        <h2 className="title">New Plant</h2>
                        <p className="short-desc">
                          Pronia, With 100% Natural, Organic & Plant Shop.
                        </p>
                        <div className="btn-wrap">
                          <a
                            className="btn btn-custom-size xl-size btn-pronia-primary"
                            href="shop.html"
                          >
                            Discover Now
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-8 offset-md-2 offset-lg-0 order-1 order-lg-2">
                      <div className="inner-img">
                        <div className="scene fill">
                          <div className="expand-width" data-depth="0.2">
                            <img
                              src="assets/images/slider/inner-img/1-1-524x617.png"
                              alt="Inner Image"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide animation-style-01">
              <div
                className="slide-inner style-1 bg-height"
                data-bg-image="assets/images/slider/bg/1-1.jpg"
              >
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6 order-2 order-lg-1 align-self-center">
                      <div className="slide-content text-black">
                        <span className="offer">65% Off</span>
                        <h2 className="title">New Plant</h2>
                        <p className="short-desc">
                          Pronia, With 100% Natural, Organic & Plant Shop.
                        </p>
                        <div className="btn-wrap">
                          <a
                            className="btn btn-custom-size xl-size btn-pronia-primary"
                            href="shop.html"
                          >
                            Discover Now
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-8 offset-md-2 offset-lg-0 order-1 order-lg-2">
                      <div className="inner-img">
                        <div className="scene fill">
                          <div className="expand-width" data-depth="0.2">
                            <img
                              src="assets/images/slider/inner-img/1-2-524x617.png"
                              alt="Inner Image"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Add Pagination --> */}
          <div className="swiper-pagination d-md-none"></div>

          {/* <!-- Add Arrows --> */}
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </div>

      {/* <!-- Begin Shipping Area --> */}
      <div className="shipping-area section-space-top-100">
        <div className="container">
          <div className="shipping-bg">
            <div className="row shipping-wrap">
              <div className="col-lg-4 col-md-6">
                <div className="shipping-item">
                  <div className="shipping-img">
                    <img
                      src="images/shipping/icon/car.png"
                      alt="Shipping Icon"
                    />
                  </div>
                  <div className="shipping-content">
                    <h2 className="title">Free Shipping</h2>
                    <p className="short-desc mb-0">Capped at $319 per order</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-4 mt-md-0">
                <div className="shipping-item">
                  <div className="shipping-img">
                    <img
                      src="images/shipping/icon/card.png"
                      alt="Shipping Icon"
                    />
                  </div>
                  <div className="shipping-content">
                    <h2 className="title">Safe Payment</h2>
                    <p className="short-desc mb-0">With our payment gateway</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
                <div className="shipping-item">
                  <div className="shipping-img">
                    <img
                      src="images/shipping/icon/service.png"
                      alt="Shipping Icon"
                    />
                  </div>
                  <div className="shipping-content">
                    <h2 className="title">Best Services</h2>
                    <p className="short-desc mb-0">
                      Friendly & Supper Services
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Shipping Area End Here --> */}
      {/* Featured Products */}
      <div className="product-area section-space-top-100">
        <Featured title={"Our Collection"} items={[1, 2, 3, 4]} />
        <Featured title={"New Arrivals"} items={[1, 2, 3, 4]} />
      </div>
      {/* Featired Product ends here */}

      <div className="container mb-5 py-5 intro">
        <div className="row align-items-center mb-5">
          <div className="col-xl-6 col-md-4 col-sm-6 ">
            <h1>
              {"We're"} passionate about plants, and we want to help you bring
              the beauty of nature into your life.
            </h1>
            <p>
              We are a passionate team of plant lovers who are committed to
              bringing the beauty of nature to your home or office. We offer a
              wide selection of plants, from easy-care succulents to exotic
              orchids. We also have a variety of plant care products and
              accessories to help you keep your plants healthy and thriving.
            </p>
          </div>
          <div className="col-xl-6 col-md-4 col-sm-6 ">
            <div style={{ height: "400px" }}>
              <img
                src="https://images.pexels.com/photos/6069696/pexels-photo-6069696.jpeg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-lg-12">
            <ul
              className="nav product-tab-nav tab-style-1"
              id="myTab"
              role="tablist"
            >
              {featuredCategories.map((item, index) => (
                <FeaturedCategoriesNav
                  key={index}
                  index={index}
                  name={item.name}
                />
              ))}
            </ul>
          </div>
          <div className="tab-content" id="myTabContent">
            {featuredCategories.map((item, index) => (
              <FeaturedCategories
                key={index}
                id={item.name}
                index={index}
                items={item.items}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="container intro my-5 py-5">
        <div className="row align-items-center mb-5">
          <div className="col-xl-6 col-md-4 col-sm-6 ">
            <div className="row">
              <div
                className="col-xl-6 col-md-4 col-sm-6 "
                style={{ height: "400px" }}
              >
                <img
                  src="https://images.pexels.com/photos/4505458/pexels-photo-4505458.jpeg"
                  alt=""
                />
              </div>

              <div
                className="col-xl-6 col-md-4 col-sm-6 "
                style={{ height: "400px" }}
              >
                <img
                  src="https://images.pexels.com/photos/305827/pexels-photo-305827.jpeg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-md-4 col-sm-6 ">
            <h1>
              Bring the Outdoors In with Our Stunning Collection of Plants
            </h1>
            <p>
              Looking for a way to add some life and freshness to your home?
              Look no further than our stunning collection of plants! We have a
              wide variety of plants to choose from, so you're sure to find the
              perfect one to fit your style and needs. Our plants are all
              hand-picked and cared for by our expert staff, so you can be sure
              they're healthy and thriving. We also offer free shipping on
              orders over $50, so you can get your plants delivered right to
              your door without any hassle.
            </p>
          </div>
        </div>
      </div>
      {/* Slider */}
      <div className="container">
        <div className="section-title-wrap mb-5">
          <h2 className="section-title mb-0" style={{ fontSize: "1.2rem" }}>
            Our Gallery
          </h2>
        </div>
        <swiper-container
          className="mySwiper"
          space-between="10"
          slides-per-view="4"
          autoplay-delay="2500"
        >
          {sliders.map((slide, index) => (
            <swiper-slide key={index} style={{ height: "200px" }}>
              <img
                src={slide}
                alt=""
                className="w-100 h-100"
                style={{ objectFit: "cover", borderRadius: "5px" }}
              />
            </swiper-slide>
          ))}
        </swiper-container>
        <div className="py-2">
          <swiper-container
            className="mySwiper"
            space-between="10"
            slides-per-view="4"
            autoplay-delay="3500"
          >
            {sliders2.map((slide, index) => (
              <swiper-slide key={index} style={{ height: "200px" }}>
                <img
                  src={slide}
                  alt=""
                  className="w-100 h-100"
                  style={{ objectFit: "cover", borderRadius: "5px" }}
                />
              </swiper-slide>
            ))}
          </swiper-container>
        </div>
      </div>
      {/* Slider */}

      {/* Intro */}
      <div className="container my-5 py-5">
        <div className="row align-items-center">
          <div className="col-xl-6 col-md-4 col-sm-6 d-flex justify-content-center align-items-center">
            <div style={{ height: "300px", width: "300px" }}>
              <img
                src="https://images.pexels.com/photos/1201798/pexels-photo-1201798.jpeg"
                alt=""
                className="w-100 h-100 object-fit-cover"
                style={{
                  borderRadius: "5px",
                  outline: "1px dashed #abd373",
                  outlineOffset: "10px",
                }}
              />
            </div>
          </div>
          <div className="col-xl-6 col-md-4 col-sm-6">
            <h1 className="text-capitalize">
              A brief introduction about Plantnest
            </h1>
            <p>
              Welcome to our enchanting online plant emporium, where nature's
              beauty meets online convenience! Nestled in the heart of the
              digital realm, our store is a botanical haven that's as cute and
              lovely as a blooming garden in spring. With a curated collection
              of the most exquisite plants, we invite you to explore a world of
              verdant wonder right at your fingertips. Whether you're an
              experienced horticulturist or a budding green thumb, our charming
              selection is sure to captivate your senses and add a touch of
              natural elegance to your space. Step into a realm where every leaf
              and petal tells a story of beauty, growth, and the undeniable
              magic of the plant kingdom.
            </p>
            <p></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
