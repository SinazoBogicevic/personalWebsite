import React from "react";
import Greeting from "./Greeting";
import SideNav from "../SideNav";
import styled from "styled-components";

export default function Main() {
  return (
    <MainContainer>
      <Greeting className="greeting" />
    </MainContainer>
  );
}

const MainContainer = styled.div``;
