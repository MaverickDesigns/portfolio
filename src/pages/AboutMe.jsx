import React from "react";
import Indicator from "../components/Indicator";
import RandomScrollText from "../components/RandomText";
import topTransition from "../components/topTransition";
import "./AboutMe.css";
import ProgressBarComponent from "../components/ProgressBar";

const AboutMe = () => {
  const ImageWithTransition = topTransition(() => (
    <img src="./images/Scroll.jpg" alt="Profile" className="profile-image" />
  ));
  return (
    <div className="container">
      <div className="left">
        <div className="heading">
          <RandomScrollText text={"ABOUT ME"} />
        </div>
        <div className="content">
          <div className="main-about">
            <p className="one">Education</p>
            <p className="two">2023 - 2026(pursuing)</p>
            <p className="two">ICAT Design and Media College</p>
            <p className="three">B.Sc UI Design & Development</p>
          </div>
          <div className="main-about">
            <p className="two">2021 - 2023</p>
            <p className="two">MSB Matriculation Higher Sec. School</p>
            <p className="three">Commerce with Computer Application</p>
          </div>
          <div className="main-about">
            <p className="one">Skills</p>
            <p className="four">Frontend Developer</p>
            <ProgressBarComponent progress={0.8``} />
            <p className="four">UX Research</p>
            <ProgressBarComponent progress={0.4} />
            <p className="four">Prototyping</p>
            <ProgressBarComponent progress={0.8} />
            <p className="four">Typography</p>
            <ProgressBarComponent progress={0.6} />
            <p className="four">Wireframing</p>
            <ProgressBarComponent progress={0.9} />
          </div>
        </div>
      </div>
      <ImageWithTransition />
      <Indicator />
    </div>
  );
};

export default AboutMe;
