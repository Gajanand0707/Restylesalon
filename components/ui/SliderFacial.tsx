"use client";

import styles from "@/styles/style.module.css";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Settings } from "react-slick";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

/* 👇 Single card type */
export type FacialCardItem = {
  imageSrc: string;
  title: string;
  subtitle?: string;
};

/* 👇 Slider props */
type FacialSliderProps = {
  cards: FacialCardItem[];
  onBookNow?: () => void;
};

const settings: Settings = {
  dots: false,
  arrows: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 640, settings: { slidesToShow: 1 } },
  ],
};

export default function FacialSlider({ cards, onBookNow }: FacialSliderProps) {
  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div key={index} className={styles.card_main}>
            <div className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={card.imageSrc}
                  alt={card.title}
                  fill
                  className={styles.image}
                />
              </div>

              <div className={styles.content}>
                <div className={styles.icon_1}>💆‍♀️</div>

                <div>
                  <h3 className={styles.title}>{card.title}</h3>
                  <p className={styles.subtitle}>
                    {card.subtitle ?? "Facials"}
                  </p>

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
        ))}
      </Slider>
    </div>
  );
}
