import React, { Component } from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
import { greeting } from "../../portfolio.js";

class Header extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <Fade top duration={1000} distance="20px">
        <div>
          <header className="header">
            <a className="logo">
              <span style={{ color: theme.text }}>|</span>
              <span className="logo-name" style={{ color: theme.text }}>
                {greeting.logo_name}
              </span>
              <span style={{ color: theme.text }}>|</span>
            </a>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn">
              <span className="navicon"></span>
            </label>
            <ul className="menu" style={{ backgroundColor: theme.body }}>
              <li>
                <a
                  href="#education"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  className="links"
                >
                  Education
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  className="links"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  className="links"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  className="links"
                >
                  Contact Me
                </a>
              </li>
            </ul>
          </header>
        </div>
      </Fade>
    );
  }
}
export default Header;
