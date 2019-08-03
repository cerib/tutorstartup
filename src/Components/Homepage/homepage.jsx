import React from "react";
import WelcomeMessage from "../WelcomeMessage/welcomemessage";
import TutorsSection from "../Tutors/tutorssection";

import "./homepage.css";

const Homepage = () => {
  return (
    <div>
      <div className="background-color-fullwidth">
        <WelcomeMessage />
      </div>
      <div>
        <TutorsSection />
      </div>
    </div>
  );
};

export default Homepage;
