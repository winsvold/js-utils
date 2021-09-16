import { css } from "styled-components";

export const buttonCommonStyling = css`
  color: var(--action-color);
  background-color: var(--bg-color);
  border: currentColor 0.2rem solid;
  &:hover {
    color: var(--bg-color);
    background-color: var(--action-color);
    border-color: var(--action-color);
  }
  border-radius: 0.35rem;
  font-weight: 600;
  padding: 0.25rem 1rem;
`;
