import React from "react";
import Button from "../../elements/Button";
import logo from "../../../medias/svg/logo/Logo-burger-house.svg";
import logoResponsive from "../../../medias/svg/logo/Logo-burger-house-responsive.svg";
import iconBag from "../../../medias/svg/ico-bag-clickAndCollect.svg";

const Header = () => {
    return (
        // ----- HEADER SECTION -----
        <section className="relative flex justify-between items-center py-10 z-50">
            {/* ----- Logo ----- */}
            <div>
                <img
                    src={`${logo}`}
                    alt="Logo de Burger House"
                    title="Logo de Burger House"
                    className="w-64 hidden md:block"
                />
                <img
                    src={`${logoResponsive}`}
                    alt="Logo de Burger House"
                    title="Logo de Burger House"
                    className="w-56 block md:hidden"
                />
            </div>

            {/* ----- Title + btn inscription and btn connection ----- */}
            <div className="flex-col">
                {/* icon and title */}
                <div className="w-full justify-end items-center text-secondary hidden sm:flex">
                    <img
                        src={iconBag}
                        alt="Icône d'un sac"
                        className="w-4 h-4 mr-1"
                    />
                    <span className="">Commandez votre repas en ligne</span>
                </div>
                {/* inscription and connection btn's */}
                <div className="flex justify-end sm:justify-between flex-wrap md:mt-5">
                    <Button
                        value="Inscription"
                        className="hover:bg-primary-hover tracking-widest"
                        bgColor="primary"
                        theme="btnSmall"
                    />
                    <Button
                        value="Connexion"
                        className="hover:bg-secondary-hover tracking-widest"
                        bgColor="bg-secondary"
                        theme="btnSmall"
                    />
                </div>
            </div>
        </section>
    );
};

export default Header;
