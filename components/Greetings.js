import styled from "styled-components";
import NewYear from "./NewYear";
import Christmas from "./Christmas";
import { useState } from "react";

export default function Greetings({ language, name, onToggleChristmasCard }) {
  const [newYear, setNewYear] = useState(false);
  function proceedToNewYear() {
    setNewYear(true);
  }
  function getRandomNumber(number) {
    // adjust number according to number of images in collection
    return Math.floor(Math.random() * number);
  }

  const christmasUrl =
    "https://source.unsplash.com/collection/778914/" + getRandomNumber(874);
  // adjust collection number

  const newYearUrl =
    "https://source.unsplash.com/collection/78709328/" + getRandomNumber(86);
  return (
    <>
      <StyledCard>
        {newYear ? (
          <NewYear
            language={language}
            name={name}
            url={newYearUrl}
            onToggleChristmasCard={onToggleChristmasCard}
          />
        ) : (
          <Christmas
            language={language}
            name={name}
            url={christmasUrl}
            onProceedToNewYear={proceedToNewYear}
          />
        )}
      </StyledCard>
    </>
  );
}

const StyledCard = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
