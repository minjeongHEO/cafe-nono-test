import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
`;
export const FlexRow = styled(Flex)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const FlexColumn = styled(Flex)`
  flex-direction: column;
  justify-content: space-between;
`;

export const Color = {
  DefaultColor: '#ccc',
};
