import { useState } from "react";
import { useGlobalContext } from "../context";
import Loading from "./Loading";
import SportItem from "./SportItem";

const SportsList = () => {
  const { sports, loading, searchTerm } = useGlobalContext();
  const [isMore, setIsMore] = useState(false);

  const handleMore = () => {
    setIsMore(!isMore);
  };

  const itemsList = sports
    .filter((item) => item.strSport.toLowerCase().includes(searchTerm))
    .map((item) => {
      return <SportItem key={item.idSport} {...item} />;
    });

  if (loading) {
    return <Loading />;
  }
  if (itemsList.length === 0) {
    return (
      <div className="sport-list">
        <h1>I am not familiar with that sport...</h1>
      </div>
    );
  }
  return (
    <section className="sport-list">
      <ul className="sports-links">
        {isMore ? itemsList : itemsList.slice(0, 3)}
      </ul>
      <button onClick={handleMore} className="btn more-btn">
        {isMore ? "see less" : "see more"}
      </button>
    </section>
  );
};

export default SportsList;
