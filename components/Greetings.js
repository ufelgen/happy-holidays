import styled from "styled-components";
import Image from "next/image";
import LetItSnow from "./Snow";

export default function Greetings({ language, name }) {
  function getRandomNumber() {
    // adjust number according to number of images in collection
    return Math.floor(Math.random() * 223);
  }

  const url =
    "https://source.unsplash.com/collection/1143269/" + getRandomNumber();
  // adjust collection number
  return (
    <>
      {language === "english" ? (
        <>
          <LetItSnow />
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
        </>
      ) : (
        <>
          <LetItSnow />
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
        </>
      )}
    </>
  );
}

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
