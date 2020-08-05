import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function ContactMeBanner() {
  return (
    <Banner name="contact">
      <h3 style={{ textDecoration: "underline" }}>
        If you have any project in mind
      </h3>
      <Link to="/mail">
        <button className="contact">Contact me</button>
      </Link>
    </Banner>
  );
}

const Banner = styled.div`
  width: 100%;
  padding: 50px;
  margin-top: 25px;
  background-color: rgb(0, 0, 0);
  color: rgb(255, 255, 255);
  text-align: center;
  .contact {
    width: 150px;
    margin-top: 24px;
    color: rgb(0, 0, 0);
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(0, 0, 0);
    padding: 6px 16px;
    cursor: pointer;
  }
  .contact:active {
    width: 160px;
  }
  .contact:hover {
    border: 1px solid rgb(255, 255, 255);
    color: rgb(255, 255, 255);
    background-color: rgb(0, 0, 0);
  }
`;
