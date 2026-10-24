"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import test1 from "../assets/test1.jpg";
import test2 from "../assets/test2.jpg";
import test3 from "../assets/test3.jpg";
import test4 from "../assets/test4.jpg";
import test5 from "../assets/test5.jpg";

import "./CryptoTestimonial.css";

const testimonials = [
  {
    id: 1,
    name: "Maria Kim",
    role: "Long-Term Investor",
    content:
      "Working with this crypto investment broker has been life-changing. His market insights helped me grow my portfolio steadily even during volatile seasons. Transparency and professionalism at its finest.",
    image: test1,
    rating: 5,
  },
  {
    id: 2,
    name: "Wilson Hughson",
    role: "Startup Founder",
    content:
      "I had little knowledge about cryptocurrency investments, but the guidance I received was clear and beginner friendly. My returns have improved consistently thanks to well-timed trades and smart risk management.",
    image: test2,
    rating: 4,
  },
  {
    id: 3,
    name: "Alice Johnson",
    role: "Forex & Crypto Trader",
    content:
      "Finally found a broker that truly understands blockchain assets. He provided structured strategies for Bitcoin and Ethereum investments. Customer support and trade execution are excellent.",
    image: test3,
    rating: 5,
  },
  {
    id: 4,
    name: "Mark Benson",
    role: "Real Estate Consultant",
    content:
      "Diversifying into crypto felt risky until I met this professional broker. He built me a secure, diversified wallet and explained every step. I now earn passive income from staking and DeFi.",
    image: test4,
    rating: 5,
  },
  {
    id: 5,
    name: "Elizabeth Fletcher",
    role: "Tech Freelancer",
    content:
      "The most reliable crypto broker I've worked with. Clear communication, honest performance reports, and real expertise. My investment mindset has completely changed.",
    image: test5,
    rating: 4,
  },
];

const TestimonialSlider = () => {
  const [index, setIndex] = useState(0);

  // Auto sliding effect
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const next = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="crypto-testimonial">
      <div className="container">
        <h3 className="subtitle">TESTIMONIAL</h3>

        <h1 className="title">Client Reviews</h1>

        <div className="slider-wrapper">
          <button onClick={prev} className="arrow-btn left">
            ❮
          </button>

          <button onClick={next} className="arrow-btn right">
            ❯
          </button>

          <div className="slide-area">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonials[index].id}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.7 }}
                className="testimonial-card"
              >
                <img
                  src={testimonials[index].image}
                  alt={testimonials[index].name}
                  className="profile-img"
                />

                <p className="content">“{testimonials[index].content}”</p>

                <h4 className="name">{testimonials[index].name}</h4>

                <p className="role">{testimonials[index].role}</p>

                <div className="stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i}>
                      {i < testimonials[index].rating ? "★" : "☆"}
                    </span>
                  ))}
                </div>

                <div className="dots">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIndex(i)}
                      className={i === index ? "active-dot" : ""}
                    ></button>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
