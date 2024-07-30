import React, { useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const clickToggle = () => {
    setToggle((prevToggle) => !prevToggle);
  };
  return (
    <header>
      <ul className={toggle ? "toggle toggle-show" : "toggle"}>
        <ul className="toggle-button" onClick={clickToggle}>
          <li />
          <li />
          <li />
        </ul>
        <li>
          <a className="logo" href="/">
            S
          </a>
        </li>
        <li>
          <ul>
            <li>
              <a href="/projects">PROJECTS</a>
            </li>
            <li>
              <a href="/skills">SKILLS</a>
            </li>
            <li>
              <a href="/certificates">CERTIFCATES</a>
            </li>
            <li>
              <a href="/contact">CONTACT</a>
            </li>
          </ul>
        </li>
      </ul>
    </header>
  );
};

export default Header;
