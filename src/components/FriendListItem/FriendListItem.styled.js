import styled from 'styled-components';

const Status = styled.span`
  display: block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;

export { Status };
