import React from "react";
import "./stylesheets/LandingPage.css";
import Interactive from "../component-imgs/mobile-imgs/image-interactive.jpg";
import DeepEarth from "../component-imgs/mobile-imgs/image-deep-earth.jpg";
import NightArcade from "../component-imgs/mobile-imgs/image-night-arcade.jpg";
import SoccerVR from "../component-imgs/mobile-imgs/image-soccer-team.jpg";
import Racecar from "../component-imgs/mobile-imgs/image-grid.jpg";
import FromAbove from "../component-imgs/mobile-imgs/image-from-above.jpg";
import Borealis from "../component-imgs/mobile-imgs/image-pocket-borealis.jpg";
import Curious from "../component-imgs/mobile-imgs/image-curiosity.jpg";
import Fisheye from "../component-imgs/mobile-imgs/image-fisheye.jpg";
import InteractiveDesk from "../component-imgs/desktop-imgs/image-interactive.jpg";
import DeepEarthDesk from "../component-imgs/desktop-imgs/image-deep-earth.jpg";
import NightArcadeDesk from "../component-imgs/desktop-imgs/image-night-arcade.jpg";
import SoccerVRDesk from "../component-imgs/desktop-imgs/image-soccer-team.jpg";
import RacecarDesk from "../component-imgs/desktop-imgs/image-grid.jpg";
import FromAboveDesk from "../component-imgs/desktop-imgs/image-from-above.jpg";
import BorealisDesk from "../component-imgs/desktop-imgs/image-pocket-borealis.jpg";
import CuriousDesk from "../component-imgs/desktop-imgs/image-curiosity.jpg";
import FisheyeDesk from "../component-imgs/desktop-imgs/image-fisheye.jpg";
import { AiOutlineFacebook as FBLogo   } from "react-icons/ai";
import { AiOutlineTwitter as TwitterLogo  } from "react-icons/ai";
import { FaPinterestSquare as PinterestLogo } from "react-icons/fa";
import { AiOutlineInstagram  as InstagramLogo  } from "react-icons/ai";



const LandingPage = () =>{
    return(
        <body>
          <header className="landing-header">
            <nav className="nav">
              <div>
                <h2 className="navBarCompName">loopsudios</h2>
              </div>
              <div>
                <ul className="nav-list">
                  <li>Home</li>
                  <li>About</li>
                  <li>location</li>
                </ul>
              </div>
            </nav>
            <div className="header-text-parent">
              <h1 className="header-text">Immersive experiences that deliver</h1>
            </div>
          </header>
          <main>
            <div className="interactive-parent">
              <img className="interactive-img" src={Interactive} alt="Man in VR headset"></img>
              <div className="interactive-header-parent">
                <h2 className="interactive-header">The leader in interactive VR</h2>
                <p className = "interactive-content">Anim ea id irure cupidatat culpa veniam eiusmod duis tempor in aliquip eiusmod pariatur qui. Eu nostrud deserunt ex eiusmod aliqua anim minim sunt cillum exercitation in. Amet quis in eu pariatur esse sunt quis velit sint dolore laboris nisi nulla. Duis ea laborum magna officia. In nisi occaecat aute Lorem amet tempor irure pariatur reprehenderit laborum aliqua.</p>
              </div>
            </div>
            <div className="creations-parent">
              <div className="creations-title-parent">
                <h2 className="creations-title">Our Creations</h2>
                <button className="desktop-button">SEE ALL</button>
              </div>
              <div className="creations-imgs-parent">
                <div className="DeepEarth"  alt="Earth view from space">
                  <img src={DeepEarth} alt="" className="creations"></img>
                </div>
                <div className="NightArcade"  alt="Skeeball score rings">
                  <img src={NightArcade} alt="" className="creations"></img>
                </div>
                <div className="SoccerVR"  alt="Soccer player mid run">
                  <img src={SoccerVR} alt="" className="creations"></img>
                </div>
                <div className="Racecar"  alt="Closeup of tire on race car">
                  <img src={Racecar} alt="" className="creations"></img>
                </div>
                <div className="FromAbove"  alt="Race track from top view">
                  <img src={FromAbove} alt="" className="creations"></img>
                </div>
                <div className="Borealis"  alt="Stars and Space">
                  <img src={Borealis} alt="" className="creations"></img>
                </div>
                <div className="Curious"  alt="Curiosity rover">
                  <img src={Curious} alt="" className="creations"></img>
                </div>
                <div className="Fisheye"  alt="warped picture of nature">
                  <img src={Fisheye} alt="" className="creations"></img>
                </div>
              </div>
              <div className="creations-button-parent">
                <button className="mobile-button">SEE ALL</button>
              </div>
              
            </div>
            <footer className="footer-parent">
              <h3>Loopstudios</h3>
              <div>
                <ul>
                  <li>About</li>
                  <li>Careers</li>
                  <li>Events</li>
                  <li>Products</li>
                  <li>Support</li>
                </ul>
              </div>
              <div>
                <FBLogo/>
                 <TwitterLogo/>
                 <PinterestLogo/>
                 <InstagramLogo/>
              </div>
                 
              
            </footer>
          </main>
        </body>
    )
}
export default LandingPage