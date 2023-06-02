import styled from 'styled-components';

const SectionStyled = styled.section`
  background-color: #d9e7d8;

  .title {
    text-align: center;
  }
`;

const StatsList = styled.ul`
  list-style: none;
  display: flex;

  .item {
    display: flex;
    justify-content: center;
    width: 140px;
    border: 2px solid black;
    padding: 10px;
  }
`;
export { SectionStyled, StatsList };
