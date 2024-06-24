import FloorButton from './FloorButton';
import { Flex, FlexColumn, FlexRow } from '../styles/themes';
import Elevator from './Elevator';
import styled from 'styled-components';

export default function Building() {
  return (
    <BuildingWrapper>
      <FlexColumn>
        <FloorButton />
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
