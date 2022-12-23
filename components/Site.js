import styled from "styled-components";
import Greetings from "./Greetings";
import Form from "./Form";
import { useState } from "react";

export default function Site() {
  const [card, setCard] = useState(false);
  function showChristmasCard() {
    setCard(true);
  }

  return (
    <>
      {card ? <Greetings /> : <Form onShowChristmasCard={showChristmasCard} />}
    </>
  );
}
