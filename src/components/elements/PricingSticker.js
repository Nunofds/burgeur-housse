import React from "react";

const PricingSticker = ({ prixEuro, prixCentime, text = "" }) => {
    return (
        <div className="bg-red w-40 h-40 rounded-full flex items-center justify-center p-2">
            <div className="w-full h-full border-2 border-white border-dashed rounded-full text-white">
                <div className="w-full h-full flex flex-col items-center justify-center uppercase">
                    <span className="font-semibold">
                        <span className="text-6xl">{prixEuro}</span>
                        <span className="text-2xl">.{prixCentime}€</span>
                    </span>
                    <p className="text-md tracking-widest font-semibold">
                        {text}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PricingSticker;
