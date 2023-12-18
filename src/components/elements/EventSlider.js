import React from "react";
import Heading from "../elements/displayTitles/Heading";
import AliceCarousel from "react-alice-carousel";
import "../../styles/EventSlider.css";
import Image1Slider from "../../medias/images/events/dorian-hurst-d-igN2ptyC8-unsplash.jpg";

// ***** OBJET With the items of slider *****
const SlideItems = [
    {
        id: 1,
        image: Image1Slider,
        category: "événements à venir",
        title: "Vivez la demi-finale",
        paragraph:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo aspernatur ipsa suscipit nesciunt temporibus, eos nisi.ametconsectetur adipisicing elit. Nemo aspernatur ipsa suscipit nesciunt temporibus, eos nisi.",
    },
    {
        id: 2,
        image: Image1Slider,
        category: "événements à venir",
        title: "Vivez la demi-finale",
        paragraph:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo aspernatur ipsa suscipit nesciunt temporibus, eos nisi.ametconsectetur adipisicing elit. Nemo aspernatur ipsa suscipit nesciunt temporibus, eos nisi.",
    },
    {
        id: 3,
        image: Image1Slider,
        category: "événements à venir",
        title: "Vivez la demi-finale",
        paragraph:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo aspernatur ipsa suscipit nesciunt temporibus, eos nisi.ametconsectetur adipisicing elit. Nemo aspernatur ipsa suscipit nesciunt temporibus, eos nisi.",
    },
];

// ***** Slide component *****

/**
 * Slider component base
 * @param {*} param0
 * @returns React.JSX.Element
 */
const Slider = ({ children, image, category, title, paragraph }) => {
    return (
        <div className="w-full grid md:grid-cols-2">
            <div className="p-0 sm:p-6">
                <Heading variant={"h4"}>{category}</Heading>
                <Heading
                    variant={"h3"}
                    theme={"secondary"}
                    justify={"start"}
                    className={"mb-3"}
                >
                    {title}
                </Heading>
                <p className="tracking-wide leading-relaxed font-light text-gray-800">
                    {paragraph}
                </p>
            </div>
            <div className="relative w-full h-72 md:h-full">
                <img
                    src={image}
                    alt="description de l'événement"
                    className="absolute top-0 left-0 w-full h-full object-cover object-bottom z-0"
                />
            </div>
        </div>
    );
};

// ***** Event Slider component ("box component") *****
/**
 *  Render the Slider on VDOM
 * @returns React.JSX.Element
 */
const EventSlider = () => {
    const items = SlideItems.map((item) => {
        return (
            <Slider
                image={item.image}
                category={item.category}
                title={item.title}
                paragraph={item.paragraph}
            ></Slider>
        );
    });

    return (
        <div className="w-full p-2 sm:p-6 mb-20 shadow-2xl border border-gray-100">
            <div className="w-full h-full">
                <AliceCarousel
                    mouseTracking
                    items={items}
                    autoPlay
                    infinite
                    autoPlayInterval="3000"
                    disableButtonsControls
                />
            </div>
        </div>
    );
};

export default EventSlider;
