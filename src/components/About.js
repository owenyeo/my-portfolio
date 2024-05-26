import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Projects from "./Projects";
import Hobbies from "./Hobbies";
import Skills from "./Skills";
import Testimonials from "./Testimonials";
import Contact from "./Contact";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
      <div
          className={className}
          style={{ ...style, display: "block", background: "red", zIndex: 20 }}
          onClick={onClick}
      />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
      <div
          className={className}
          style={{ ...style, display: "block", background: "green", zIndex: 20 }}
          onClick={onClick}
      />
  );
}

export default function About() {
  const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
  };


    return (
        <section id="about" style={{minHeight:'100vh'}}>
          <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                Hi, I'm Owen. 
                <br className="hidden lg:inline-block" /> I love to build amazing
                apps.
              </h1>
              <p className="mb-8 leading-relaxed">
                Hey! I am Owen Yeo Le Yang, a Y2 NUS College student studying Computer Science! I am a passionate programmer who loves to build amazing apps.
                I have experience in game design, web development, and machine learning, and is always looking for ways to learn and grow! Outside of work, I love powerlifting,
                hiking, and running!
              </p>
              <div className="flex justify-center">
                <Link
                  to="/contact"
                  className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                  Work With Me
                </Link>
                <Link
                  to="/projects"
                  className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                  See My Past Work
                </Link>
              </div>
            </div>
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <Slider {...settings}>
                    <div>
                        <img
                            className="object-cover object-center rounded"
                            alt="hero"
                            src={process.env.PUBLIC_URL + "/display.png"}
                        />
                    </div>
                </Slider>
            </div>
          </div>
          <Projects />
          <Skills />
          <Hobbies />
          <Testimonials />
          <Contact />
        </section>
      );
}