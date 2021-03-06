import React from "react";
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="/tetris">Tetris </Link>
      <Link to="/hangman">HangMan</Link>
      <Link to="/QuizGameForFamily"> Quiz Game For Family</Link>
      <Link to="/MemoryGame">MemoryGame</Link>
      <Outlet />
    </div>
  );
};
export default Home;
