import { Flex, FlexColumn, FlexRow } from '../styles/themes';
import FloorButton from './FloorButton';
import Elevator from './Elevator';
import styled from 'styled-components';
import { useState } from 'react';

export default function Building() {
  const [requestedFloor, setRequestedFloor] = useState<number[]>([]);

  const handleButtonClick = (floor: number) => {
    if (requestedFloor.includes(floor)) {
      setRequestedFloor((prev) => prev.filter((e) => e !== floor));
    }
    if (requestedFloor.length === 3) return;

    if (!requestedFloor.includes(floor)) {
      setRequestedFloor((prev) => [...prev, floor]);
    }
  };

  return (
    <BuildingWrapper>
      <FlexColumn>
        <FloorButton handleButtonClick={handleButtonClick} requestedFloor={requestedFloor} />
        <ElevatorWrapper>
          <Elevator />
          <Elevator />
          <Elevator />
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
