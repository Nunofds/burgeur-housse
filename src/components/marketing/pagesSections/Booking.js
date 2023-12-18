import React from "react";
import Heading from "../../elements/displayTitles/Heading";
import ImageBurger from "../../../medias/images/background/Burger.png";
import ImageAssiette from "../../../medias/images/background/Assiette-burger-frites.png";
import ImageSauce from "../../../medias/images/background/Sauce-pimente.png";

const Booking = () => {
    const inputStyle =
        "focus:ring-primary focus:border-primary focus:border block w-full border-gray-400 rounded-md p-3";

    return (
        <div className="relative mb-20 overflow-hidden">
            {/* --- Background images --- */}
            <img
                src={ImageBurger}
                alt="Un hamburger"
                className="absolute hidden md:block top-0 -left-36 z-0"
            />
            <img
                src={ImageSauce}
                alt="Une bouteille de sauce pimenté"
                className="absolute hidden lg:block top-60 left-10 z-0"
            />
            <img
                src={ImageAssiette}
                alt="Une assiette"
                className="absolute hidden md:block -bottom-52 -right-96 z-0"
            />

            {/* titles and booking form */}
            <div className="relative max-w-3xl h-full mx-auto z-10">
                <Heading variant={"h3"} justify={"center"} className={"mt-3"}>
                    Réservation
                </Heading>
                <Heading
                    theme={"secondary"}
                    justify={"center"}
                    className={"mt-3 text-center"}
                >
                    Réservez votre table
                </Heading>

                {/* --- Booking Form --- */}
                <div className="px-3 lg:px-0 mb-6">
                    <form
                        action=""
                        method=""
                        className="grid sm:grid-cols-2 gap-4 mt-20"
                    >
                        <div>
                            <label htmlFor="name">Nom</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="John Doe"
                                className={inputStyle}
                            />
                        </div>

                        <div>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="john.doe@gmail.com"
                                className={inputStyle}
                            />
                        </div>

                        <div>
                            <label htmlFor="date">Date</label>
                            <input
                                type="date"
                                name="date"
                                id="date"
                                className={inputStyle}
                            />
                        </div>

                        <div>
                            <label htmlFor="time">Heure</label>
                            <input
                                type="time"
                                name="time"
                                id="time"
                                className={inputStyle}
                            />
                        </div>

                        <div>
                            <label htmlFor="nbPersonnes">
                                Nombre de personnes
                            </label>
                            <input
                                type="number"
                                name="nbPersonnes"
                                id="nbPersonnes"
                                placeholder="1"
                                min={0}
                                className={inputStyle}
                            />
                        </div>

                        <div>
                            <label htmlFor="sendBooking" className="invisible">
                                Trouver une table
                            </label>
                            <input
                                type="button"
                                name="sendBooking"
                                id="sendBooking"
                                value={"Trouver une table"}
                                className={
                                    "w-full text-white font-secondary uppercase font-bold bg-red hover:bg-red-hover tracking-widest p-3 rounded-md cursor-pointer animate"
                                }
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Booking;
