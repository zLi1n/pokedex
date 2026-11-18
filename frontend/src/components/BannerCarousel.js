"use client";

import { useState, useEffect } from "react";

const banners = [
    "/banners/banner1.jpg",
    "/banners/banner2.jpg",
    "/banners/banner3.jpg"
];

export default function BannerCarousel() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % banners.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const previousBanner = () => {
        setCurrent((prev) =>
            (prev - 1 + banners.length) % banners.length
        );
    };

    const nextBanner = () => {
        setCurrent((prev) =>
            (prev + 1) % banners.length
        );
    };

    return (
        <section className="banner-section">

            <div className="main-banner">
                <img src={banners[current]} alt="Pokémon promotional banner"/>
                <button className="carousel-arrow left-arrow" onClick={previousBanner} aria-label="Previous banner">
                    &#10094;
                </button>
                <button className="carousel-arrow right-arrow" onClick={nextBanner} aria-label="Next banner">
                    &#10095;
                </button>

                <div className="carousel-dots">
                    {banners.map((banner, index) => (
                        <button key={banner} className={`carousel-dot ${current === index ? "active" : ""}`}
                            onClick={() => setCurrent(index)}
                            aria-label={`Go to banner ${index + 1}`}
                            aria-current={current === index ? "true" : undefined}
                        />
                    ))}
                </div>
            </div>

            <div className="small-banners">
                <img src="/banners/left-banner.jpg" alt="Pokémon banner"/>
                <img src="/banners/right-banner.jpeg" alt="Pokémon banner"/>
            </div>

        </section>
    );
}
