import React from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
`;

const Style = styled.div`
  display: inline-block;
  animation: ${spin} 2s 0.5s infinite, ${fadeIn} 1s 0.5s backwards;
  flex: 0;
  font-size: 2em;
`;

function Spinner(props: React.HTMLAttributes<HTMLDivElement>) {
  return <Style {...props}>📚</Style>;
}

export default Spinner;
