import styled from "styled-components";

// Styled-components
const Head = styled.header`
  height: 100px;
  border-bottom: 1px solid var(--border-grey);
  background-color: white;
  margin-bottom: 50px;

  .wrapper {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const Title = styled.h1`
  font-weight: 700;
  font-size: 1.2em;
`;

const Header = () => {
  return (
    <Head>
      <div className="wrapper">
        <Title>🌦🌧⛈🌩 Weather App 🌥⛅️🌤☀️</Title>
      </div>
    </Head>
  );
};

export default Header;
