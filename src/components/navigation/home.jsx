import React from "react";
<<<<<<< HEAD
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="/tetris">Tetris </Link>
      <Outlet />
    </div>
  );
=======
import { Link } from "react-router-dom";

const Home = () => {
  return <div><Link to='/hangman'>HangMan</Link></div>;
>>>>>>> Yepraksya-Matevosyan
};

export default Home;
