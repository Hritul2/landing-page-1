import Image from "next/image";
import ArrowRight from "../assets/arrow-right.svg";
import StarImage from "../assets/star.png";
import SpringImage from "../assets/spring.png";

export const CallToAction = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#d2dcff] py-24">
      <div className="container">
        <div className="section-heading relative overflow-x-clip">
          <h2 className="section-title">Sign up for free today</h2>
          <p className="section-description mt-5">
            Celebrate the joy of accomplishments with an app designed to track
            your progress and motivate your efforts.
          </p>
          <Image
            src={StarImage}
            alt="Star"
            width={360}
            className="absolute -left-[350px] -top-[137px]"
          />
          <Image
            src={SpringImage}
            alt="Spring"
            width={360}
            className="absolute -right-[331px] -top-[19px]"
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
