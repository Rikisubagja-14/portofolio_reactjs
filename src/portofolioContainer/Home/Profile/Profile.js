/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Typical from "react-typical";
import "./Profile.css";
export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="#">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-google-plus-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa fa-youtube-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Riki</span>
            </span>
          </div>

          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Web developer 🉐",
                    1000,
                    "Mobile developer 🌀",
                    1000,
                    "Full Stack developer ⚫️",
                    1000,
                    "MERN Stack developer 🔷",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of Building Application with front-end and Backend
              </span>
            </span>
          </div>

          <div className="profile-optins">
            <button className="btn primary-btn"> Hire me</button>
            <a href="cv.pdf" download="Riki pdf">
              <button className="btn highlighted-btn">Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-backround"></div>
        </div>
      </div>
    </div>
  );
}
