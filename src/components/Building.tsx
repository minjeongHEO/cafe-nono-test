import { Flex, FlexColumn, FlexRow } from '../styles/themes';
import FloorButton from './FloorButton';
import Elevator from './Elevator';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

interface ElevatorState {
  isWork: boolean;
  destinationFloor: number;
  presentFloor: number;
}
export interface OperationPerElevator {
  [key: number]: ElevatorState;
}

const initOperationPerElevator: OperationPerElevator = {
  0: { isWork: false, destinationFloor: 1, presentFloor: 1 },
  1: { isWork: false, destinationFloor: 1, presentFloor: 1 },
  2: { isWork: false, destinationFloor: 1, presentFloor: 1 },
};

export default function Building() {
  const [requestedFloors, setRequestedFloor] = useState<number[]>([]);
  const [operationPerElevator, setOperationPerElevator] = useState<OperationPerElevator>(initOperationPerElevator);

  const removeRequestedFloor = (floor: number) => {
    if (requestedFloors.length === 0) return;
    if (requestedFloors.includes(floor)) {
      setRequestedFloor((prev) => prev.filter((e) => e !== floor));
    }
  };

  const handleButtonClick = (floor: number) => {
    const newRequestedFloor = [...requestedFloors, floor];

    if (requestedFloors.length === 3) return;
    if (!requestedFloors.includes(floor)) {
      setRequestedFloor((prev) => [...prev, floor]);
    }

    if (newRequestedFloor.length <= 0) return;

    const calledFloor = newRequestedFloor[newRequestedFloor.length - 1]; // [6, 8, 9] => 6이 도착해 => [8, 9] => calledFloor = 9
    const elevatorNumber = callElevator(calledFloor);

    changeOperationPerElevator(elevatorNumber, calledFloor);
  };

  const callElevator = (calledFloor: number): number => {
    if (Object.values(operationPerElevator).every(({ isWork }) => !isWork)) return 0;

    const distances = Object.entries(operationPerElevator).map(([key, elevator]) => {
      if (elevator.isWork) return Infinity;
      return Math.abs(calledFloor - elevator.presentFloor);
    });

    const minDistance = Math.min(...distances);
    return distances.indexOf(minDistance);
  };

  const changeOperationPerElevator = (elevatorNumber: number, calledFloor: number) => {
    const newElevator = { ...operationPerElevator[elevatorNumber], isWork: true, destinationFloor: calledFloor };
    setOperationPerElevator((prev) => ({ ...prev, [elevatorNumber]: newElevator }));
  };

  return (
    <BuildingWrapper>
      <FlexColumn>
        <FloorButton
          handleButtonClick={handleButtonClick}
          requestedFloors={requestedFloors}
          isClickable={requestedFloors.length < 3}
        />
        <ElevatorWrapper>
          {Array.from({ length: 3 }).map((_, idx) => (
            <Elevator
              key={`elevator-${idx}`}
              elevateId={idx}
              {...{ operationPerElevator }}
              {...{ setOperationPerElevator }}
              {...{ removeRequestedFloor }}
            />
          ))}
        </ElevatorWrapper>
      </FlexColumn>
    </BuildingWrapper>
  );
}

const BuildingWrapper = styled(Flex)`
  justify-content: center;
`;

const ElevatorWrapper = styled(FlexRow)`
  margin-top: 30px;
  justify-content: left;
  gap: 10px;
`;
