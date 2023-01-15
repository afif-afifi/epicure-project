import React from "react";
import { Header } from "../components/Header/Header";
import { Hero } from "../components/Hero/Hero";
import  {RestCard}  from "../components/Cards/index";
import { Dishes } from "../components/Dish/Dish";
import { Chef } from "../components/Chefs/chef";
import { About } from "../components/about/about";
import { Footer } from "../components/Footer/footer";
import "bootstrap/dist/css/bootstrap.min.css";

export function HomePage() {
    return (
        <>
            <Header />
            <Hero />
            <RestCard/>
            <Dishes />
            <Chef />
            <About />
            <Footer />
        </>
    );
}

export default HomePage;