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
import { AiOutlineFacebook as FBLogo   } from "react-icons/ai";
import { AiOutlineTwitter as TwitterLogo  } from "react-icons/ai";
import { FaPinterestSquare as PinterestLogo } from "react-icons/fa";
import { AiOutlineInstagram  as InstagramLogo  } from "react-icons/ai";



const LandingPage = () =>{
    return(
        <body>
          <header className="landing-header">
            <nav>
              <div>
                <h2>loopsudios</h2>
              </div>
              <div>
                <ul>
                <li>Home</li>
                <li>About</li>
                <li>location</li>
              </ul>
              </div>
            </nav>
            <div>
              <h1>Immersive experiences that deliver</h1>
            </div>
          </header>
          <main>
            <div>
              <img className="interactive-img" src={Interactive} alt="Man in VR headset"></img>
              <h2>The leader in interactive VR</h2>
              <p>Anim ea id irure cupidatat culpa veniam eiusmod duis tempor in aliquip eiusmod pariatur qui. Eu nostrud deserunt ex eiusmod aliqua anim minim sunt cillum exercitation in. Amet quis in eu pariatur esse sunt quis velit sint dolore laboris nisi nulla. Duis ea laborum magna officia. In nisi occaecat aute Lorem amet tempor irure pariatur reprehenderit laborum aliqua.</p>
            </div>
            <div>
              <h2>Our Creations</h2>
              <img className="DeepEarth creations" src={DeepEarth} alt="Earth view from space"></img>
              <img className="NightArcade creations" src={NightArcade} alt="Skeeball score rings"></img>
              <img className="SoccerVR creations" src={SoccerVR} alt="Soccer player mid run"></img>
              <img className="Racecar creations" src={Racecar} alt="Closeup of tire on race car"></img>
              <img className="FromAbove creations" src={FromAbove} alt="Race track from top view"></img>
              <img className="Borealis creations" src={Borealis} alt="Stars and Space"></img>
              <img className="Curious creations"  src={Curious} alt="Curiosity rover"></img>
              <img className="Fisheye creations" src={Fisheye} alt="warped picture of nature"></img>
              <button>SEE ALL</button>
            </div>
            <footer>
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
              
                 <FBLogo/>
                 <TwitterLogo/>
                 <PinterestLogo/>
                 <InstagramLogo/>
              
            </footer>
          </main>
        </body>
    )
}
export default LandingPage