import React from "react";
import Typical from "react-typical";
import "./Profile.css";
import ScrollService from "../../../utilities/ScrollService";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://web.facebook.com/adepoju.sulaiman">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://www.linkedin.com/in/olayiwola-adepoju/">
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href="https://www.instagram.com/layi_coder/">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://www.youtube.com/channel/UCPSlqdWLUDW49LFgLo1KSPw">
                <i className="fa fa-youtube-square"></i>
              </a>
              <a href="https://twitter.com/layideveloper">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Olayiwola</span>
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
                    "Enthusiastic Dev 😎",
                    3000,
                    "Full-Stack Developer 💻",
                    3000,
                    "MERN Stack Dev  📱",
                    3000,
                    "Cross Platform Dev 🔴",
                    3000,
                    "React/React Native Dev 🌐",
                    3000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of building applications with front and back end
                operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn"
            onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            > Hire Me </button>
            <a href="olayiwola.pdf" download="Olayiwola olayiwola.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
