import styled from "styled-components";
import NextLink from "next/link";
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

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /*
    Use to indicate that this is an internal link in the nextjs-app for client-side routing
  */
  internalLink?: boolean;
}

function Link(props: Props) {
  const { internalLink, href, ...rest } = props;

  if (internalLink) {
    return (
      <NextLink href={href || ""} passHref={true}>
        <StyledA {...rest} />
      </NextLink>
    );
  }

  return <StyledA {...rest} href={href} />;
}

export default Link;
