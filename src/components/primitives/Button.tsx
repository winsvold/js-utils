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

const Button = React.forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const { children, spinner, ...rest } = props;
  return (
    <Style {...rest} ref={ref}>
      <Label spinner={spinner}>{children}</Label>
      {spinner && (
        <SpinnerWrapper>
          <Spinner />
        </SpinnerWrapper>
      )}
    </Style>
  );
});

export default Button;
