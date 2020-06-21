import styled from 'styled-components';

export const Container = styled.div`
  main {
    margin-left: 15rem;
    font-family: 'Roboto', sans-serif;
    padding: 1rem;
  }

  nav {
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
      /* justify-content: center; */
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
  }

  @media only screen and (max-width: 900px) {
    main {
      margin-left: 0;
    }

    nav {
      bottom: 0;
      width: 100vw;
      height: 5rem;

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
  height: 100vh;
  justify-content: center;
  max-width: 900px;
  margin-left: 50px;

  p {
    font-size: 24px;
    font-weight: 300;
  }

  .introduction-info {
    font-weight: 500;
    margin-bottom: 20px;
    font-size: 35px;
  }

  .vote-text {
    margin-top: 50px;
  }
`;
