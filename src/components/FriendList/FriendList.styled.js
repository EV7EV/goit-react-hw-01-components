import styled from 'styled-components';

const FriendListStyled = styled.ul`
  margin: 0;
  background-color: grey;
  display: flex;
  list-style: none;
  gap: 10px;

  .item {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .avatar {
    width: 60px;
    height: 60px;
  }
`;

export { FriendListStyled };
