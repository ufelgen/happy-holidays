import styled from "styled-components";
import Greetings from "./Greetings";
import Form from "./Form";
import { useState } from "react";

export default function Site() {
  const [card, setCard] = useState(false);
  const [language, setLanguage] = useState("");
  const [name, setName] = useState("");

  function toggleShowChristmasCard() {
    setCard(!card);
  }

  function getFormData(language, name) {
    setLanguage(language);
    setName(name);
  }

  return (
    <>
      {card ? (
        <Greetings
          name={name}
          language={language}
          onToggleChristmasCard={toggleShowChristmasCard}
        />
      ) : (
        <Form
          onToggleChristmasCard={toggleShowChristmasCard}
          onGetFormData={getFormData}
        />
      )}
    </>
  );
}
