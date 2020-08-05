import React from "react";
import styled from "styled-components";

export default function SocialMedia() {
  let date = new Date();
  let currentYear = date.getFullYear();
  return (
    <Footer>
      <h3>Get to know me</h3>
      <p style={{ margin: "25px 0px 25px" }}>
        if you want to see more of my work use the links below
      </p>
      <ul className="links">
        <li className="link">
          <a
            href="https://www.linkedin.com/in/sinazo-noqhamza-bogicevic-758b571a7/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-linkedin-in"></i>
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
      </ul>
      <small style={{ fontSize: "0.85rem" }}>
        CopyRight
        <span style={{ marginRight: "3px" }}>
          <i class="far fa-copyright"></i>
        </span>{" "}
        {currentYear}, Sinazo Bogicevic
      </small>
    </Footer>
  );
}

const Footer = styled.div`
  width: 100%;
  padding: 50px;
  text-align: center;
  .links {
    width: 250px;
    display: flex;
    margin: 12px auto;
    list-style-type: none;
  }
  a {
    text-decoration: none;
  }
  .link {
    cursor: pointer;
    border: 1px solid rgb(242, 242, 242);
    border-radius: 52px;
    background-color: rgb(242, 242, 242);
  }
  .link:hover {
    background-color: rgb(0, 0, 0);
  }
  li:nth-child(1) {
    margin-left: 42px;
  }
  li:nth-child(2) {
    margin-right: 16px;
    margin-left: 16px;
  }
  .fab {
    font-size: 1.05rem;
    color: black;
    padding: 12px;
  }
  .fab:hover {
    color: rgb(255, 255, 255);
  }
`;
