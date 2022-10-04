import styled, { keyframes } from "styled-components";
import { fadeIn } from "../../styles";

export const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  max-width: 1000px;
  margin: 0 auto;
  overflow: hidden;
`;
export const Button = styled.button`
  padding: 5px;
  background-color: var(--primary-color);
  border: none;
  width: 30%;
  color: white;
  transition: opacity 0.5s ease-in-out;
  font-family: "Open Sans";
  border-radius: 5px;
  align-self: flex-end;
  cursor: pointer;
  font-size: 1.5rem;
`;

export const Container = styled.div`
  width: 90%;
  height: 70vh;
  border-radius: 5px;
`;

export const Title = styled.h1`
  font-size: 3.5rem;
  font-family: "Poppins", sans-serif;
  color: var(--primary-color);
  text-align: center;
`;
export const Subtitle = styled.h2`
  font-size: 2.5rem;
  margin: 10px;
`;
export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px auto;
  gap: 5px;
  label {
    font-size: 1.8rem;
    font-family: "Open Sans";
    color: #37455f;
  }
  input {
    background: none;
    border: 1px solid var(--primary-color);
    outline: none;
    padding: 5px;
    font-size: 1.5rem;
    border-radius: 5px;
  }
`;
interface TableContainerProps {
  visible: boolean;
}
export const TableContainer = styled.div<TableContainerProps>`
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
  margin: 10px 0;
  div {
    display: flex;
    flex-direction: row;
    flex-basis: auto;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 5px;
    button {
      flex: auto;
    }
  }
  td {
    position: relative;
  }
`;
export const RemoveData = styled.button`
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  padding: 5px;
  color: #0f3386;
  font-size: 1.8rem;
  cursor: pointer;
`;
export const DataTable = styled.table`
  font-family: "Open Sans", sans-serif;
  font-size: 1.3rem;
  font-weight: lighter;
  width: 100%;
  overflow: hidden;
  color: black;
  border-collapse: collapse;
  col {
    width: 50%;
  }
  th,
  td {
    padding: 5px;
    text-align: center;
    border: 1px solid black;
  }
  th {
    background-color: var(--primary-color);
    color: white;
  }
`;
export const InputDatas = styled(InputGroup)`
  display: flex;
  flex-direction: row;
  flex-basis: auto;
  flex-wrap: wrap;
  & > * {
    flex: auto;
  }
`;

export const GraphicContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  animation: ${fadeIn} 1s;
`;
