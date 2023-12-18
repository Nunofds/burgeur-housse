import React from "react";
import Container from "../../elements/Container";
import HeadingTitles from "../../elements/displayTitles/HeadingTitles";
import Heading from "../../elements/displayTitles/Heading";
import ProductCard from "../../elements/ProductCard";
import Product1 from "../../../medias/images/products/Product-1.jpg";
import Product2 from "../../../medias/images/products/Product-2.jpg";
import Product3 from "../../../medias/images/products/Product-3.jpg";

const Products = () => {
    return (
        <div>
            <Container>
                <HeadingTitles variant={"h3"}>
                    Toujours des délicieux burgers
                </HeadingTitles>

                <Heading
                    theme={"secondary"}
                    justify={"center"}
                    className={"text-center"}
                >
                    Choisissez et savourez
                </Heading>

                <p className="text-center mt-3">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Fuga illo soluta distinctio sapiente officia, odio dicta
                    possimus est quibusdam quae. Quidem sed voluptate ad, soluta
                    distinctio sapiente officia.
                </p>
            </Container>

            {/* Products */}
            <div className="grid sm:grid-cols-3 gap-x-1 gap-y-16 sm:gap-y-0 mt-10 mb-20">
                <ProductCard image={Product1} />
                <ProductCard image={Product2} />
                <ProductCard image={Product3} />
            </div>
        </div>
    );
};

export default Products;
