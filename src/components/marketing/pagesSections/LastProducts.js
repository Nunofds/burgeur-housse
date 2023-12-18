import React from "react";

import Image1 from "../../../medias/images/products/LastProducts-1.jpg";
import Image2 from "../../../medias/images/products/LastProducts-2.jpg";
import Image3 from "../../../medias/images/products/LastProducts-3.jpg";

const LastProducts = () => {
    return (
        <div className="w-full grid md:grid-cols-2 gap-3 md:gap-9 sm:px-8 my-20 uppercase text-white">
            {/* Product 1 */}
            <div className="relative h-full min-h-[10rem] row-span-2 rounded-md bg-primary">
                <img
                    src={Image1}
                    alt=""
                    className="absolute w-full h-full top-0 left-0 object-cover overflow-hidden rounded-md z-0"
                />
                <div className="relative p-7 z-20">
                    <h3 className="font-bold text-lg">Killer Burger</h3>
                    <h2 className="font-black text-lg md:text-2xl">
                        Burger le plus populaire
                    </h2>
                </div>
            </div>

            {/* Product 2 */}
            <div className="relative h-full min-h-[10rem] rounded-md bg-primary">
                <img
                    src={Image2}
                    alt=""
                    className="absolute w-full h-full top-0 left-0 object-cover overflow-hidden rounded-md z-0"
                />
                <div className="relative p-7 z-20">
                    <h3 className="font-bold text-lg">Island Burger</h3>
                    <h2 className="font-black text-lg md:text-2xl">
                        Plus de Plaisir
                    </h2>
                    <h2 className="font-black text-lg md:text-2xl">
                        Plus de Goût
                    </h2>
                </div>
            </div>

            {/* Product 3 */}
            <div className="relative h-full min-h-[10rem] rounded-md bg-primary">
                <img
                    src={Image3}
                    alt=""
                    className="absolute w-full h-full top-0 left-0 object-cover overflow-hidden rounded-md z-0"
                />
                <div className="relative p-7 z-20">
                    <h3 className="font-bold text-lg">Orlando's Burger</h3>
                    <h2 className="font-black text-lg md:text-2xl">
                        Frais & Pimenté
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default LastProducts;
