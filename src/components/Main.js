import styled from "styled-components";
import joker1 from "../IMG/joker1.jpg";
import joker6 from "../IMG/joker6.png";

const Div = styled.div`
  width: 100%;
  height: 80vh;
  border: blue;
`;

const Img = styled.img`
  height: 80vh;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10%;
`;

const H2 = styled.h2`
  display: flex;
  width: 25%;
  height: 10vh;
  font-weight: 400;
  font-size: 35px;
  color: #5aaf2f;
  text-shadow: 2px 2px #25520e;
  margin-top: 15vh;
`;

const Section = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 80vh;
  margin-top: 1vh;
`;

const Par = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 32vh;
  margin-top: 35vh;
  width: 50%;
  height: 60vh;
  font-size: 2vw;
  color: #4c4542;
  text-align: justify;
`;

const Figure = styled.section`
  display: flex;
  justify-content: space-around;
  position: relative;
`;

const Boximg = styled.div`
  display: flex;
  position: absolute;
  top: -50vh;
  z-index: 20;
  left: 3%;
  width: 35vw;
  height: 35vw;
  background-image: url(${joker6});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 5px;
  box-shadow: #245909 0px 2px 4px, #245909 0px 7px 13px -3px,
    #245909 0px -3px 0px inset;
`;

function Main() {
  return (
    <>
      <Div>
        <Img src={joker1} />
      </Div>
      <Section>
        <H2>JOKER:</H2>
        <Par>
          A apresentação de The Joker, dirigido por Todd Phillips, com trilha
          sonora de Hildur Guðnadóttir. O filme recebeu o Oscar de Melhor Ator
          para Joaquin Phoenix e de Melhor Trilha Sonora Original. A direção de
          arte e fotogragia de Lawrence Sher, exalta a cor verde, por óbvias
          razões a cor original do personagem. Mas o verde escuro ou opaco,
          indica fantasia, um ambiente irreal. O que condiz com o mundo
          psicológico esquizofrênico que o personagem vive.
        </Par>
      </Section>
      <Figure>
        <Boximg class="red-box">
          <div class="red-content"></div>
        </Boximg>
      </Figure>
    </>
  );
}

export default Main;
