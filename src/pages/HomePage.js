import React from "react";
import HeroTop from "../components/marketing/pagesSections/HeroTop";
import LastProducts from "../components/marketing/pagesSections/LastProducts";
import Container from "../components/elements/Container";
import Products from "../components/marketing/pagesSections/Products";
import EventSlider from "../components/elements/EventSlider";
import Booking from "../components/marketing/pagesSections/Booking";
import Footer from "../components/marketing/pagesSections/Footer";

const HomePage = () => {
    return (
        <>
            <header>
                <HeroTop />
            </header>
            <main>
                <Container>
                    <LastProducts />
                    <Products />
                    <EventSlider />
                    <Booking />
                    <Footer />
                </Container>
            </main>
        </>
    );
};

export default HomePage;
