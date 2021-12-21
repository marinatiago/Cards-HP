import styled from "styled-components";

export const Container = styled.div`
  background-color: purple;
  display: flex;
  flex-wrap: wrap;
`;
export const ContainerConteudo = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 4vw;
`;

export const Texto = styled.p`
  text-align: center;
  color: white;
  border: 0.1vw solid pink;
  &:hover {
    cursor: pointer;
  }
`;

export const Img = styled.img`
  width: 10.638vw;
`;