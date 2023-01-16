import { useState } from "react";
import { useGlobalContext } from "../context";
import Loading from "./Loading";
import SportItem from "./SportItem";

const SportsList = () => {
  const { sports, loading, searchTerm } = useGlobalContext();
  const [isMore, setIsMore] = useState(false);

  const handleMore = () => {
    setIsMore((prevState) => !prevState);
  };
  const itemsList = sports
    .filter((item) => item.id !== 94)
    .filter((item) => {
      return item.attributes.name.toLowerCase().includes(searchTerm);
    })
    .map((item) => {
      return <SportItem key={item.id} {...item} />;
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

      {itemsList.length >= 3 ? (
        <button onClick={handleMore} className="btn more-btn">
          {isMore ? "see less" : "see more"}
        </button>
      ) : null}
    </section>
  );
};

export default SportsList;
