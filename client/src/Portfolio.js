import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/landing/Main";
import Projects from "./components/Projects";
import ContactMeBanner from "./components/ContactMeBanner";
import SocialMedia from "./components/SocialMedia";
import PageNotFound from "./components/PageNotFound";
import SideNav from "./components/SideNav";
import styled from "styled-components";

export default function Portfolio() {
  return (
    <Container>
      <Navbar />
      <div className="sidenav">
        <SideNav />
      </div>
      <Main />
      <Projects />
      <ContactMeBanner />
      <SocialMedia />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  overflow-x: hidden;
  position: relative;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: rgb(255, 255, 255);
  .sidenav {
    position: fixed;
    right: 0;
    z-index: 100;
  }
`;
