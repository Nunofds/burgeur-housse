import React from "react";

const Button = ({ value, className, bgColor, theme }) => {
    switch (theme) {
        case "btnSmall":
            return (
                <>
                    <button
                        type="button"
                        className={`px-3 py-2 text-sm text-white uppercase shadow-xl animate ${className} ${bgColor}`}
                    >
                        {value}
                    </button>
                </>
            );
        case "btnBig":
            return (
                <>
                    <button
                        type="button"
                        className={`px-10 py-4 text-sm text-white uppercase shadow-xl animate ${className} ${bgColor}`}
                    >
                        {value}
                    </button>
                </>
            );

        default:
            return (
                <>
                    <button
                        type="button"
                        className={`px-4 py-3 text-xs md:text-sm text-white uppercase shadow-xl animate ${className} ${bgColor}`}
                    >
                        {value}
                    </button>
                </>
            );
    }
};

export default Button;
