import styled from "styled-components";
import Image from "next/image";

export default function Signature({ language }) {
  return (
    <SignatureContainer>
      {language === "english" ? (
        <StyledWishes>all the best,</StyledWishes>
      ) : (
        <StyledWishes>Alles Liebe,</StyledWishes>
      )}
      <StyledImage
        src="/images/Weihnachts-Ulli-3.png"
        alt="Christmas Ulli"
        height={77}
        width={77}
      />
      <StyledWishes>Ulli</StyledWishes>
    </SignatureContainer>
  );
}

const StyledWishes = styled.p`
  color: white;
  font-size: 1.5rem;
  text-align: right;
`;

const SignatureContainer = styled.section`
  position: relative;
  height: 100px;

  margin-top: 30px;
  margin-bottom: 30px;
`;

const StyledImage = styled(Image)`
  position: absolute;
  top: 15%;
  right: -85px;
`;
