import styled from "styled-components";
import Site from "../components/Site";

export default function Home() {
  return (
    <StyledMain>
      <Site />
    </StyledMain>
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
`;
