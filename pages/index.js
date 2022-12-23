import styled from "styled-components";
import Site from "../components/Site";
import Head from "next/head";
import LetItSnow from "../components/Snow";

export default function Home() {
  return (
    <>
      <Head>
        <title>happy holidays from Ulli</title>
      </Head>
      <StyledMain>
        <LetItSnow />
        <Site />
      </StyledMain>
    </>
  );
}

const StyledMain = styled.main`
  background: hsla(221, 100%, 86%, 1);
  background: linear-gradient(
    270deg,
    hsla(221, 100%, 86%, 1) 0%,
    hsla(220, 78%, 29%, 1) 100%
  );
  background: -moz-linear-gradient(
    270deg,
    hsla(221, 100%, 86%, 1) 0%,
    hsla(220, 78%, 29%, 1) 100%
  );
  background: -webkit-linear-gradient(
    270deg,
    hsla(221, 100%, 86%, 1) 0%,
    hsla(220, 78%, 29%, 1) 100%
  );
  height: 100vh;
  width: 100%;
  margin: 0;
`;
