import styled from "styled-components";
import {sortArrayInGroups, colors} from "@biblioteksentralen/js-utils";


const Style = styled.div`
  padding: 1rem 1rem 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(5rem, 1fr));
  gap: 2rem;
`;

const Group = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Entry = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.div`
  font-weight: 600;
`;

const Color = styled.div`
  height: 5rem;
  width: 5rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function ColorPalette() {
  const inGroups = sortArrayInGroups(Object.entries(colors), (entry) => entry[0].replace(/[0-9]/g, ""));
  return (
    <Style>
      <h2>Farger</h2>
      <Grid>
        {inGroups.map((group) => (
          <Group key={group.label}>
            <h3>{group.label}</h3>
            <ul>
              {group.items.map((farge) => {
                const [label, hex] = farge;
                return (
                  <Entry key={label}>
                    <Label>{label}</Label>
                    <Color style={{ background: hex }}>{hex}</Color>
                  </Entry>
                );
              })}
            </ul>
          </Group>
        ))}
      </Grid>
    </Style>
  );
}

export default ColorPalette;
