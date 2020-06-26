import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  main {
    margin-left: 15rem;
    overflow-x: hidden;
    font-family: 'Roboto', sans-serif;
  }

  @media only screen and (max-width: 1200px) {
    main {
      margin-left: 0;
      margin-bottom: 5rem;
    }

    nav {
      bottom: 0;
      width: 100vw;
      height: 5rem;
      z-index: 999;

      .moreinfo {
        display: none;
      }

      ul {
        flex-direction: row;

        li {
          a {
            font-size: 16px;
          }
        }
      }
    }
  }
`;

export const IntroductionContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 85vh;
  width: 100%;
  max-width: 900px;
  margin-left: 50px;

  p {
    font-size: 24px;
    font-weight: 300;
  }

  .introduction-info {
    font-weight: 500;
    margin-bottom: 20px;
    word-wrap: break-word;
    font-size: 35px;
  }

  .vote-text {
    margin-top: 50px;
    font-size: 30px;
    font-weight: 100;
  }

  .vote-timer {
    font-size: 40px;
    font-weight: 500;
  }

  @media only screen and (max-width: 1200px) {
    .introduction-info {
      font-size: 30px;
      max-width: 700px;
    }
  }

  @media only screen and (max-width: 980px) {
    .introduction-info {
      font-size: 30px;
      max-width: 600px;
    }
  }

  @media only screen and (max-width: 650px) {
    .introduction-info {
      font-size: 30px;
      max-width: 400px;
    }

    .vote-text {
      margin-top: 50px;
      font-size: 25px;
      font-weight: 100;
    }

    .vote-timer {
      font-size: 35px;
      font-weight: 500;
    }
  }

  @media only screen and (max-width: 450px) {
    margin-left: 10px;
    place-content: center;

    .introduction-info {
      font-size: 25px;
      max-width: 300px;
    }

    .vote-text {
      margin-top: 50px;
      font-size: 20px;
      font-weight: 100;
    }

    .vote-timer {
      word-wrap: break-word;
      font-size: 30px;
      font-weight: 500;
    }
  }
`;

const upAndDown = keyframes`
  0%, 100% {
    transform: translateY(-10px);
  }

  50% {
    transform: translateY(0);
  }
`;

export const Continue = styled.div`
  height: 15vh;
  justify-content: center;
  color: #fe7940;

  div {
    display: flex;
    align-items: center;
    flex-direction: column;
    animation: ${upAndDown} 1s linear infinite;

    p {
      font-size: 25px;
      margin-bottom: 10px;
    }
  }
`;

export const Period = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  font-family: 'Montserrat', sans-serif;
  color: #7380f3;
  margin-left: 5rem;

  h3 {
    font-size: 50px;
    font-weight: 600;
  }

  p {
    font-size: 30px;
  }

  @media only screen and (max-width: 900px) {
    margin-left: 50px;
  }

  @media only screen and (max-width: 400px) {
    margin-left: 0;
    justify-content: center;
    align-items: center;
  }
`;

export const Cards = styled.div`
  display: grid;
  @media (min-width: 750px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1600px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Card = styled.div`
  font-family: 'Roboto', serif;
  display: flex;
  flex-direction: column;
  max-width: 350px;
  height: 300px;
  color: #000;
  position: relative;
  cursor: pointer;
  margin: 15px 0;
  padding: 30px;
  box-shadow: 0px 0px 10px -4px rgba(0,0,0,0.5);

  header {
    display: flex;

    img {
      width: 50px;
      height: 50px;
    }

    h1 {
      font-size: 40px;
      margin-left: 20px;
      font-weight: 600;
    }
  }

  p {
    margin-top: 20px;
    font-size: 18px;
    font-weight: 300;
  }

  span {
    position: absolute;
    font-size: 16px;
    font-weight: 100;
    bottom: 30px;
  }
`;