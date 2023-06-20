import styled from 'styled-components';

export const TransactionHistoryTable = styled.table`
  background-color: rgb(248, 240, 240);
  width: 350px;
  margin: 0px auto;
  margin-bottom: 100px;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 1rem 1rem 2rem rgb(65, 64, 64), -1rem -1rem 2rem rgb(82, 81, 81);
`;
export const TableHeader = styled.th`
  height: 50px;
  text-align: center;
  border: 1px solid #555;
  background-color: #f5f5f5;
  color: #000;
  font-size: 14px;
  text-transform: uppercase;
`;
export const TableData = styled.td`
  height: 50px;
  text-align: center;
  border: 1px solid #555;
`;
export const TableRow = styled.tr`
  :nth-of-type(even) {
    background-color: #fff;
    text-transform: uppercase;
  }
  :hover {
    cursor: pointer;
    background-color: #9998a3;
  }
`;
