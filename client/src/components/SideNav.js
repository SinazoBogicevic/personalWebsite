import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function SideNav() {
  return (
    <SideWrapper>
      <ul className="sidelinks">
        <li className="link">
          <a
            href="https://www.linkedin.com/in/sinazo-noqhamza-bogicevic-758b571a7/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </li>
        <li className="link">
          <a
            href="https://github.com/SinazoBogicevic"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-github-alt"></i>
          </a>
        </li>
        <li className="link">
          <a
            href="https://codepen.io/Sinazo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-codepen"></i>
          </a>
        </li>
        <Link to="/mail">
          <li className="link">
            <a href="/" target="_blank">
              <i class="far fa-envelope"></i>
            </a>
          </li>
        </Link>
      </ul>
    </SideWrapper>
  );
}

const SideWrapper = styled.ul`
  background-color: rgb(255, 255, 255);
  width: 42px;
  margin: 0px auto;
  padding: 0px;
  ul {
    width: 100%;
    list-style-type: none;
  }
  li {
    border: 1px solid rgb(240, 240, 240);
    padding: 8px;
  }
  a {
    color: rgb(0, 0, 0);
  }
  li:hover {
    background-color: rgb(0, 0, 0);
    a {
      color: rgb(255, 255, 255);
    }
  }
  .fab,
  .far {
    margin-left: 6px;
  }

  @media only screen and (max-width: 725px) {
    display: none;
  }
`;
