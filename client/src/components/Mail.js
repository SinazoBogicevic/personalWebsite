import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import useEmailForm from "./CustomHook";
import axios from "axios";

export default function Mail() {
  const { clearInputs } = useEmailForm();
  const sendEmail = () => {
    let data = {
      name: inputs.name,
      mail: inputs.mail,
      subject: inputs.subject,
      message: inputs.message,
    };

    //console.log(data);
    axios
      .post("/api/mail", data)
      .then((res) => {
        console.log(`sent to backend`);
        //document.getElementById("form").reset();
        const messageSent = document.createElement("P");
        messageSent.style.color = "#009900";
        messageSent.style.fontSize = "1.2rem";
        messageSent.style.textAlign = "center";
        messageSent.innerHTML = "Message Sent";
        document.getElementById("mailWrapper").appendChild(messageSent);
        alert("Email sent");
      })
      .catch((error) => {
        console.log(`not sent to backend
        ${error}`);
      });
  };

  const { inputs, handleInputChange, handleSubmit, setInputs } = useEmailForm(
    { name: "", mail: "", subject: "", message: "" },
    sendEmail
  );
  return (
    <MailWrapper>
      <Link to="/">
        <i className="far fa-arrow-alt-circle-left" />
      </Link>
      <div id="mailWrapper">
        <h4>Reach Out To Me</h4>
        <form
          id="form"
          method="POST"
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <label htmlFor="name">
            Name:
            <br />
            <input
              type="text"
              name="name"
              value={inputs.name}
              id="name"
              className="input"
              onChange={handleInputChange}
              required
            />
          </label>
          <br />
          <label htmlFor="mail">
            Email:
            <br />
            <input
              type="mail"
              name="mail"
              value={inputs.mail}
              id="mail"
              className="input"
              onChange={handleInputChange}
              required
            />
          </label>
          <br />

          <label htmlFor="subject">
            Subject:
            <br />
            <input
              type="text"
              name="subject"
              value={inputs.subject}
              id="subject"
              className="input"
              onChange={handleInputChange}
              required
            />
          </label>
          <br />

          <label htmlFor="message">
            <input
              type="text"
              name="message"
              value={inputs.message}
              id="message"
              className="input"
              onChange={handleInputChange}
              required
            />
          </label>
          <br />
          <input type="submit" id="submit" />
        </form>
      </div>
    </MailWrapper>
  );
}

const MailWrapper = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  #mailWrapper {
    display: grid;
    position: relative;
    width: 50%;
    height: 75vh !important;
    margin: 70px auto;
    border: 1px solid rgb(0, 0, 0, 0.2);
  }
  .far {
    color: rgb(0, 0, 0);
    font-size: 1.5rem;
    position: absolute;
    left: 0;
    top: 0;
    margin-top: 8px;
    margin-left: 8px;
  }
  .far:hover {
    color: #009999;
  }
  h4 {
    text-align: left;
    width: 75%;
    height: 25px;
    margin-top: 25px;
    margin-left: 25px;
    border-bottom: 2px solid rgb(0, 0, 0, 0.2);
  }

  form {
    margin-left: 25px;
  }
  .input {
    width: 83%;
    margin-bottom: 10px;
  }

  #message {
    width: 83%;
    height: 85px;
    margin: 0 auto;
  }
  #submit {
    background-color: #009999;
    color: rgb(255, 255, 255);
    font-size: 12px;
    font-weight: 600;
    width: 80px;
    height: 30px;
    border: none;
    margin-top: 16px;
  }
  #submit:hover {
    background-color: #00ff80;
    color: rgb(0, 0, 0);
  }
  @media only screen and (max-width: 1026px) {
    display: grid;
    #mailWrapper {
      height: 65vh;
    }
  }
  @media (orientation: landscape) {
    display: grid;
    #mailWrapper {
      height: 65vh;
    }
  }
`;
