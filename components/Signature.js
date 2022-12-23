import styled from "styled-components";
import Image from "next/image";

export default function Signature({ language }) {
  return (
    <>
      {language === "english" ? <p>all the best</p> : <p>Alles Liebe</p>}
      <Image
        src={"/../assets/Weihnachts-Ulli-3.png"}
        alt="Christmas Ulli"
        height={100}
        width={100}
      />
      <p>Ulli</p>
    </>
  );
}
