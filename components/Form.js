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

  function getRandomNumber() {
    // adjust number according to number of images in collection
    return Math.floor(Math.random() * 223);
  }

  const url =
    "https://source.unsplash.com/collection/1143269/" + getRandomNumber();
  // adjust collection number

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
        language === "english" ? (
          <StyledCard>
            <h1>Dear {name}</h1>
            <StyledImageContainer>
              <Image
                src={url}
                alt="cute animal"
                layout="fill"
                objectFit="cover"
                priority
              />{" "}
            </StyledImageContainer>
            <button onClick={() => setCard(false)}>start over</button>
          </StyledCard>
        ) : (
          <StyledCard>
            <h1>Hallo {name}</h1>
            <StyledImageContainer>
              <Image
                src={url}
                alt="cute animal"
                layout="fill"
                objectFit="cover"
                priority
              />{" "}
            </StyledImageContainer>
            <button onClick={() => setCard(false)}>start over</button>
          </StyledCard>
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

const StyledImageContainer = styled.div`
  width: 300px;
  height: 300px;
  border-color: black;
  position: relative;
`;

const StyledCard = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 80vh;
`;
