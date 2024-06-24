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
interface OperationPerElevator {
  [key: number]: ElevatorState;
}

const initOperationPerElevator: OperationPerElevator = {
  0: { isWork: false, destinationFloor: 0, presentFloor: 0 },
  1: { isWork: false, destinationFloor: 0, presentFloor: 0 },
  2: { isWork: false, destinationFloor: 0, presentFloor: 0 },
};

export default function Building() {
  const [requestedFloor, setRequestedFloor] = useState<number[]>([]);
  const [operationPerElevator, setOperationPerElevator] = useState<OperationPerElevator>(initOperationPerElevator);

  const handleButtonClick = (floor: number) => {
    if (requestedFloor.length === 3) return;
    if (!requestedFloor.includes(floor)) {
      setRequestedFloor((prev) => [...prev, floor]);
    }
  };

  const callElevator = (calledFloor: number): number => {
    if (Object.values(operationPerElevator).every(({ isWork }) => !isWork)) return 0;

    const distances = Object.entries(operationPerElevator).map(([key, elevator]) => {
      if (elevator.isWork) return Infinity;
      return Math.abs(calledFloor - elevator.presentFloor);
      // return (
      //   Math.abs(elevator.presentFloor - elevator.destinationFloor) + Math.abs(calledFloor - elevator.destinationFloor)
      // );
    });

    const minDistance = Math.min(...distances);
    return distances.indexOf(minDistance);
  };

  const changeOperationPerElevator = (elevatorNumber: number, calledFloor: number) => {
    const newElevator = { ...operationPerElevator[elevatorNumber], isWork: true, destinationFloor: calledFloor };
    setOperationPerElevator((prev) => ({ ...prev, [elevatorNumber]: newElevator }));
  };

  useEffect(() => {
    if (requestedFloor.length <= 0) return;

    const calledFloor = requestedFloor[requestedFloor.length - 1];
    const elevatorNumber = callElevator(calledFloor);

    changeOperationPerElevator(elevatorNumber, calledFloor);
  }, [requestedFloor]);

  return (
    <BuildingWrapper>
      <FlexColumn>
        <FloorButton handleButtonClick={handleButtonClick} requestedFloor={requestedFloor} />
        <ElevatorWrapper>
          <Elevator id={0} />
          <Elevator id={1} />
          <Elevator id={2} />
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
