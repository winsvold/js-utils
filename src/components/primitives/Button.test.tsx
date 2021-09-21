import React, { createRef } from "react";
import { render } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  it("Passes on ref", () => {
    const ref = createRef<HTMLButtonElement>();

    render(<Button ref={ref}>Trykk på meg</Button>);

    expect(ref.current?.textContent).toEqual("Trykk på meg");
  });
});
