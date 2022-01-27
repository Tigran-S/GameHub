import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

export default function Home() {
  return (
    <>
      {/* Navbar (sit on top) */}
      <div className="w3-top">
        <div className="w3-bar w3-white w3-wide w3-padding w3-card">
          <a
            href="#home"
            className="w3-bar-item w3-button"
          >
            <b>Game Hub</b>
          </a>
          {/* Float links to the right. Hide them on small screens */}
          <div className="w3-right w3-hide-small">
            <a
              href="#games"
              className="w3-bar-item w3-button"
            >
              Games
            </a>
            <a
              href="#team"
              className="w3-bar-item w3-button"
            >
              Team
            </a>
            <Link to="/login" className="w3-bar-item w3-button">
              Logout
            </Link>
          </div>
        </div>
      </div>

      {/* Page content */}
      <div className="w3-content w3-padding" style={{ maxWidth: "1564px" }}>
        {/* Project Section */}
        <div className="w3-container w3-padding-32" id="games">
          <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">
            Games
          </h3>
        </div>

        <div className="w3-row-padding">
          <div className="w3-col l3 m6 w3-margin-bottom">
            <Link to="/tetris">
              <div className="w3-display-container">
                <img
                  src="./images/games/g3.png"
                  alt="Tetris"
                  style={{ width: "100%" }}
                />
              </div>
            </Link>
          </div>
          <div className="w3-col l3 m6 w3-margin-bottom">
            <Link to="/hangman">
              <div className="w3-display-container">
                <img
                  src="./images/games/g4.jpeg"
                  alt="hangman"
                  style={{ width: "100%" }}
                />
              </div>
            </Link>
          </div>
          <div className="w3-col l3 m6 w3-margin-bottom">
            <Link to="/QuizGameForFamily">
              <div className="w3-display-container">
                <img
                  src="./images/games/g2.jpeg"
                  alt="Family Quiz Game"
                  style={{ width: "100%" }}
                />
              </div>
            </Link>
          </div>
          <div className="w3-col l3 m6 w3-margin-bottom">
            <Link to="/MemoryGame">
              <div className="w3-display-container">
                <img
                  src="./images/games/g1.jpeg"
                  alt="Memory Game"
                  style={{ width: "100%" }}
                />
              </div>
            </Link>
          </div>
          <div className="w3-col l3 m6 w3-margin-bottom">
            <Link to="/MemoryGame">
              <div className="w3-display-container">
                <img
                  src="./images/games/g1.jpeg"
                  alt="Memory Game"
                  style={{ width: "100%" }}
                />
              </div>
            </Link>
          </div>
        </div>

        {/* About Section */}
        <div className="w3-container w3-padding-32" id="team">
          <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">
            Team
          </h3>
          <p>We are small team, this is our first project with React.</p>
        </div>

        <div className="w3-row-padding w3-grayscale">
          <div className="w3-col l3 m6 w3-margin-bottom">
            <img
              src="./images/team/m3.jpeg"
              alt="Tigran"
              style={{ width: "100%" }}
            />
            <h3>Tigran Sargsyan</h3>
            <p className="w3-opacity">Tetris Game Creator</p>
            <p>
              <button className="w3-button w3-light-grey w3-block">
                Contact
              </button>
            </p>
          </div>
          <div className="w3-col l3 m6 w3-margin-bottom">
            <img
              src="./images/team/m4.jpeg"
              alt="Yepraksya"
              style={{ width: "100%" }}
            />
            <h3>Yepraksya Matevosyan</h3>
            <p className="w3-opacity">HangMan Game Creator</p>
            <p>
              <button className="w3-button w3-light-grey w3-block">
                Contact
              </button>
            </p>
          </div>
          <div className="w3-col l3 m6 w3-margin-bottom">
            <img
              src="./images/team/m2.jpeg"
              alt="Tatevik"
              style={{ width: "100%" }}
            />
            <h3>Tatevik Avetisyan</h3>
            <p className="w3-opacity">Quiz Game Creator</p>
            <p>
              <button className="w3-button w3-light-grey w3-block">
                Contact
              </button>
            </p>
          </div>
          <div className="w3-col l3 m6 w3-margin-bottom">
            <img
              src="./images/team/m1.jpeg"
              alt="Gevorg"
              style={{ width: "100%" }}
            />
            <h3>Gevorg Daghlaryan</h3>
            <p className="w3-opacity">Memory Game Creator</p>
            <p>
              <button className="w3-button w3-light-grey w3-block">
                Contact
              </button>
            </p>
          </div>
          <div className="w3-col l3 m6 w3-margin-bottom">
            <img
              src="./images/team/m5.png"
              alt="Grigor"
              style={{ width: "100%" }}
            />
            <h3>Grigor Tamazyan</h3>
            <p className="w3-opacity">Memory Game Creator</p>
            <p>
              <button className="w3-button w3-light-grey w3-block">
                Contact
              </button>
            </p>
          </div>
        </div>

        {/* End page content */}
      </div>

      {/* Footer */}
      <footer className="w3-center w3-black w3-padding-16">
        <p>Powered by ACA 2022</p>
      </footer>
    </>
  );
}
