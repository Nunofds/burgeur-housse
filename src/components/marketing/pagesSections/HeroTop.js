import React from "react";
import Container from "../../elements/Container";
import Button from "../../elements/Button";
import Header from "./Header";
import heroImage from "../../../medias/images/heroTop/burger-hero-top.png";
import illustration from "../../../medias/images/background/bg-food.jpg";
import PricingSticker from "../../elements/PricingSticker";

const HeroTop = () => {
    return (
        <div className="bg-primary w-full">
            <div
                className="bg-repeat w-full h-full pb-20 md:pb-40"
                style={{
                    backgroundImage: `url(${illustration})`,
                }}
            >
                <Container>
                    <Header />
                    <section className="relative w-full mt-12 md:mt-28">
                        {/* ----- TITLEs ----- */}
                        <div className="relative text-secondary text-center md:text-left uppercase z-10">
                            <h1 className="text-sm font-semibold mb-4">
                                C'est le moment de goûter au bon goût des
                                hamburgers
                            </h1>
                            <h2 className="text-4xl md:text-6xl xl:text-8xl font-secondary titleSecondaryShadow">
                                Burger
                            </h2>
                            <h2 className="text-3xl md:text-4xl xl:text-5xl font-secondary">
                                <span className="titleSecondaryShadow">
                                    House{" "}
                                </span>
                                <span className="text-2xl md:text-3xl xl:text-4xl clickAndCollectShadow">
                                    click
                                    <span className="text-red titleSecondaryShadow">
                                        &
                                    </span>
                                    collect
                                </span>
                            </h2>
                            {/* BTN */}
                            <Button
                                value="Créer mon compte"
                                className="mt-6 hover:bg-secondary-hover font-semibold rounded-md"
                                bgColor="bg-secondary"
                                theme="btnBig"
                                themeHover="red-hover"
                            />
                        </div>
                        {/* ----- IMG ----- */}
                        <img
                            src={heroImage}
                            alt="Un menu avec un hamburger des frites et un coca cola."
                            className="hidden md:block absolute -bottom-40 right-[1rem] w-[38rem] z-0"
                        />
                        {/* Pricing sticker */}
                        <div className="hidden md:block absolute right-[24rem] -bottom-36">
                            <PricingSticker
                                prixEuro="5"
                                prixCentime="49"
                                text="Seulement"
                            />
                        </div>
                    </section>
                </Container>
            </div>
        </div>
    );
};

export default HeroTop;
