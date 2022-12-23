import styled from "styled-components";
import LetItSnow from "./Snow";
import Image from "next/image";

export default function Christmas({ language, name, url, onProceedToNewYear }) {
  return (
    <>
      <LetItSnow />
      {language === "english" ? (
        <>
          <StyledWishes>Dear {name}</StyledWishes>
          <StyledImageContainer>
            <Image
              src={url}
              alt="Christmas Picture"
              layout="fill"
              objectFit="cover"
              priority
            />{" "}
          </StyledImageContainer>
          <StyledWishes>Have a very merry Christmas</StyledWishes>
          <StyledButton onClick={onProceedToNewYear}>...and</StyledButton>
        </>
      ) : (
        <>
          <StyledWishes>Liebe/r {name}</StyledWishes>
          <StyledImageContainer>
            <Image
              src={url}
              alt="Weihtnachtsbild"
              layout="fill"
              objectFit="cover"
              priority
            />{" "}
          </StyledImageContainer>
          <StyledWishes>
            Ich wünsche dir frohe und entspannte Weihnachtstage
          </StyledWishes>
          <StyledButton onClick={onProceedToNewYear}>...und</StyledButton>
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

const StyledWishes = styled.p`
  color: white;
  font-size: 2.5rem;
  padding: 5vw;
  text-align: center;
`;

const StyledButton = styled.button`
  padding: 5px;
  color: white;
  background-color: black;
`;
