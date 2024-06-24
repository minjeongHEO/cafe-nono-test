import { Color, FlexRow } from '../styles/themes';
import styled from 'styled-components';

const { DefaultColor } = Color;

export default function FloorButton() {
  return (
    <FlexRow>
      <div>호출</div>
      <GridButton>
        {Array.from({ length: 15 }, (_, i) => (
          <GridItem key={`item-${i}`}>
            <span>{i + 1}</span>
          </GridItem>
        ))}
      </GridButton>
    </FlexRow>
  );
}

const GridButton = styled.div`
  margin-left: 15px;
  display: grid;
  grid-template-columns: repeat(15, auto);
  border: 1px solid ${DefaultColor};
`;

const GridItem = styled.div`
  cursor: pointer;
  border-right: 1px solid ${DefaultColor};
  width: 35px;
  padding: 5px;
  text-align: center;

  &:last-child {
    border-right: none;
  }
`;
