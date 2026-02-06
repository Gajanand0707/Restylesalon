"use client";

import styles from "@/styles/style.module.css";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Settings } from "react-slick";

// 👇 Prevent SSR issues
const Slider = dynamic(() => import("react-slick"), { ssr: false });

type FacialCardProps = {
    imageSrc: string;
    title: string;
    subtitle?: string;
    onBookNow?: () => void;
};

const settings: Settings = {
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: { slidesToShow: 2 },
        },
        {
            breakpoint: 640,
            settings: { slidesToShow: 1 },
        },
    ],
};

export default function FacialSlider({
    imageSrc,
    title,
    subtitle = "Facials",
    onBookNow,
}: FacialCardProps) {
    return (
        <div className={styles.sliderContainer}>
            <Slider {...settings}>
                {[1, 2, 3 ,4 ,5].map((_, index) => (
                    <div key={index} className={styles.card_main}>
                    <div >
                        <div className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={imageSrc}
                                    alt={title}
                                    fill
                                    className={styles.image}
                                />
                            </div>

                            <div className={styles.content}>
                                <div className={styles.icon}>💆‍♀️</div>

                                <div>
                                    <h3 className={styles.title}>{title}</h3>
                                    <p className={styles.subtitle}>{subtitle}</p>
                                    <button
                                        className={styles.button}
                                        onClick={onBookNow}
                                        type="button"
                                    >
                                        Book Now <span className={styles.arrow}>→</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
