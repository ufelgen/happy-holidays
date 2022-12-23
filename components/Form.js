import styled from "styled-components";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

export default function Form({ onToggleChristmasCard, onGetFormData }) {
  function handleSubmitLanguage(event) {
    event.preventDefault();
    const language = event.target.elements.language.value;
    const name = event.target.elements.name.value;
    onGetFormData(language, name);
    onToggleChristmasCard();

    event.target.elements.name.focus();
    event.target.reset();
  }

  return (
    <>
      <StyledForm onSubmit={handleSubmitLanguage}>
        <StyledLabel>
          <label htmlFor="language">
            please select your language <hr></hr>bitte Sprache auswählen
          </label>
        </StyledLabel>
        <select name="language" id="language" required>
          <option value="" hidden={true}>
            ------
          </option>
          <option value="german" name="german">
            Deutsch 🇩🇪
          </option>
          <option value="english" name="english">
            English 🇨🇦
          </option>
        </select>
        <StyledLabel>
          <label htmlFor="name">
            please type your name <hr></hr>bitte Namen eingeben
          </label>
        </StyledLabel>
        <input type="text" name="name" required></input>
        <button type="submit">
          <BsFillArrowRightCircleFill />
        </button>
      </StyledForm>
    </>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 80vh;

  label,
  select,
  option,
  input {
    margin: 10px;
    font-size: 1.5rem;
    color: black;
    padding: 5px;
    height: 7vh;
    border-radius: 3px;
  }

  input,
  select,
  option {
    background-color: black;
    color: hsla(221, 100%, 86%, 1);
  }

  button {
    padding: 5px;
    background-color: transparent;
    color: white;
    border: none;
    font-size: 3rem;
  }
`;

const StyledLabel = styled.div`
  background: hsla(221, 100%, 86%, 1);
  margin: 10px;
`;
