import React from "react";
import Slider from "react-slick";

/*************  ✨ Windsurf Command ⭐  *************/
/**
 * A React component that renders a slider with six slides.
 *
 * @return {ReactElement} A React element representing the slider.
 */

/*******  1e07b859-0af4-4a95-95b3-51884b79548a  *******/
export default function Slide({ children }) {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
    };
    return (
        <Slider {...settings}>
            {children}
        </Slider>
    );
}