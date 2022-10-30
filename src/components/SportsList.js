import React from "react";

import SportItem from "./SportItem";

const categories = [
  {
    id: "1",
    strSport: "Soccer",
    strFormat: "TeamvsTeam",
    strSportThumb: "https://www.thesportsdb.com/images/sports/soccer.jpg",
    strSportIconGreen:
      "https://www.thesportsdb.com/images/icons/sports/soccer.png",
    strSportDescription:
      "Association football, more commonly known as football or soccer, is a team sport played between two teams of eleven players with a spherical ball. It is played by 250 million players in over 200 countries and dependencies, making it the world's most popular sport. The game is played on a rectangular field with a goal at each end. The object of the game is to score by getting the ball into the opposing goal. Players are not allowed to touch the ball with their hands or arms while it is in play, unless they are goalkeepers (and then only when within their penalty area). Other players mainly use their feet to strike or pass the ball, but may also use any part of their body except the hands and the arms. The team that scores the most goals by the end of the match wins. If the score is level at the end of the game, either a draw is declared or the game goes into extra time or a penalty shootout depending on the format of the competition. The Laws of the Game were originally codified in England by The Football Association in 1863. Association football is governed internationally by the International Federation of Association Football (FIFA; French: Fédération Internationale de Football Association), which organises World Cups for both men and women every four years.",
  },
  {
    id: "2",
    strSport: "Soccer",
    strFormat: "TeamvsTeam",
    strSportThumb: "https://www.thesportsdb.com/images/sports/soccer.jpg",
    strSportIconGreen:
      "https://www.thesportsdb.com/images/icons/sports/soccer.png",
    strSportDescription:
      "Association football, more commonly known as football or soccer, is a team sport played between two teams of eleven players with a spherical ball. It is played by 250 million players in over 200 countries and dependencies, making it the world's most popular sport. The game is played on a rectangular field with a goal at each end. The object of the game is to score by getting the ball into the opposing goal. Players are not allowed to touch the ball with their hands or arms while it is in play, unless they are goalkeepers (and then only when within their penalty area). Other players mainly use their feet to strike or pass the ball, but may also use any part of their body except the hands and the arms. The team that scores the most goals by the end of the match wins. If the score is level at the end of the game, either a draw is declared or the game goes into extra time or a penalty shootout depending on the format of the competition. The Laws of the Game were originally codified in England by The Football Association in 1863. Association football is governed internationally by the International Federation of Association Football (FIFA; French: Fédération Internationale de Football Association), which organises World Cups for both men and women every four years.",
  },
  {
    id: "3",
    strSport: "Soccer",
    strFormat: "TeamvsTeam",
    strSportThumb: "https://www.thesportsdb.com/images/sports/soccer.jpg",
    strSportIconGreen:
      "https://www.thesportsdb.com/images/icons/sports/soccer.png",
    strSportDescription:
      "Association football, more commonly known as football or soccer, is a team sport played between two teams of eleven players with a spherical ball. It is played by 250 million players in over 200 countries and dependencies, making it the world's most popular sport. The game is played on a rectangular field with a goal at each end. The object of the game is to score by getting the ball into the opposing goal. Players are not allowed to touch the ball with their hands or arms while it is in play, unless they are goalkeepers (and then only when within their penalty area). Other players mainly use their feet to strike or pass the ball, but may also use any part of their body except the hands and the arms. The team that scores the most goals by the end of the match wins. If the score is level at the end of the game, either a draw is declared or the game goes into extra time or a penalty shootout depending on the format of the competition. The Laws of the Game were originally codified in England by The Football Association in 1863. Association football is governed internationally by the International Federation of Association Football (FIFA; French: Fédération Internationale de Football Association), which organises World Cups for both men and women every four years.",
  },
];
const SportsList = () => {
  return (
    <section className="sport-list">
      <ul className="sports-links">
        {categories.map((item) => (
          <SportItem key={item.id} {...item} />
        ))}
      </ul>
    </section>
  );
};

export default SportsList;
