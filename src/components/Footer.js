import styled from "styled-components";

// Styled-components
const Foot = styled.footer`
  background-color: white;
  border-top: 1px solid var(--border-grey);
  height: 80px;
  font-size: 0.8em;
  margin-top: 50px;

  .wrapper {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Footer = () => {
  return (
    <Foot>
      <div className="wrapper">
        <p>
          © 2021. By{" "}
          <a
            href="https://www.linkedin.com/in/manon-boiteau/"
            target="_blank"
            rel="noreferrer"
          >
            Manon
          </a>{" "}
          for{" "}
          <a href="https://fr.bazarchic.com/" target="_blank" rel="noreferrer">
            BazarChic
          </a>
          .
        </p>
      </div>
    </Foot>
  );
};

export default Footer;
