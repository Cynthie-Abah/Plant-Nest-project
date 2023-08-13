import React, { useContext } from 'react'
import { ProductObjectContext } from './ProductContext';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

export const ProductImgs = () => {

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

    const productObject = useContext(ProductObjectContext);

  return (
<div className="col-lg-6" >

    <div className="single-product-img">

        <div className="swiper-container single-product-slider">

            <OwlCarousel
                className=".owl-theme"
                items={1}
                loop={true}
                animateIn={"fadeIn"}
                autoplayTimeout={3000}
                nav={true}
                navText={[<FaCaretLeft />, <FaCaretRight />]}
                autoplayHoverPause={false}
            >

                <div className="swiper-slide">
                    <a href={productObject?.image_url[0]} className="single-img gallery-popup">
                        <img className="img-full" src={productObject?.image_url[0]} alt={productObject?.name}/>
                    </a>
                </div>

                <div className="swiper-slide">
                    <a href={productObject?.image_url[1]} className="single-img gallery-popup">
                        <img className="img-full" src={productObject?.image_url[1]} alt={productObject?.name}/>
                    </a>
                </div>

            </OwlCarousel>
        </div>

        <div className="thumbs-arrow-holder">
            <div className="swiper-container single-product-thumbs">


            <OwlCarousel
                className=".owl-theme"
                items={1}
                loop={true}
                animateIn={"fadeIn"}
                autoplayTimeout={3000}
                nav={true}
                navText={[<FaCaretLeft />, <FaCaretRight />]}
                autoplayHoverPause={false}
            >

                    <a href="#" className="swiper-slide">
                        <img className="img-full" src={productObject?.image_url[1]} alt={productObject?.name}/>
                    </a>

                    <a href="#" className="swiper-slide">
                        <img className="img-full" src={productObject?.image_url[0]} alt={productObject?.name}/>
                    </a>

            </OwlCarousel>
            </div>
        </div>
    </div>
</div>
  )
}
