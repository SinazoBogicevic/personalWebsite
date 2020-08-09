import React from "react";
import About from "./About";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Greeting() {
  return (
    <Container name="home">
      <div className="info">
        <h4 className="greyish">Hello,</h4>
        <h2 className="title">I'm Sinazo Bogicevic</h2>
        <h3 className="greyish">I am a Software Engineer</h3>
        <div className="buttons">
          <Link to="/mail">
            <button className="button hire-me">Hire me</button>
          </Link>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/u/0/uc?id=1v3fe1M65NkBj9sddOt6TwkrH_sPN1KXY&export=download"
            download="Sinazo_Bogicevic_CV"
            style={{ textDecoration: "none" }}
          >
            <button className="button download">Download CV</button>
          </a>
        </div>
      </div>
      <div className="about">
        <About />
      </div>
      <div className="right"></div>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(6, auto);
  grid-template-rows: repeat(12, auto);
  grid-gap: 3px;
  background-color: rgb(242, 242, 242);
  width: 100%;
  height: 100vh;
  .info {
    grid-column: 2;
    grid-row: 3/4;
    text-align: left;
  }
  .greyish {
    color: rgb(51, 51, 51);
    font-weight: 400;
  }
  .title {
    font-family: "Fugaz One", cursive !important;
  }
  .buttons {
    margin-left: 8px;
  }
  .button {
    margin-top: 12px;
    border: 1px solid rgb(0, 0, 0);
    border-radius: 12px;
    padding: 6px 16px;
    cursor: pointer;
  }
  .hire-me {
    margin-right: 24px;
  }
  .hire-me:hover {
    background-color: rgb(0, 0, 0);
    color: rgb(255, 255, 255);
  }
  .download {
    background: rgb(0, 0, 0);
    color: rgb(255, 255, 255);
  }
  .download:hover {
    background: rgb(255, 255, 255);
    color: rgb(0, 0, 0);
  }
  .about {
    border: none;
    border-radius: 16px;
    grid-column: 2/6;
    grid-row: 7/11;
    z-index: 3;
    background-color: rgb(255, 255, 255);
  }
  .right {
    grid-column: 3/7;
    grid-row: 1/9;
    background-color: rgb(230, 230, 230);
  }
  @media only screen and (max-width: 600px) and (orientation: landscape) {
    width: 100%;
    .info {
      text-align: center;
      margin-left: 45px;
    }
    .right {
      display: none;
    }
  }
`;
