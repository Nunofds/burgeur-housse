import React from "react";
import Heading from "./displayTitles/Heading";
import Button from "../../components/elements/Button";

const ProductCard = ({ image }) => {
    return (
        <div className="text-center">
            <div className="relative w-full h-72">
                <img
                    src={image}
                    alt="Un magnifique hamburger suculent"
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                />
            </div>

            <div className="flex flex-col justify-center items-center px-2 pb-2 mt-3">
                <Heading theme={"h3"}>lorem ipsum dolor</Heading>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis, odit?
                </p>
                <Button
                    value={"commandez"}
                    className={"font-secondary"}
                    bgColor={"bg-red"}
                    theme={"btnSmall"}
                />
            </div>
        </div>
    );
};

export default ProductCard;
