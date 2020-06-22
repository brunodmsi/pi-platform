import styled from 'styled-components';

export const Container = styled.nav`
  width: 15rem;
  height: 100vh;
  font-family: 'Montserrat', serif;
  position: fixed;
  background-color: #7380F3;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  color: #fefefe;

  p {
    align-self: center;
    margin-bottom: 30px;
  }

  header {
    display: flex;
    align-self: center;
    align-items: center;
    margin-top: 30px;

    h3 {
      font-size: 60px;
    }

    p {
      font-family: 'Montserrat', serif;
      font-size: 30px;
      font-weight: 100;
    }
  }

  ul {
    display: flex;
    list-style: none;
    flex-direction: column;

    li {
      place-content: center;
      width: 100%;
      transition: .3s background-color;

      a {
        display: flex;
        align-items: center;
        height: 5rem;
        font-size: 25px;
        justify-content: center;
        color: #fefefe;
        text-decoration: none;
      }

      &:hover {
        background-color: #fefefe;

        a {
          color: #7380F3;
        }
      }
    }
  }
`;
