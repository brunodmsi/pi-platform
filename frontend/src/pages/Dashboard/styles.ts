import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #040a3c;
  justify-content: center;
  color: #fefefe;

  header {
    display: flex;
    width: 100%;
    max-width: 800px;
    text-align: left;
    flex-direction: column;
    margin: 0 auto;

    div label {
      margin-right: 20px;
      font-size: 18px;

      input {
        margin-right: 5px;
      }
    }

    h2 {
      font-weight: 600;
      margin-top: 15px;
    }
  }
`;

export const Projects = styled.div`
  display: flex;
  width: 100%;
  max-width: 800px;
  text-align: center;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 4rem;

  section {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(4, 1fr);
  }

  section#table-project {
    align-items: center;
    background-color: #fefefe;
    color: black;
    border-radius: 5px;
    cursor: pointer;
    padding: 20px 0;

    p {
      font-size: 20px;
    }

    &:hover {
      background-color: ${darken(0.05, '#fefefe')};
    }

    & {
      margin-top: 10px;
    }
  }
`;
