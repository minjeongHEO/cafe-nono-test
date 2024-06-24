import FloorButton from './FloorButton';
import { Flex, FlexColumn } from '../styles/themes';
import Elevator from './Elevator';
import styled from 'styled-components';

export default function Building() {
  return (
    <BuildingWrapper>
      <FlexColumn>
        <FloorButton />
        <Elevator />
        <Elevator />
        <Elevator />
      </FlexColumn>
    </BuildingWrapper>
  );
}

const BuildingWrapper = styled(Flex)`
  justify-content: center;
`;
