import React from "react";

const TutorCard = ({ name, city, image }) => {
  //TODO students so far can't be hard-coded
  return (
    <div className="ui card">
      <div className="content">
        <div className="image">
          <img src={image} alt="tutor" style={{ maxWidth: "100%" }} />
        </div>
      </div>
      <div className="content">
        <div className="header">{name}</div>
      </div>
      <div className="content">
        <p>City</p>
        <div className="ui label">{city}</div>
        <p>Students so far</p>
        <img
          className="ui avatar image"
          src={process.env.PUBLIC_URL + "/assets/images/student-photo.jpg"}
          alt="avatar"
        />
        <img
          className="ui avatar image"
          src={process.env.PUBLIC_URL + "/assets/images/student-photo.jpg"}
          alt="avatar"
        />
        <img
          className="ui avatar image"
          src={process.env.PUBLIC_URL + "/assets/images/student-photo.jpg"}
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default TutorCard;
