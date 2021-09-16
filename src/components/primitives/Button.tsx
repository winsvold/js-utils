import React from "react";
import { HTMLAttributes } from "react";
import styled, { css } from "styled-components";
import { buttonCommonStyling } from "./common";
import Spinner from "./Spinner";

const Style = styled.button`
  ${buttonCommonStyling};
  cursor: pointer;
  position: relative;
`;

const Label = styled.div<{ spinner?: boolean }>`
  ${(p) =>
    p.spinner &&
    css`
      transition: 0.5s color;
      color: transparent;
    `}
`;

const SpinnerWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

interface Props extends HTMLAttributes<HTMLButtonElement> {
  spinner?: boolean;
}

function Button(props: Props) {
  const { children, spinner, ...rest } = props;
  return (
    <Style {...rest}>
      <Label spinner={spinner}>{children}</Label>
      {spinner && (
        <SpinnerWrapper>
          <Spinner />
        </SpinnerWrapper>
      )}
    </Style>
  );
}

export default Button;
