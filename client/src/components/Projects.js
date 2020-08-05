import React from "react";
import styled from "styled-components";

export default function Projects() {
  return (
    <ProjectsContainer>
      <h3 name="tech" style={{ marginBottom: "12px" }}>
        Tech
      </h3>
      <p className="intro">
        HTML/CSS JavaScript React Android Java Android Studio Eclipse Bootstrap
        SpringBoot JSON POSTGRES MYSQL Node
      </p>
      <ul className="projects" name="projects">
        <li className=" text">
          <h4>Project</h4>
          <p>
            Uses the moviesdb API to search for movies that fit the query
            parameters
          </p>
          <a
            href="https://sinazobogicevic.github.io/movie-search-engine/#/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>More</button>
          </a>
        </li>
        <li className=" text">
          <h4>Project</h4>
          <p>
            This android app displays a list of books according to a search
            query using the google books API and displays the results in a grid
            layout.
          </p>

          <a
            href="https://github.com/SinazoBogicevic/BookList-App"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>More</button>
          </a>
        </li>
        <li className=" text">
          <h4>Project</h4>
          <p>
            Web scraper that sends me an email if a specific items price has
            fallen below a certain amount
          </p>

          <a
            href="https://github.com/SinazoBogicevic/web-scraper/blob/master/practice.py"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>More</button>
          </a>
        </li>
      </ul>
    </ProjectsContainer>
  );
}

const ProjectsContainer = styled.div`
  width: 100%;
  height: 100vh;
  margin-top: 25px;
  margin-left: 125px;
  text-align: justify;
  .intro {
    width: 350px;
  }
  .projects {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 50px;
    padding: 0;
  }
  li {
    position: relative;
    box-sizing: border-box;
    width: 15.625rem;
    height: 15.625rem;
    padding: 25px;
    border: 1px solid;
    background-color: rgb(0, 0, 0);
    list-style-type: none;
  }
  li:nth-child(2) {
    margin-left: 65px;
    margin-right: 65px;
  }
  a {
    text-decoration: none;
    color: rgb(0, 0, 0);
  }
  h4 {
    margin: 6px;
  }
  .text {
    color: rgb(255, 255, 255);
  }
  button {
    position: absolute;
    bottom: 0;
    width: 6.25rem;
    border: 1px solid;
    border-radius: 8px;
    background-color: rgb(255, 255, 255);
    color: rgb(0, 0, 0);
    padding: 5px 24px;
    cursor: pointer;
    margin: 20px 0px 15px 45px;
  }
  a:hover {
    button {
      color: rgb(255, 255, 255);
      border-color: rgb(255, 255, 255);
      background-color: rgb(0, 0, 0);
    }
  }

  @media all and (max-width: 780px) and (min-width: 635px) {
    height: 130vh;
    li:nth-child(3) {
      margin-top: 10px;
    }
  }
  @media all and (max-width: 630px) and (min-width: 530px) and (orientation: landscape) {
    height: 210vh;
    margin-left: 0px;
    .projects {
      display: block;
    }
    h3,
    .intro {
      text-align: center !important;
    }
    .intro {
      width: 100%;
    }
    li {
      width: 17rem;
      margin: 16px auto !important;
    }
  }

  @media all and (max-width: 529px) {
    height: 215vh;
    margin-left: 0px;
    .projects {
      display: block;
    }
    h3,
    .intro {
      text-align: center !important;
    }
    .intro {
      width: 100%;
    }
    li {
      width: 17rem;
      margin: 16px auto !important;
    }
  }
`;
