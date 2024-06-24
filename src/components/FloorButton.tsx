import { Color, FlexRow } from '../styles/themes';
import styled from 'styled-components';

const { DefaultColor, OperationColor } = Color;

interface FloorButtonProps {
  handleButtonClick: (arg: number) => void;
  requestedFloors: number[];
  isClickable: boolean;
}
interface GridItemProps {
  $isClickable: boolean;
}

export default function FloorButton({ handleButtonClick, requestedFloors, isClickable }: FloorButtonProps) {
  return (
    <FlexRow>
      <div>호출</div>
      <GridButton $isClickable={isClickable}>
        {Array.from({ length: 15 }, (_, i) => (
          <GridItem
            key={`item-${i}`}
            onClick={() => {
              isClickable && handleButtonClick(i + 1);
            }}
          >
            <span className={requestedFloors.includes(i + 1) ? 'requestedFloors' : ''}>{i + 1}</span>
          </GridItem>
        ))}
      </GridButton>
    </FlexRow>
  );
}

const GridButton = styled.div<GridItemProps>`
  cursor: ${({ $isClickable }) => ($isClickable ? 'pointer' : 'not-allowed')};
  margin-left: 15px;
  display: grid;
  grid-template-columns: repeat(15, auto);
  border: 1px solid ${DefaultColor};

  background-color: ${({ $isClickable }) => ($isClickable ? 'none' : DefaultColor)};
`;

const GridItem = styled.div`
  border-right: 1px solid ${DefaultColor};
  width: 35px;
  padding: 5px;
  text-align: center;

  &:last-child {
    border-right: none;
  }

  & .requestedFloors {
    color: ${OperationColor};
  }
`;
