import React, { useState } from "react";
import styled, { css } from "styled-components";

const values = css`
  font-size: 150px;
  font-family: system-ui;
`;

const S = {
  Wrapper: styled.div`
    background-color: green;
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    align-items: center;
  `,
  Text1: styled.span`
    ${values};
    color: gold;
  `,

  Text2: styled.span`
  ${values};
  color: pink;
`,

  Text3: styled.span`
  font-size: 30px;
  font-family: system-ui;
  color: ${({ num }) => (num % 2 === 0 ? "black" : "red")};
`,
};

const App = () => {
  const [number, setNumber] = useState(5);
  const [count, setCount] = useState(0);
  const [text, setText] = useState(`nieparzysta`);

  return (
    <S.Wrapper>
      <S.Text1>{number}</S.Text1>
      <button onClick={() => setNumber(number + 1) & setCount(count + 1) & 
        setText(number % 2 === 0 ? `nieparzysta` : `parzysta`)}>Dodaj</button>
      <button onClick={() => setNumber(number - 1) & setCount(count + 1) & 
        setText(number % 2 === 0 ? `nieparzysta` : `parzysta`)}>Odejmij</button>
      <S.Text2>{count}</S.Text2>
      <S.Text3 num = {number}>{text}</S.Text3>
    </S.Wrapper>
  );
};

export default App;