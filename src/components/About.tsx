import React from "react";
import mypic from "../assets/images/Cropped Professional Pic.jpg";

const About: React.FC = () => {
  return (
    <>
      <div className="bg-slate-200 py-16">
        <div className="flex flex-col md:grid md:grid-cols-12 mx-auto md:max-w-5xl w-full md:auto-rows-auto p-4">
          <div className="order-last md:order-1 md:col-span-7 flex flex-col justify-center">
            <div className="text-4xl lg:text-6xl font-playfair font-light mb-4 flex justify-center md:justify-start mt-4 md:mt-0">
              Associate Technical Architect
            </div>
            <div className="">
              <div className="text-md font-playfair md:w-10/12">
                I am an AWS Certified Developer Associate, with experience in
                Designing architectures and developing web
                applications.Full-Stack Team Lead with expertise in Java,
                ReactJS, SQL & JavaScript.
                <br />
                <br />
                With{" "}
                <span className="text-red-600">8+ years of experience</span> in
                the industry, I have successfully delivered robust and scalable
                web applications. I am passionate about crafting elegant
                solutions to complex problems and thrive in collaborative
                environments.
              </div>
            </div>
          </div>
          <div className="md:order-2 md:col-span-5">
            <div className="flex justify-center rounded-full">
              <img src={mypic} alt="" className="h-64 md:h-96 rounded-full" />
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 bg-slate-800 w-full text-slate-100 flex justify-center items-center text-xs md:text-md p-2">
        <div className="mx-auto w-8/12 text-center font-thin tracking-wide">
          Welcome to my portfolio website. Please find all the required
          information about me here!
        </div>
      </div>
    </>
  );
};

export default About;
