import React from "react";
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="/tetris">Tetris </Link>
      <Outlet />
    </div>
  );
};

export default Home;
