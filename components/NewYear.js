import styled from "styled-components";
import Signature from "./Signature";
import Image from "next/image";

export default function NewYear({ language, url, onToggleChristmasCard }) {
  return (
    <>
      {" "}
      {language === "english" ? (
        <>
          <StyledWishes>and a very happy and healty new year!</StyledWishes>
          <StyledImageContainer>
            <Image
              src={url}
              alt="Christmas Picture"
              layout="fill"
              objectFit="cover"
              priority
            />{" "}
          </StyledImageContainer>
          <Signature />
          <StyledButton onClick={onToggleChristmasCard}>
            start over
          </StyledButton>
        </>
      ) : (
        <>
          <StyledWishes>und ein tolles und gesundes neues Jahr!</StyledWishes>
          <StyledImageContainer>
            <Image
              src={url}
              alt="Christmas Picture"
              layout="fill"
              objectFit="cover"
              priority
            />{" "}
          </StyledImageContainer>

          <Signature />
          <StyledButton onClick={onToggleChristmasCard}>von vorne</StyledButton>
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
