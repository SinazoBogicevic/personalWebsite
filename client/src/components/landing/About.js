import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SinazoB from "../SinazoB";

export default function About() {
  return (
    <AboutContainer>
      <div className="frame">
        <div ClassName="img">
          <div className="potrait">
            <img src={SinazoB} alt="potrait" />
          </div>
        </div>
      </div>
      <div className="intro">
        <h3>About me</h3>
        <h5>Developer</h5>
        <p>
          Web and Mobile specialist.
          <br />
          Coding is my passion
        </p>
        <div>
          <Link to="/mail">
            <button className="hire">Hire me</button>
          </Link>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/u/0/uc?id=1Fu3_BdfgVTxauZ6WPjw9Idlh18pobq_l&export=download"
            download="Sinazo_Bogicevic_CV"
            style={{ textDecoration: "none" }}
          >
            <button className="load">Download CV</button>
          </a>
        </div>
      </div>
    </AboutContainer>
  );
}

const AboutContainer = styled.div`
  height: 100%;
  display: grid;
  grid-gap: 2px;
  position: relative;
  box-sizing: border-box;
  grid-template-columns: repeat(8, auto);
  grid-template-rows: repeat(3, auto);
  .frame {
    margin: auto 0;
    grid-column: 2/4;
    grid-row: 2/4;
  }
  .img {
    width: 100px;
    height: 100px;
  }
  .potrait {
    position: relative;
    width: 120px;
    height: 110px;
  }
  img {
    position: absolute;
    right: 0;
    width: 95%;
    height: 95%;
    box-shadow: -10px 10px rgb(0, 0, 0);
  }
  .intro {
    grid-column: 5/9;
    grid-row: 2/4;
  }
  button {
    margin-top: 12px;
    border: 1px solid rgb(0, 0, 0);
    background-color: rgb(0, 0, 0);
    color: rgb(255, 255, 255);
    padding: 6px 16px;
    cursor: pointer;
  }
  button:hover {
    color: rgb(0, 0, 0);
    background-color: rgb(255, 255, 255);
  }
  .hire {
    margin-right: 24px;
  }
  @media only screen and (max-width: 600px) {
    display: block;
    .frame {
      display: none;
    }
    .intro {
      margin-top: 18px;
      text-align: center;
    }
  }
`;
