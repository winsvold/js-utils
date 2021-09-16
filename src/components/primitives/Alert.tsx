import React from "react";
import { ReactNode } from "react";
import styled from "styled-components";
import { colors } from "../../styles/theme";

const Style = styled.div`
  display: flex;
  gap: 1rem;
  background: white;
  color: ${colors.bsRød1};
  border: 0.15rem currentColor solid;
  padding: 1rem;
  border-radius: 0.3rem;
`;

const ExclamationWrapper = styled.div`
  width: 1.8rem;
  min-width: 1.8rem;
  height: 1.8rem;
  border: 0.15rem solid currentColor;
  font-weight: bold;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0;
`;

const Content = styled.div`
  flex: 1;
`;

interface Props {
  children: ReactNode;
}

function Alert(props: Props) {
  return (
    <Style>
      <ExclamationWrapper>!</ExclamationWrapper>
      <Content>{props.children}</Content>
    </Style>
  );
}

export default Alert;
