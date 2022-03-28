import styled from "styled-components";

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 60vh;
  margin-top: 35vh;
  width: 40%;
  height: 20vh;
  font-size: 2vw;
  color: #4c4542;
  text-align: justify;
`;

const H2 = styled.h2`
  font-size: 4vh;
  height: -8vh;
`;

function Footer() {
  return (
    <>
      <Div>
        <H2>Escrito por Dandara Aryadne - @CinemaATM</H2>
      </Div>
    </>
  );
}

export default Footer;
