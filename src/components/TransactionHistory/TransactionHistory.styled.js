import styled from 'styled-components';

const TableStyled = styled.table`
  border: 1px solid black;
  width: 100%;
`;

const TheadStyled = styled.thead`
  background-color: rgb(231 223 216);
`;

const TbodyStyled = styled.tbody`
  text-align: center;

  tr {
    font-size: 30px;
  }

  tr:nth-child(2n) {
    background-color: #f1f1f1;
  }
`;

export { TableStyled, TbodyStyled, TheadStyled };
