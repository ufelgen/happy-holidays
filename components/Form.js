import styled from "styled-components";
import { useState } from "react";
import LetItSnow from "./Snow";
// import { useNavigate } from "react";

export default function Form({ onShowChristmasCard }) {
  const [language, setLanguage] = useState("");
  const [name, setName] = useState("");

  //   function navigateToChristmasCard() {
  //     navigate("/christmasCard");
  //   }

  function handleSubmitLanguage(event) {
    event.preventDefault();
    const language = event.target.elements.language.value;
    const name = event.target.elements.name.value;
    setLanguage(language);
    setName(name);
    onShowChristmasCard();

    event.target.elements.name.focus();
    event.target.reset();
  }

  return (
    <>
      <LetItSnow />
      <StyledForm onSubmit={handleSubmitLanguage}>
        <label htmlFor="language">
          please select your language <hr></hr>bitte Sprache auswählen
        </label>
        <select name="language" id="language">
          <option value="german" name="german">
            Deutsch 🇩🇪
          </option>
          <option value="english" name="english">
            English 🇨🇦
          </option>
        </select>
        <label htmlFor="name">
          please type your name <hr></hr>bitte Namen eingeben
        </label>
        <input type="text" name="name" required></input>
        <button type="submit">go</button>
      </StyledForm>
    </>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 10px;
  justify-content: space-around;
  align-items: center;
  height: 80vh;

  label,
  select,
  option {
    margin: 10px;
    font-size: 1.5rem;
    color: black;
    padding: 5px;
  }

  button {
    padding: 5px;
    background-color: black;
    color: white;
    border: 1px solid darkblue;
    border-radius: 5px;
    font-size: 2rem;
  }
`;
