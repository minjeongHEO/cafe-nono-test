import styled from 'styled-components';
import { Color, Flex } from '../styles/themes';
import { OperationPerElevator } from './Building';
import { useEffect, useState } from 'react';

interface ElevatorProps {
  elevateId: number;
  operationPerElevator: OperationPerElevator;
  setOperationPerElevator: React.Dispatch<React.SetStateAction<OperationPerElevator>>;
  removeRequestedFloor: (floor: number) => void;
}
interface StyledElevatorCar {
  $bottom: number;
}

const { BorderColor } = Color;
export default function Elevator({
  elevateId,
  operationPerElevator,
  setOperationPerElevator,
  removeRequestedFloor,
}: ElevatorProps) {
  const [bottomPosition, setBottomPosition] = useState<number>(0);

  const OperateGoDown = (elevateId: number) => {
    setBottomPosition((prev) => prev - 50);
    setOperationPerElevator((prev) => ({
      ...prev,
      [elevateId]: {
        ...prev[elevateId],
        presentFloor: prev[elevateId].presentFloor - 1,
      },
    }));
  };

  const OperateGoUp = (elevateId: number) => {
    setBottomPosition((prev) => prev + 50);
    setOperationPerElevator((prev) => ({
      ...prev,
      [elevateId]: {
        ...prev[elevateId],
        presentFloor: prev[elevateId].presentFloor + 1,
      },
    }));
  };

  const OperateEnds = (elevateId: number, destinationFloor: number) => {
    setOperationPerElevator((prev) => ({ ...prev, [elevateId]: { ...prev[elevateId], isWork: false } }));
    removeRequestedFloor(destinationFloor);
  };

  const moveInterval = () => {
    const elevator = operationPerElevator[elevateId];
    if (!elevator) return;
    const { isWork, destinationFloor, presentFloor } = elevator;
    if (!isWork) return;

    if (destinationFloor === presentFloor) OperateEnds(elevateId, destinationFloor);
    if (destinationFloor > presentFloor) OperateGoUp(elevateId);
    if (destinationFloor < presentFloor) OperateGoDown(elevateId);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      moveInterval();
    }, 1000);

    return () => clearInterval(interval);
  }, [elevateId, operationPerElevator, setOperationPerElevator]);

  return (
    <ElevatorPath>
      <ElevatorCar $bottom={bottomPosition}>{operationPerElevator[elevateId].presentFloor}</ElevatorCar>
    </ElevatorPath>
  );
}

const ElevatorCar = styled.div<StyledElevatorCar>`
  align-content: center;
  text-align: center;
  border: 1px solid ${BorderColor};
  color: ${BorderColor};
  width: 50px;
  height: 50px;
  position: absolute;
  bottom: ${({ $bottom }) => $bottom}px;
`;

const ElevatorPath = styled(Flex)`
  display: flex;
  justify-content: space-around;
  border: 1px solid ${BorderColor};

  width: 80px;
  height: 750px;
  position: relative;
`;
