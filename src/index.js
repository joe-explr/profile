// index.js
import React from "react";
import { createRoot } from "react-dom/client";
import Joe from "./images/Joe.jpeg";
import verified from "./images/verified.jpeg";
import clock from "./images/clock.png";

// Header Component
const Header = () => (
  <header>
    <div className="header-wrapper">
      <UserCard />
    </div>
  </header>
);

// User Card Component
const UserCard = () => (
  <div className="user-card">
    <img src={Joe} alt="Joe" />
    <h2>
      Joseph Babu Antony Powathil <img src={verified} alt="verified" />
    </h2>
    <small>Senior Developer, India</small>
  </div>
);

// TechList Component
const TechList = () => {
  const techs = [
    "HTML",
    "CSS",
    "JavaScript",
    "MongoDb",
    "Ruby on Rails",
    "Ruby",
    "Python",
    "Graphic Designing",
    "Video Editing"
  ];
  const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>);
  return techsFormatted;
};

// Main Component
const Main = () => (
  <main>
    <div className="main-wrapper">
      <p>
        <strong>SKILLS</strong>
      </p>
      <ul>
        <TechList />
      </ul>
      <br />
      <div>
        <p>
          <img id="clock" src={clock} alt="why" /> Joined on Jan, 2020
        </p>
      </div>
    </div>
  </main>
);

// Footer Component
const Footer = () => (
  <footer>
    <div className="footer-wrapper">
      <p>Copyright 2022</p>
    </div>
  </footer>
);

// The App, or the parent or the container component
const App = () => (
  <div className="app">
    <Header />
    <Main />
    <Footer />
  </div>
);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
// we render the App component using the ReactDOM package
root.render(<App />);
