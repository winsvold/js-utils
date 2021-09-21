import styled from "styled-components";
import { AnchorHTMLAttributes } from "react";
import React from "react";

const StyledA = styled.a`
  background: none;
  border: none;
  &,
  &:visited {
    color: blue;
  }
  cursor: pointer;
  text-decoration: underline;
  &:hover {
    text-decoration: none;
  }
`;

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {}

function Link(props: Props) {
  return <StyledA {...props} />;
}

export default Link;
