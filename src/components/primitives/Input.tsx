import * as React from "react";
import { InputHTMLAttributes, useEffect, useRef } from "react";
import styled from "styled-components";
import { guid } from "../..";
import { buttonCommonStyling } from "./common";

const Style = styled.div`
  display: inline-flex;
  flex-direction: column;
  input {
    padding: 0.2em 0.5em;
    ${buttonCommonStyling};
  }
`;

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

function InputBase(props: InputProps) {
  const id = useRef(guid());
  const ref = useRef<HTMLInputElement>(null);
  const { label, className, autoFocus, ...rest } = props;

  useEffect(() => {
    autoFocus && ref.current?.focus();
  }, [ref, autoFocus]);

  return (
    <Style className={className}>
      <label htmlFor={id.current}>{label}</label>
      <input ref={ref} id={id.current} {...rest} />
    </Style>
  );
}

export default InputBase;
