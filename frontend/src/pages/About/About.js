import React from 'react'

import './About.css'

export default function About() {
    return (
        <div className="about-container">
            <h1 className="about-heading">About</h1>
            <div className="about-main">
                <p className="about-content">
                    This is an realtime AI based Yoga Trainer which detects your pose how well you are doing.
                    I created this as a personal project, and I have also deployed this project
                    so people can use it and mainly the developers can who are learning AI can learn 
                    from this project and make their own AI or they can also improve in this project.
                    This is an open source project, The code is available on the GitHub - <a href="https://github.com/harshbhatt7585/YogaIntelliJ" target="_blank" rel="noopener noreferrer">https://github.com/harshbhatt7585/YogaIntelliJ</a>
                </p>
                <p className="about-content">
                    This AI first predicts keypoints or coordinates of different parts of the body(basically where
                    they are present in an image) and then it use another classification model to classify the poses if 
                    someone is doing a pose and if AI detects that pose more than 95% probability and then it will notify you are 
                    doing correctly(by making virtual skeleton green). I have used Tensorflow pretrained Movenet Model To Predict the 
                    Keypoints and building a neural network top of that which uses these coordinates and classify a yoga pose.
                </p>
                <p className="about-content">
                    I have trained the model in python because of tensorflowJS we can leverage the support of browser so I converted 
                    the keras/tensorflow model to tensorflowJS.
                </p>
            </div>

            <div className="about-developer">
                <h2 className="about-developer-heading">About Developer</h2>
                <p className="about-content">
                    I am Harsh, I am Full Stack Developer, AI Enthusiastic, Content Creator, Tutor, I love to work with technology and love to share on my
                    youtube channel, I hope this project will help you.
                </p>
            </div>

            <div className="contact-section">
                <h2 className="contact-heading">Contact</h2>
                <div className="social-links">
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">Youtube</a>
                    <a href="https://github.com/harshbhatt7585/YogaIntelliJ" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
            </div>
        </div>
    )
}
