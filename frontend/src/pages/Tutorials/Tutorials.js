import React from 'react'

import './Tutorials.css'

import { tutorials, fixCamera } from '../../utils/data'

export default function Tutorials() {
    return (
        <div className="tutorials-container">
            <h1 className="tutorials-heading">Basic Tutorials</h1>
            <ul className="tutorial-list">
                <li className="tutorial-item">When App ask for permission of camera, allow it to access to capture pose.</li>
                <li className="tutorial-item">Select what pose you want to do in the dropdown.</li>
                <li className="tutorial-item">Read Instructions of that pose so you will know how to do that pose.</li>
                <li className="tutorial-item">Click on Start pose and see the image of the that pose in the right side and replicate that image in front of camera.</li>
                <li className="tutorial-item">If you will do correctly the skeleton over the video will become green in color and sound will start playing</li>
            </ul>

            <div className="camera-section">
                <h2 className="camera-heading">Camera Not Working?</h2>
                <ul className="solution-list">
                    <li className="solution-item">Solution 1. Make sure you have allowed the permission of camera, if you have denied the permission, go to setting of your browser to allow the access of camera to the application.</li>
                    <li className="solution-item">Solution 2. Make sure no any other application is not accessing camera at that time, if yes, close that application</li>
                    <li className="solution-item">Solution 3. Try to close all the other opened browsers</li>
                </ul>
            </div>
        </div>
    )
}
