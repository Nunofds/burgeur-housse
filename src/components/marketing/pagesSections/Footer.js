import React from "react";
import BackgroundImage from "../../../medias/images/background/bg-footer.jpg";
import Logo from "../../../medias/svg/logo/Logo-burger-house-white.svg";
import FacebookLogo from "../../../medias/svg/Icones/facebook-f-brands.svg";
import InstagramLogo from "../../../medias/svg/Icones/instagram-brands.svg";
import TwitterLogo from "../../../medias/svg/Icones/twitter-brands.svg";
import WhatsappkLogo from "../../../medias/svg/Icones/whatsapp-brands.svg";

const Footer = () => {
    return (
        <div className="relative w-full text-white mb-6 lg:mb-20 p-5">
            {/* --- Background Image --- */}
            <img
                src={BackgroundImage}
                alt="conception d'un hamburger sur un plan de travail"
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            />

            {/* --- Logo + presentation --- */}
            <div className="relative h-full grid sm:grid-cols-2 z-10">
                <div className="py-12 px-0 sm:px-6">
                    <img
                        src={Logo}
                        alt="Logo burger house"
                        className="w-2/3 mb-6"
                    />
                    <p className="text-center sm:text-left">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Placeat, facere. Rerum necessitatibus, fugiat vitae
                        deleniti quis reprehenderit beatae animi ab saepe hic
                        minima quas natus omnis consectetur quaerat, cum
                        molestiae?
                    </p>
                </div>
                {/* Coords */}
                <div className="uppercase font-extrabold text-xs sm:text-sm md:text-lg tracking-tighter flex flex-col justify-center items-center gap-3 mb-12 sm:mb-0">
                    {/* adress */}
                    <div className="flex justify-start items-center">
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                                />
                            </svg>
                        </div>
                        <span className="mx-2">
                            15 Place Bellecour, 6900 Lyon
                        </span>
                    </div>

                    {/* contact */}
                    <div className="flex justify-start items-center">
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-6 h-6"
                            >
                                <path
                                    stroke-linecap="round"
                                    d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
                                />
                            </svg>
                        </div>
                        <span className="mx-2">info@burger-house.com</span>
                    </div>
                </div>
            </div>

            <div className="relative z-10">
                <div className="uppercase text-sm tracking-tighter block sm:flex justify-between items-center text-center px-0 sm:px-6">
                    <div>&copy; Burger house 2023, tous droits réservés</div>
                    <div className="flex justify-center items-center">
                        <span className="">
                            <img
                                src={FacebookLogo}
                                alt=""
                                className="w-6 h-6 mr-2 cursor-pointer hover:bg-primary animate"
                            />
                        </span>
                        <span>
                            <img
                                src={InstagramLogo}
                                alt=""
                                className="w-6 h-6 mr-2 cursor-pointer"
                            />
                        </span>
                        <span>
                            <img
                                src={TwitterLogo}
                                alt=""
                                className="w-6 h-6 mr-2 cursor-pointer"
                            />
                        </span>
                        <span>
                            <img
                                src={WhatsappkLogo}
                                alt=""
                                className="w-6 h-6 cursor-pointer"
                            />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
