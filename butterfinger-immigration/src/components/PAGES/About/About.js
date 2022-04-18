import React from "react";
import './About.css'
import myimg from './../../../Images/4 sq-min.png'

const About = () => {
    return (

        <div>
            <h1 className="about-header">About me ! </h1>

            <div className="about-container">
                <p className="about-text">Peace Be Upon You. I am <strong>Toufiq Alahi</strong>. I have been learning full-stack web development. My focus is to learn advanced topics related to Problem-solving. As a graduate student of CSE, I am well versed in data structure and Algorithms. I have a plan to solve more and more problems on CodeForces and Leetcode. Also, I am planning to enroll in AlgoExpert in a few months. Hopefully, I will do whatever it takes and flourish with my quick learning skills and hard work. </p>
                <img className="my-img" src={myimg} alt="" />
            </div>
        </div>
    );
};

export default About;
