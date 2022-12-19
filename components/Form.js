import styled from "styled-components";
import { useState } from "react";
import Image from "next/image";
// import { useNavigate } from "react";

export default function Form() {
  const [language, setLanguage] = useState("");
  const [name, setName] = useState("");
  const [card, setCard] = useState(false);

  //   function navigateToChristmasCard() {
  //     navigate("/christmasCard");
  //   }

  function getImage() {}

  function handleSubmitLanguage(event) {
    event.preventDefault();
    const language = event.target.elements.language.value;
    const name = event.target.elements.name.value;
    setLanguage(language);
    setName(name);
    setCard(true);

    event.target.elements.name.focus();
    event.target.reset();
  }

  return (
    <>
      {card ? (
        language === english ? (
          <>
            <h1>Dear {name}</h1>
            <button onClick={() => setCard(false)}>start over</button>
          </>
        ) : (
          <>
            <h1>Hallo {name}</h1>
            <button onClick={() => setCard(false)}>start over</button>
          </>
        )
      ) : (
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
      )}
    </>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 10px;

  label,
  select,
  option {
    margin: 10px;
  }
`;
