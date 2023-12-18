import React from "react";

const Heading = (props) => {
    const {
        children,
        variant,
        theme /**style */,
        display /**color */,
        justify /**align */,
        className,
    } = props;

    // class default for styling elements
    const classDefault = "uppercase";
    let font, color;

    // switch for font (theme)
    switch (theme) {
        case "secondary":
            font = "font-secondary";
            break;
        default:
            font = "tracking-tighter";
    }

    // switch for color (display)
    switch (display) {
        case "gray":
            color = "text-gray-600";
            break;
        default:
            color = "text-secondary";
    }

    // switch for variant
    switch (variant) {
        case "h4":
            return (
                <div className={`flex justify-${justify} items-center`}>
                    <h4
                        className={`text-lg ${classDefault} ${font} ${color} ${className}`}
                    >
                        {children}
                    </h4>
                </div>
            );
        case "h3":
            return (
                <div className={`flex justify-${justify} items-center`}>
                    <h3
                        className={`text-2xl ${classDefault} ${font} ${color} ${className}`}
                    >
                        {children}
                    </h3>
                </div>
            );
        default:
            return (
                <div className={`flex justify-${justify} items-center`}>
                    <h2
                        className={`${
                            theme === "secondary"
                                ? "text-3xl md:text-5xl"
                                : "text-2xl"
                        } ${classDefault} ${font} ${color} ${className}`}
                    >
                        {children}
                    </h2>
                </div>
            );
    }
};

export default Heading;
