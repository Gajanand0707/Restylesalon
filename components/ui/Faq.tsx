"use client";

import React, { useState } from "react";
import styles from "@/styles/style.module.css";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  faqs: FAQItem[];
  defaultOpenIndex?: number;

  backgroundColor?: string;
  activeBackgroundColor?: string;
  borderColor?: string;
  activeBorderColor?: string;

  questionColor?: string;
  answerColor?: string;

  questionFontSize?: number;
  answerFontSize?: number;

  borderRadius?: number;
}

const FAQ: React.FC<FAQProps> = ({
  faqs,
  defaultOpenIndex = 0,

  backgroundColor = "#ffffff",
  activeBackgroundColor = "#fff6f6",
  borderColor = "#e5e5e5",
  activeBorderColor = "#c62828",

  questionColor = "#1a1a1a",
  answerColor = "#666666",

  questionFontSize = 16,
  answerFontSize = 14,

  borderRadius = 14,
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(
    defaultOpenIndex
  );

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.faqWrapper}>
      {faqs.map((item, index) => {
        const isOpen = activeIndex === index;

        return (
          <div
            key={index}
            className={styles.faqItem}
            style={{
              backgroundColor: isOpen
                ? activeBackgroundColor
                : backgroundColor,
              borderColor: isOpen
                ? activeBorderColor
                : borderColor,
              borderRadius,
            }}
          >
            <button
              className={styles.question}
              onClick={() => toggleFAQ(index)}
              style={{
                color: questionColor,
                fontSize: `${questionFontSize}px`,
              }}
            >
              <span>{item.question}</span>
              <span
                className={styles.icon}
                style={{ color: activeBorderColor }}
              >
                {isOpen ? "–" : "+"}
              </span>
            </button>

            {isOpen && (
              <div
                className={styles.answer}
                style={{
                  color: answerColor,
                  fontSize: `${answerFontSize}px`,
                }}
              >
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FAQ;
