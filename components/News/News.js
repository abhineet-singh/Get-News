import { useState } from "react";

import styled from "styled-components";

const OuterContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  height: 500px;
  width: 350px;
  border: 1px solid #0070f3;
  margin: 20px;

  &:hover {
    box-shadow: 15px 15px rgb(230, 226, 226);
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin: 0px 5px;
`;

const Title = styled.div`
  margin: 10px 5px;
`;

const Description = styled.div`
  margin: 10px 5px;
`;

const ToggleButton = styled.button`
  background-color: #1a73e8;
  padding: 5px 10px 5px 10px;
  border: 2px solid #1a73e8;
  color: white;
  font-size: medium;
  border-radius: 10px;

  &:hover {
    background-color: white;
    color: #1a73e8;
  }
`;

const FullContent = styled.div`
  margin: 10px 5px;
  border: 1px solid lightblue;
`;

const news = ({ title, description, urlToImage, fullContent }) => {
  const [toggleState, setToggleState] = useState(false);

  const toggleStateHandler = () => {
    setToggleState((toggleState) => !toggleState);
  };

  return (
    <OuterContainer>
      <img src={urlToImage} alt="photo_" width="350px" height="200px" />

      <ContentContainer>
        {!toggleState && (
          <>
            <Title>{title}</Title>
            <Description>{description}</Description>
          </>
        )}

        {toggleState && <FullContent>{fullContent}</FullContent>}

        <ToggleButton onClick={toggleStateHandler}>
          {toggleState ? "Hide" : "Read Full"}
        </ToggleButton>
      </ContentContainer>
    </OuterContainer>
  );
};

export default news;
