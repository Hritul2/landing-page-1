"use client";
import Image from "next/image";
import ArrowRight from "../assets/arrow-right.svg";
import StarImage from "../assets/star.png";
import SpringImage from "../assets/spring.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const CallToAction = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-white to-[#d2dcff] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="section-heading relative ">
          <h2 className="section-title">Sign up for free today</h2>
          <p className="section-description mt-5">
            Celebrate the joy of accomplishments with an app designed to track
            your progress and motivate your efforts.
          </p>
          <motion.img
            src={StarImage.src}
            alt="Star"
            width={360}
            height={360}
            className="absolute -left-[360px] -top-[137px]"
            style={{ translateY }}
          />
          <motion.img
            src={SpringImage.src}
            alt="Spring"
            width={360}
            height={360}
            className="absolute -right-[331px] -top-[19px]"
            style={{ translateY }}
          />
          <div className="flex gap-2 mt-10 justify-center items-center">
            <button className="btn btn-primary">Get For Free</button>
            <button className="btn btn-text">
              <span>Learn More</span> <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
