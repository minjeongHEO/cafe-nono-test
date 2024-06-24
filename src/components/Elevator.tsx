import styled from 'styled-components';
import { Flex } from '../styles/themes';

export default function Elevator() {
  return (
    <ElevatorPath>
      <ElevatorCar />
    </ElevatorPath>
  );
}

const ElevatorCar = styled.div`
  border: 1px solid black;
  width: 50px;
  height: 50px;
  position: absolute;
`;

const ElevatorPath = styled(Flex)`
  display: flex;
  justify-content: space-around;
  border: 1px solid black;
  width: 80px;
  height: 750px;
  position: relative;
`;
