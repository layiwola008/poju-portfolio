import React, { useState } from 'react';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import './Resume.css';

export default function Resume(props) {
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
    const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id);
      };
      const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const ResumeHeading = (props) => {
        return (
          <div className="resume-heading">
            <div className="resume-main-heading">
              <div className="heading-bullet"></div>
              <span>{props.heading ? props.heading : ""}</span>
              {props.fromDate && props.toDate ? (
                <div className="heading-date">
                  {props.fromDate + "-" + props.toDate}
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <div className="resume-sub-heading">
              <span>{props.subHeading ? props.subHeading : ""}</span>
            </div>
            <div className="resume-heading-description">
              <span>{props.description ? props.description : ""}</span>
            </div>
          </div>
        );
      };

       /* STATIC RESUME DATA FOR THE LABELS*/
       const resumeBullets = [
        {label: "Education", logoSrc: <i className="fa fa-graduation-cap" aria-hidden="true" style={{color: "white"}}></i>},
        {label: "Work History", logoSrc: <i className="fa fa-history" aria-hidden="true" style={{color: "white"}}></i>},
        {label: "Programming Skills", logoSrc: <i className="fa fa-laptop" aria-hidden="true" style={{color: "white"}}></i>},
        {label: "Projects", logoSrc: <i className="fa fa-handshake-o" aria-hidden="true" style={{color: "white"}}></i>},
        {label: "Interests", logoSrc: <i className="fa fa-heart" aria-hidden="true" style={{color: "white"}}></i>},
      ]

  //here we have
  const programmingSkillsDetails = [
    {skill: "JavaScript", ratingPercentage: 85},
    {skill: "React JS", ratingPercentage: 85},
    {skill: "Express JS", ratingPercentage: 89},
    {skill: "Node JS", ratingPercentage: 89},
    {skill: "JavaScript", ratingPercentage: 85},
    {skill: "Mongo Db", ratingPercentage: 70},
    {skill: "HTML", ratingPercentage: 80},
    {skill: "CSS", ratingPercentage: 80},        
  ]

  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2020", toDate: "2022" },
      description:
        "A Personal Portfolio website to showcase all my details and projects at one place.",
      subHeading: "Technologies Used: React JS, Bootsrap",
    },
    {
      title: "Professional Networking Website",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "For professionals to hire other professionals for their companies",
      subHeading:
        "Technologies Used:  React JS, Material UI, MongoDb, Redux.",
    },
    {
      title: "Blog Website",
      duration: { fromDate: "2022", toDate: "2022" },
      description:
        "A blog website with user registration and blog posts",
      subHeading:
        "Technologies Used: React JS, MongoDb, Context API",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"ClassVisa, San Diego CA, United States"}
        subHeading={"Software Engineering Flex"}
        fromDate={"2020"}
        toDate={"2022"}
      />

      <ResumeHeading
        heading={"LinkedIn Learning"}
        subHeading={"JavaScript Essentail Training"}
        fromDate={"2022"}
        toDate={"2022"}
      />
      <ResumeHeading
        heading={"Udemy "}
        subHeading={"Complete Web Developer Course 3.0"}
        fromDate={"2017"}
        toDate={"2017"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"International Psychometrics Centre"}
          subHeading={"Head of ICT"}
          fromDate={"2020"}
          toDate={"Present"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
          Currently working as Head of ICT at IPCentre, International Psychometrics Centre.
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
          - Developed a univerisity learning management system with over 60,000 students.
          </span>
          <br />
          <span className="resume-description-text">
          - Developed an online examination portal with over 60,000 students examined.{" "}
          </span>
          <br />
          <span className="resume-description-text">
            - I drill myself to develop UI as per the given designs.
          </span>
          <br />
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Teaching"
        description="Apart from being a tech enthusiast and a code writer, i also love to teach people what i know simply because i believe in sharing."
      />
      <ResumeHeading
        heading="Music"
        description="Listening to soothing music is something i can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that i can get my hands on."
      />
      <ResumeHeading
        heading="Competitive Gaming"
        description="I like to challenge my reflexes a lot while competing in football games, pushing the rank and having interactive gaming sessions excites me the most."
      />
    </div>,
  ];

      const handleCarousal = (index) => {
        let offsetHeight = 360;
        let newCarousalOffset = {
            style: {transform: "translateY(" + index * offsetHeight * -1 + "px)"},
        };
        setCarousalOffSetStyle(newCarousalOffset);
        setSelectedBulletIndex(index);
      }

      const getBullets = () => {
        return resumeBullets.map((bullet, index) => (
            <div 
            onClick={() => handleCarousal(index)}
            className={index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"}
            key={index}
            >

                {/* <img 
                    className='bullet-logo'
                    src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
                    alt='B'
                /> */}
                <span className='bullet-logo'>
                    {bullet.logoSrc}
                </span>
                 <span className="bullet-label">{bullet.label}</span>
            </div>
        ));
      };

      const getResumeScreen = () => {
        return (
            <div
                style={carousalOffSetStyle.style}
                className='resume-details-carousal'
            >
                {resumeDetails.map((ResumeDetail) => ResumeDetail)}
            </div>
        )
      }

    return (
    <div className='resume-container screen-container fade-in' id={props.id || ""}>
        <div className='resume-content'>
            <ScreenHeading title={'Resume'} subHeading={'My Bio Details'} />
            <div className='resume-card'>
                <div className='resume-bullets'>
                    <div className='bullet-container'>
                        <div className='bullet-icons'></div>
                        <div className='bullets'>{getBullets()}</div>
                    </div>
                </div>
                <div className='resume-bullet-details'>{getResumeScreen()}</div>
            </div>
        </div>
    </div>
  )
}
