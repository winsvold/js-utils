import styled from "styled-components";
import { buttonCommonStyling } from "./common";

const ButtonLink = styled.a`
  ${buttonCommonStyling};
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
`;

export default ButtonLink;
