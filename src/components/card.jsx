import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { theme } from "../styles/theme";
import diceIcon from "../images/icon-dice.svg";
import dividerDesktop from "../images/pattern-divider-desktop.svg";
import dividerMobile from "../images/pattern-divider-mobile.svg";

const AdviceWrapper = styled.div`
  width: 100%;
`;

const AdviceContainer = styled.div`
  background-color: ${theme.colors["Dark-Grayish-Blue"]};
  padding: 1.25rem 1.25rem 3rem;
  position: relative;
  border-radius: 10px;

  @media (min-width: ${theme.Breakpoint.Desktop}) {
    border-radius: 15px;
    width: 100%;
  }
`;
const AdviceId = styled.p`
  color: ${theme.colors["Neon-Green"]};
  font-size: 0.9rem;
  text-transform: uppercase;
  margin-bottom: 1.25rem;
  letter-spacing: 0.4rem;
`;
const AdviceText = styled.p`
  color: ${theme.colors["Light-Cyan"]};
  font-size: ${theme.typography.xxxl};
  line-height: 1.5;
  padding-bottom: 2rem;
`;

const Divider = styled.div`
  background: center no-repeat url(${dividerDesktop});
  width: 100%;
  height: 1rem;

  @media (max-width: ${theme.Breakpoint.Mobile}) {
    background: center no-repeat url(${dividerMobile});
  }
`;
const AdviceButton = styled.button`
  background-color: ${theme.colors["Neon-Green"]};
  padding: 1.25rem;
  border: none;
  border-radius: 50%;
  position: relative;
  bottom: 2rem;
  cursor: pointer;
  & img {
    width: 24px;
    height: 24px;
  }

  &:active {
    filter: drop-shadow(0px 0px 20px ${theme.colors["Neon-Green"]});
  }
`;
export const Card = () => {
  const [adviceData, setAdviceData] = useState({});

  const handleClick = async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdviceData(data.slip);
  };

  useEffect(() => {
    handleClick();
  }, []);
  const { id, advice } = adviceData;
  return (
    <AdviceWrapper>
      <AdviceContainer>
        <AdviceId>Advice #{id}</AdviceId>
        <AdviceText>"{advice}"</AdviceText>
        <Divider />
      </AdviceContainer>
      <AdviceButton onClick={handleClick}>
        <img src={diceIcon} alt='advice button' />
      </AdviceButton>
    </AdviceWrapper>
  );
};
