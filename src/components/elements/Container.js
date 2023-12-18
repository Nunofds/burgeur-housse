import React from "react";

const Container = ({ children }) => {
    return (
        <div className="max-w-6xl h-full m-auto px-3 xl:px-0">{children}</div>
    );
};

export default Container;
