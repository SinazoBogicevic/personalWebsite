import React from "react";
import styled from "styled-components";
import { Link, Element } from "react-scroll";
import Logo from "./logo.png";

export default function Navbar() {
  function openToggle() {
    document.getElementById("toggle").classList.toggle("cancel");
    //document.getElementById("nav-links").classList.toggle("hide", false);
    document.getElementById("nav-links").classList.toggle("show");
  }

  const closeBar = () => {
    let el = document.querySelector("li");

    if (el) {
      document.getElementById("toggle").classList.toggle("cancel", false);
      document.getElementById("nav-links").classList.toggle("show", false);
    }
  };

  return (
    <Nav>
      <div className="brand-toggle">
        <img
          id="navbar-brand"
          src={Logo}
          width="200px"
          height="48px"
          alt="logo"
        />
        <div id="toggle" onClick={() => openToggle()}>
          <span className="toggle-nav"></span>
        </div>
      </div>
      <ul id="nav-links">
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={50}
          onClick={() => closeBar()}
        >
          <li className="link">Home</li>
        </Link>

        <Link
          activeClass="active"
          to="tech"
          spy={true}
          smooth={true}
          offset={10}
          onClick={() => closeBar()}
        >
          <li className="link">Projects</li>
        </Link>

        <Link
          activeClass="active"
          to="tech"
          spy={true}
          smooth={true}
          offset={7}
          onClick={() => closeBar()}
        >
          <li className="link">Tech</li>
        </Link>

        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={50}
          onClick={() => closeBar()}
        >
          <li className="link">Contact</li>
        </Link>
      </ul>
    </Nav>
  );
}

const Nav = styled.div`
  display: block;
  position: relative;
  z-index: 50;
  width: 100%;
  box-sizing: border-box;
  justify-content: space-between;
  border-bottom: 1px solid rgb(38, 38, 38, 0.5);
  box-shadow: 0px 5px 8px rgb(26, 26, 26);
  padding-bottom: 12px;
  overflow: hidden;
  .brand-toggle {
    display: flex;
    justify-content: space-between;
  }
  #navbar-brand {
    margin-left: 24px;
    margin-top: 10px;
    cursor: pointer;
  }
  #nav-links {
    text-align: center;
    width: 375px;
    height: 100vh;
    display: none;
    margin: 25px auto;
    list-style-type: none;
  }
  .link {
    width: 75%;
    margin 50px ;
    padding: 8px 0px !important;
    cursor: pointer;
  }
  .link:hover {
    border: 1px solid rgb(0, 0, 0) !important;
    font-weight: bold;
  }
  #toggle {
    display: block;
    width: 2.5rem;
    height: 2rem;
    margin: 10px 32px 0px 0px;
    font-size: 1.2rem;
    font-weight: 500;
    text-align: center;
    cursor: pointer;
  }
  .toggle-nav,
  #toggle::before,
  #toggle::after {
    content: "";
    display: block;
    background-color: rgb(0, 0, 0);
    height: 0.4rem;
    width: 100%;
    margin: 4px;
    transition: all 0.2s ease-out;
  }
  .cancel::before {
    transform: translateY(10px) rotate(135deg) !important;
  }
  .cancel::after {
    transform: translateY(-10px) rotate(-135deg) !important;
  }
  .cancel .toggle-nav {
    transform: scale(0) !important;
  }
  .show {
    display: block !important;
  }

  @media only screen and (min-width: 600px) {
    display: flex;
    justify-content: space-between;
    #nav-links {
      height: 50px;
      display: flex !important;
      margin: 0px 55px 0px 0px;
    }
    .link {
      width: 70%;
      margin: 8px 24px;
      padding: 0px;
    }
    .link:hover {
      border: 1px solid rgb(0, 0, 0, 0.3);
      padding: 0px 4px;
    }
    #toggle {
      display: none;
    }
  }
`;
