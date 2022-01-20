import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navigation/navBar";
import About from "./components/navigation/about";
import LoginForm from "./components/navigation/loginForm";
import RegisterForm from "./components/navigation/registerForm";
import Home from "./components/navigation/home";
import Game from './components/MemoryGame/Game'

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/MemoryGame" element={<Game />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    </div>
  );
};

export default App;
