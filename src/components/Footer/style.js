import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: purple;
`;

export const List = styled.ul`
  width: 100vw;
  display: flex;
  list-style: none;
  justify-content: space-evenly;
  color: white;
  &:hover {
    cursor: pointer;
  }
`;

export const Inicio = styled.li`
  display: flex;
`;
export const Sobre = styled.li`
  display: flex;
`;
export const Contatos = styled.li`
  display: flex;
`;