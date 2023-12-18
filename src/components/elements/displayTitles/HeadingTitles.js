import React from "react";

const HeadingTitles = (props) => {
    const { children, variant } = props;

    // class default for styling elements
    const classDefault =
        "px-7 py-3 bg-primary font-bold uppercase text-center inline-block";

    switch (variant) {
        case "h3":
            return (
                <div className={`flex justify-center items-center my-5`}>
                    <h3 className={`text-sm ${classDefault}`}>{children}</h3>
                </div>
            );
        default:
            return (
                <div className={`flex justify-center items-center my-5`}>
                    <h2 className={`${classDefault}`}>{children}</h2>
                </div>
            );
    }
};

export default HeadingTitles;
