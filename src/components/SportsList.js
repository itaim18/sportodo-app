import React from "react";
import { useGlobalContext } from "../context";
import Loading from "./Loading";
import SportItem from "./SportItem";

const SportsList = () => {
  const { sports, loading, searchTerm } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }
  if (sports.length === 0) {
    return (
      <div className="sport-list">
        <h1>I am not familiar with that sport...</h1>
      </div>
    );
  }
  return (
    <section className="sport-list">
      <ul className="sports-links">
        {sports
          .filter((item) => item.strSport.toLowerCase().includes(searchTerm))
          .map((item) => {
            return <SportItem key={item.idSport} {...item} />;
          })}
      </ul>
    </section>
  );
};

export default SportsList;
