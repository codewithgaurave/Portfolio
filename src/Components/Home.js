import React from "react";
import NavBar from "./NavBar";
import butter1 from "./SVGs/butterfly1.svg";
import butter2 from "./SVGs/butterfly2.svg";
import SelfImage from "./Groups/SelfImage";
import Socials from "./Groups/Socials";
import SectionHead from "./Groups/SectionHead";
import smily1 from "./SVGs/smily1.svg";
import smily2 from "./SVGs/smily2.svg";
import StickyNote from "./Groups/StickyNote";
import tape1 from "./SVGs/tape-1.svg";
import tape2 from "./SVGs/tape-2.svg";
import bulb from "./SVGs/bulb.svg";
import bloodHub from "./SVGs/bloodHub.svg";
import stickyNote from "./SVGs/stickyNote.svg";
import github from './SVGs/Github.svg';
import tape3 from './SVGs/tape-3.svg';
import reverbNation from './SVGs/reverbNation.svg';
import flappyBird from './SVGs/flapppyBird.png';
import heart from './SVGs/heart.svg';
import tape2_1 from './SVGs/tape2-1.svg'
import tape2_2 from './SVGs/tape2-2.svg'
import tape2_3 from './SVGs/tape2-3.svg'
import tape2_4 from './SVGs/tape2-4.svg'
import Letter from "./Groups/Letter";
/* import { Link } from "react-router-dom";
 *//* import letter from './SVGs/letter.svg'

 */
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hr from "./SVGs/Hr";
import { ToastContainer } from "react-toastify";


 export default function Home() {
  const { hash } = useLocation();
  const handleLinkClick = (url) => {
    window.location.href = url
  }
  useEffect(() => {
    if (hash) {
      // Find the element with the id matching the hash, and scroll to it
      const section = document.getElementById(hash.replace('#', ''));
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]); 
  return (
    <>
      <NavBar />
      <ToastContainer />
      {/* Hero Section  */}
      <div className="container pt-md-5 pt-4" >
        {/* Header */}
        <div className="row text-center" id="home">
          <Hr />
          <SectionHead text={"PORTFOLIO"} img1={butter1} img2={butter2} />
          <Hr />
        </div>

        {/* Hero images  */}
        <div className="row mb-5 ">
          <div className="col-md-5  col-auto me-auto ms-lg-auto ">
            <div className="heroTextContainer mt-5 d-flex flex-column text-start justify-content-start align-items-start ">
              <span className="Patrick_hand heroT1">Hey, I am</span>
              <span className="Mali heroT2">Gaurav Gupta😎</span>
              <p className="Mali heroT3">
                A Full Stack Web Developer <br />
              </p>
              <p className="Mali heroT3">
                "Passionate about building responsive and user-friendly
                websites."
              </p>
              <Socials />
            </div>
          </div>
          <div className="col-md-5 col-auto ms-4 ms-md-auto me-lg-auto pt-3 ">
            <SelfImage />
          </div>
        </div>
        <Hr />
        {/* About Me Section */}
        <div className="row pt-3 text-center" id="about">
          <SectionHead text={"ABOUT ME"} img1={smily1} img2={smily2} />
        </div>
        {/* Sticky Notes */}
        <div className="row my-4 aboutSticky">
          <div className="col-md-6 col-xl-5 mb-5 mb-md-0 ms-auto stickCol">
            <StickyNote
              tape={tape1}
              top={"-75"}
              bgVar={"--sticky-color"}
              rotate={"-0.8"}
              elements={
                <>
                  <div className="aboutStick1 p-4">
                    <div className="aboutTextContainer d-flex justifly-content-start align-items-start ">
                      <span className="dh">EXPERIENCE :-</span>
                      <span className="dd">One Year</span>
                    </div>
                    <div className="aboutTextContainer d-flex justifly-content-start align-items-start ">
                      <span className="dh">WORKS AT :-</span>
                      <span className="dd">
                        Digicoders technologies Pvt. Ltd{" "}
                      </span>
                    </div>
                    <div className="aboutTextContainer d-flex justifly-content-start align-items-start ">
                      <span className="dh">INTEREST :-</span>
                      <span className="dd">Full Stack Web Development</span>
                    </div>
                    <div className="aboutTextContainer d-flex justifly-content-start align-items-start ">
                      <span className="dh">QUALIFICATION :-</span>
                      <span className="dd">High School , CSE Diploma</span>
                    </div>
                  </div>
                </>
              }
            />
          </div>
          <div className="col-md-6 col-xl-5 me-auto stickCol">
            <StickyNote
              top={"-75"}
              tape={tape2}
              bgVar={"--sticky-color1"}
              rotate={"1.2"}
              elements={
                <>
                  <div className="aboutStick2 p-4 ">
                    <span className="Text_bold head">SKILLS :- </span>
                    <div className="skills ps-lg-5 ps-md-2 ps-5 ">
                      <p>
                        {" "}
                        <span className="skillHead Text_bold">
                          Backend:
                        </span>{" "}
                        Python (Django), PHP
                      </p>
                      <p>
                        {" "}
                        <span className="skillHead Text_bold">
                          Frontend:{" "}
                        </span>{" "}
                        HTML, CSS (Bootstrap, Tailwind), JavaScript, jQuery
                      </p>
                      <p>
                        {" "}
                        <span className="skillHead Text_bold">
                          Mobile:
                        </span>{" "}
                        Android Development(Java)
                      </p>
                      <p>
                        {" "}
                        <span className="skillHead Text_bold">
                          Learning:
                        </span>{" "}
                        MERN Stack (MongoDB, Express, React, Node)
                      </p>
                      <p>
                        {" "}
                        <span className="skillHead Text_bold">
                          Strengths:
                        </span>{" "}
                        Problem-solving, eager to learn, adaptable
                      </p>
                    </div>
                  </div>
                </>
              }
            />
          </div>
        </div>

        {/* About TExt */}
        <div className="row ">
          <div className="col-md-12 mx-auto">
            <p className="About-text Text_regular text-center">
              I'm Gaurav, a web developer focused on Python with Django, also
              experienced in Android development and PHP. I work with Bootstrap,
              Tailwind CSS, JavaScript, and jQuery on the frontend, and I’m
              currently learning the MERN stack to broaden my skills. I love
              solving challenges and growing through every project.
            </p>
          </div>
        </div>

        <Hr />

        {/* Projects Section */}
        <div className="row pt-3 text-center" id="project">
          <SectionHead text={"PROJECTS"} img1={bulb} img2={bulb} />
        </div>

        {/* 1st Project : Bloodhub */}
        <div className="row py-2">
          <div className="col-lg-5 flex-lg-column d-flex flex-column flex-md-row ms-auto align-items-center justify-content-center">
            <div className="projectSS position-relative">
              <img src={bloodHub} alt="bloodhub" className="bloodhub" />
              <img src={tape3} alt="" />
            </div>
            <div className="techStack position-relative Text_regular">
              <img src={stickyNote} alt="stickyNote" />
              <p>
                <span className="Text_bold">TechStack</span> <br />
                React, Django, Django REST Framework, SSE, Leaflet, Firebase, Bootstrap
              </p>
            </div>
          </div>

          <div className="col-lg-7 col-auto me-auto">
            <div className="project-head d-flex justify-content-between align-items-center Text_bold">
              <p className="project-head-text position-relative">
                BLOODHUB: UI for Your Blood Need
                <Hr />
              </p>
              <img src={github} alt="github" onClick={()=>{handleLinkClick("https://github.com/ZeeSHANAli321/BloodHub")}} />
            </div>

            <div className="project-description Text_regular">
              <p>
                BloodHub is a platform that connects blood donors with seekers,
                facilitating efficient communication and coordination for blood
                donations. It streamlines the process of finding donors and managing
                requests, ensuring timely assistance. The platform promotes easy
                interaction and real-time updates for all users.
              </p>
              <br />
              <p className="keyFeatures">
                <span>- Broadcast Messaging:</span> Seekers can instantly broadcast
                blood requests to all relevant donors. <br />
                <span>- Notification System:</span> Real-time updates on broadcasts,
                blood drives, and other critical notifications keep users informed.{" "}
                <br />
                <span>- Map Integration:</span> Leveraging Leaflet, BloodHub displays
                nearby users, blood banks, and blood drives, with advanced search and
                recentering features. <br />
                <span>- Chat Module:</span> Real-time communication powered by
                Server-Sent Events (SSE) ensures smooth coordination between users.{" "}
                <br />
                <span>- Responsive Design:</span> Built with Bootstrap, BloodHub offers
                a seamless experience across all devices.
              </p>
            </div>
          </div>
        </div>

        {/* 2nd Project : ReverbNation */}
        <div className="row py-2">
        <div className="col-lg-7 col-auto me-auto order-2 order-lg-1">
            <div className="project-head d-flex justify-content-between align-items-center Text_bold">
              <p className="project-head-text position-relative">
              REVERB NATION:A Rock Music Band .
              <Hr />
              </p>
              <img src={github} alt="github" onClick={()=>{handleLinkClick("https://github.com/codewithgaurave/ReverbNation")}} />
            </div>
            <div className="project-description Text_regular">
              <p>
              Reverb Nation is a music band website designed to provide an immersive experience for rock music lovers. Our project features a fully functional music player that allows users to stream the latest tracks seamlessly. With sections for news and events, fan engagement, and detailed band profiles, the site keeps fans updated and connected with the band’s musical journey.
              </p>
              <br />
              <p className="keyFeatures">
              <span>-Music Player:</span> Enjoy a sleek, built-in audio player to stream our tracks directly from the site.
                  <br/>
              <span>-Song Previews:</span> Listen to full tracks from our latest album and singles with just one click.
                  <br/>
              <span>-News & Events:</span> Stay updated with the latest band news, tour dates, and upcoming performances.
                  <br/>
              <span>-Fan Engagement:</span> Fans can drop comments and share their favorite songs with friends.
                <br/>
              <span>-Band Profiles:</span> Explore detailed profiles of band members, their musical journey, and inspirations.
              </p>
            </div>
          </div>
          <div className="col-lg-5 flex-lg-column d-flex flex-column flex-md-row ms-auto align-items-center justify-content-center order-1 order-lg-2">
            <div className="projectSS position-relative reverbNation">
              <img src={reverbNation} alt="bloodhub" className="reverbNation" />
              <img src={tape3} alt="" />
            </div>            
            <div className="techStack position-relative Text_regular">
              <img src={stickyNote} alt="stickyNote" />
              <p>
                <span className="Text_bold">TechStack</span> <br />
                Html, Css, Javascript, Bootstap
              </p>
            </div>
          </div>
        </div>

        {/* 3rd Project : Flappy Bird */}
        <div className="row py-2">
          <div className="col-lg-5 flex-lg-column flex-column d-flex flex-md-row ms-auto align-items-center justify-content-center">
            <div className="projectSS flappyBird position-relative">
              <img src={flappyBird} alt="bloodhub"  />
              <img src={tape3} alt="" />
            </div>
            <div className="techStack position-relative Text_regular">
              <img src={stickyNote} alt="stickyNote" />
              <p>
                <span className="Text_bold">TechStack</span> <br />
                Python, Pygame
              </p>
            </div>
          </div>

          <div className="col-lg-7 col-auto mx-auto">
            <div className="project-head d-flex justify-content-between align-items-center Text_bold">
              <p className="project-head-text position-relative">
                FLAPPY BIRD:A Python based game
                <Hr />
              </p>
              <img  src={github} alt="github" />
            </div>

            <div className="project-description Text_regular">
              <p>
              Flappy Bird is a classic arcade game where players control a bird to navigate through a series of pipes without hitting them. Built using Python, this game challenges your reflexes and timing as you try to achieve the highest score possible. The simple yet addictive gameplay keeps players engaged as they compete for the best scores.
              </p>
              <br />
              <p className="keyFeatures">
              <span>-Intuitive Controls:</span> Simple tap controls to make the bird flap and soar.
                <br/>
              <span>-Challenging Obstacles:</span> Navigate through a series of pipes that increase in difficulty.
              <br/>
              <span>-Score Tracking:</span> Keep track of your high scores and compete with friends.
              <br/>
              <span>-Colorful Graphics:</span> Bright and engaging visuals to enhance the gaming experience.
              <br/>
              <span>-Sound Effects:</span> Enjoy immersive sound effects that add to the gameplay atmosphere.
              </p>
            </div>
          </div>
        </div>

        <Hr />
        {/* Kind Words Section */}
        <div className="row pt-3 text-center" id="kindWords">
          <SectionHead text={"KIND WORDS"} img1={heart} img2={heart} />
        </div>
        <div className="row py-2 mb-5">
              <div className="kindWordGrid">
                <StickyNote rotate={'-1'} height={300} top={'-30'} tape={tape2_1}  bgVar={"--sticky-color"} 
                  elements={(<>
                    <div className="kindWordsText p-4 p-md-5">
                        <p className="text-center Text_regular">
                        "Working with Gaurav Gupta was a pleasure. His ability to communicate effectively and solve problems quickly made the project a success."
                        </p>
                        <span className="Text_bold">
                        — Zeeshan Ali, Web Developer
                        </span>
                    </div>
                  </>)}
                />
                <StickyNote rotate={'-1.6'} height={300} top={'-30'} tape={tape2_2}  bgVar={"--sticky-color1"} 
                  elements={(<>
                    <div className="kindWordsText p-4 p-md-5">
                        <p className="text-center Text_regular">
                        "Gaurav Gupta consistently delivers outstanding results. His attention to detail and creativity truly set him apart."                        </p>
                        <span className="Text_bold">
                        — Jayesh Ali, IAS Maharajganj
                        </span>
                    </div>
                  </>)}
                />
                <StickyNote rotate={'1'} height={300} top={'-30'} tape={tape2_3}  bgVar={"--sticky-color2"} 
                  elements={(<>
                    <div className="kindWordsText p-4 p-md-5">
                        <p className="text-center Text_regular">
                        "I highly recommend Gaurav Gupta! His skills in web development and design brought our vision to life."                        </p>
                        <span className="Text_bold">
                        — Gopal Sing, CTO Digicoder
                        </span>
                    </div>
                  </>)}
                />
                <StickyNote rotate={'-1.5'} height={300} top={'-30'} tape={tape2_4}  bgVar={"--sticky-color3"} 
                  elements={(<>
                    <div className="kindWordsText p-4 pt-5 p-md-5">
                        <p className="text-center Text_regular">
                        "Gaurav Gupta's dedication and expertise have greatly impacted our team. His work ethic and innovation are truly inspiring."                        </p>
                        <span className="Text_bold">
                        — Ashirwad Gupta, Group Member
                        </span>
                    </div>
                  </>)}
                />
              </div>
        </div>
        <Hr />

        {/* Connect With me Section  */}
        <div className="row pt-3 text-start" id="connect">
        <p><SectionHead text={"CONNECT WITH ME "}/></p>
        </div>
          <div className="row py-md-5 py-2 mb-5 Connect">
            <div className="col-lg-4 col-md-4 col-auto ms-1 ms-lg-auto">
                  <p className="Text_regular connectText ">
                  For Services like : <br/>
                  <span>-Full Stack Website Development.</span>
                  <span>-Frontend Development </span>
                  <span>-Hackathons</span>  
                  <span>-Teaching(i love it) </span>
                  
                  Or Just Say, Hello to me😀 

                  </p>
            </div>
            <div className="col-md-6 col-auto me-auto position-relative alter_div  ">
                  <div className="letter-container">
                  <Letter />
                  </div>
            </div>
          </div>
          <Hr />
                    <div className="Text_bold text-center mb-3" style={{fontSize:"20px"}}>©All Rights Reserved to Gaurav Gupta😎</div>


      </div>
    </>
  );
}
