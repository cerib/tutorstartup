import React, { useState, useEffect } from "react";

import FilterTutors from "./filtertutors";
import TutorCardsList from "./tutorcardslist";
import "./tutorssection.css";

const TutorsSection = () => {
  const tutorsToFetch = 3;
  const API = "https://jsonplaceholder.typicode.com/users";

  const [sortingBy, setSortingBy] = useState("byname");
  const [tutors, setTutors] = useState([]);
  const [currentFilter, setCurrentFilter] = useState("");
  const [fetchAll, setFetchAll] = useState(false);
  const [hasFetchedAll, sethasFetchedAll] = useState(false);

  useEffect(() => {
    function getFromApi(limit = "") {
      fetch(API + limit)
        .then(response => {
          let res = response.json();
          return res;
        })
        .then(data => {
          if (limit === "") {
            sethasFetchedAll(true);
          }
          return setTutors([...data]);
        });
    }
    if (fetchAll) {
      getFromApi("");
    } else {
      getFromApi("?&_limit=" + tutorsToFetch);
    }
  }, [sortingBy, fetchAll]);

  const getFrequentCities = tutors => {
    let cityFrequency = {};
    let cities = tutors.map(tutor => tutor.address.city);
    cities.forEach(city => (cityFrequency[city] = 0));
    let uniqueCities = cities.filter(city => ++cityFrequency[city] === 1);

    return uniqueCities
      .sort(function(a, b) {
        return cityFrequency[b] - cityFrequency[a];
      })
      .splice(0, 3);
  };

  const mostFrequentCities = getFrequentCities(tutors);

  const sortHandler = type => {
    setSortingBy(type);
  };

  const setCityFilter = city => {
    if (currentFilter === city) {
      setCurrentFilter("");
    } else {
      setCurrentFilter(city);
    }
  };

  const tutorCardsList = tutors.filter(tutor => {
    if (currentFilter === "") {
      return true;
    }
    return tutor.address.city === currentFilter;
  });

  const showAllTutors = () => {
    setFetchAll(true);
  };

  return (
    <React.Fragment>
      <div className="ui container tutorssection">
        <div className="tutors-section-description">
          <h2>Our Tutors</h2>
          <p>
            We have more than 10 tutors from various disciplines ready to match
            with you.
          </p>
        </div>
        <FilterTutors
          cities={mostFrequentCities}
          sortHandler={sortHandler}
          setCityFilter={setCityFilter}
        />
      </div>
      <div className="ui divider breaker" />
      <div className="ui container" style={{ margin: 30 }}>
        <TutorCardsList
          tutors={tutorCardsList}
          showAllTutors={showAllTutors}
          hasFetchedAll={hasFetchedAll}
          sortingBy={sortingBy}
        />
      </div>
    </React.Fragment>
  );
};

export default TutorsSection;
