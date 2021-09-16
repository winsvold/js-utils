import React from "react";
import styled from "styled-components/macro";
import { Button, ButtonLink, Alert, Input, Spinner, Link } from "@biblioteksentralen/js-utils";
import ColorPalette from "./ColorPalette";

const Style = styled.div`
  background-color: beige;
  width: 100%;
  max-width: 50rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: auto;
`;

const Grid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
`;

const Component = styled.article`
  background-color: white;
`;

function Dev() {
  return (
    <Style>
      <Grid>
        <Component>
          <Button onClick={() => alert("Hei på deg")}>Dette er en knapp</Button>
        </Component>
        <Component>
          <Button onClick={() => alert("Hei på deg")} spinner={true}>
            Knapp med spinner
          </Button>
        </Component>
        <Component>
          <Input label="Dette er et tekstfelt" />
        </Component>
        <Component>
          <Link href="#">Dette er en lenke</Link>
        </Component>
        <Component>
          <ButtonLink href="#">Dette er en lenke som ser ut som en knapp</ButtonLink>
        </Component>
        <Component>
          <Spinner />
        </Component>
        <Component>
          <Alert>Dette er en advarsel!</Alert>
        </Component>
      </Grid>
      <Component>
        <ColorPalette />
      </Component>
    </Style>
  );
}

export default Dev;
