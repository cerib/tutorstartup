import React, { useState, useEffect } from "react";
import TutorCard from "./tutorcard";

const TutorCardsList = ({
  tutors,
  showAllTutors,
  hasFetchedAll,
  sortingBy
}) => {
  const placeholderImage =
    process.env.PUBLIC_URL + "/assets/images/user-photo.jpg";

  const [fetchClicked, setFetchClicked] = useState(false);

  const compare = (a, b) => {
    if (sortingBy === "byname") {
      return a.name < b.name ? -1 : 1;
    }
    if (sortingBy === "bycity") {
      return a.address.city < b.address.city ? -1 : 1;
    }
  };

  useEffect(() => {
    if (hasFetchedAll) {
      setFetchClicked(true);
    } else {
      setFetchClicked(false);
    }
  }, [hasFetchedAll]);

  const sortedTutors = tutors.sort(compare);
  const tutorCards = sortedTutors.map(tutor => {
    return (
      <TutorCard
        key={tutor.id}
        name={tutor.name}
        city={tutor.address.city}
        image={placeholderImage}
      />
    );
  });

  const handleAllTutorsClick = () => {
    showAllTutors();
  };

  return (
    <div>
      <div className="ui container centered cards">{tutorCards}</div>
      {!fetchClicked ? (
        <div className="ui column centered grid">
          <button
            className="ui button"
            id="all-tutors-button"
            onClick={handleAllTutorsClick}
          >
            See all tutors
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default TutorCardsList;
