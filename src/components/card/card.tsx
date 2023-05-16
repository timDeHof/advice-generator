import React, { useState, useEffect } from "react";
import AdviceType from "@types/AdviseType";
import diceIcon from "@images/icon-dice.svg";
import {
  AdviceWrapper,
  AdviceContainer,
  Loading,
  AdviceId,
  AdviceText,
  AdviceButton,
  Divider,
} from "./card.styles";

import { fetchData, CACHE_KEY } from "@/services/cardServices";

export const Card = () => {
  const [adviceData, setAdviceData] = useState<AdviceType>({
    id: 0,
    advice: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const { id, advice } = adviceData;

  const handleClick = () => {
    setIsLoading(true);
    fetchData(adviceData.id, setAdviceData, setIsLoading);
  };

  useEffect(() => {
    const cachedData = localStorage.getItem(CACHE_KEY);
    if (cachedData) {
      setAdviceData(JSON.parse(cachedData));
      setIsLoading(false);
    } else {
      fetchData(null, setAdviceData, setIsLoading);
    }
  }, []);

  return (
    <AdviceWrapper>
      <AdviceContainer>
        {isLoading ? (
          <Loading>Loading...</Loading>
        ) : (
          <>
            <AdviceId>Advice #{id}</AdviceId>
            <AdviceText>&#34;{advice}&#34;</AdviceText>
            <Divider />
          </>
        )}
      </AdviceContainer>
      <AdviceButton onClick={handleClick}>
        <img src={diceIcon} alt='advice button' />
      </AdviceButton>
    </AdviceWrapper>
  );
};
