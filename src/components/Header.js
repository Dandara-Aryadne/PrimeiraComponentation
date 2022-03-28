import styled from "styled-components";

const H1 = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 30%;
  height: 30vh;
  font-weight: 400px;
  font-size: 50px;
  color: orange;
  text-shadow: 2px 2px #8d1e1e;
  &:hover {
    color: #511ca8;
    text-shadow: 2px 2px #d85ecb;
    cursor: pointer;
  }
`;

function Header() {
  return <H1>COR E CENA</H1>;
}

export default Header;
