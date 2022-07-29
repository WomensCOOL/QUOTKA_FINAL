import { Component } from 'react';
import Table from 'react-bootstrap/Table';
import TitleBoxContainer from 'components/BoardQuoteMaster/Section/Board/BoardTitle';
import { Link } from 'react-router-dom';
import BoardListTextBox from './Section/List/BoardListText';
import styled from 'styled-components';
import WriteButton from './Section/List/WriteButton';

/**
 * BoardList class
 */

const BoardTopBlock = styled.ul`
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 2px;
  margin-bottom: 0px;
  margin-top: 0px;
`;

function BoardList(history) {
  /**
   *
   */
  return (
    <>
      <TitleBoxContainer></TitleBoxContainer>
      <BoardTopBlock>
        <BoardListTextBox></BoardListTextBox>
        <WriteButton></WriteButton>
      </BoardTopBlock>
      <BoardTable>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
              <th>작성일</th>
              <th>조회수</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>9</td>
              <td>
                <Link
                  style={{ textDecoration: 'none', color: 'black' }}
                  to="/quotemaster/board/quotkaId"
                >
                  New Title Test
                </Link>
              </td>
              <td>쿼억하</td>
              <td>2022-07-29</td>
              <td>32</td>
            </tr>
            <tr>
              <td>8</td>
              <td>구의 증명</td>
              <td>jyjjang</td>
              <td>2022-07-29</td>
              <td>18</td>
            </tr>
            <tr>
              <td>7</td>
              <td>게시글2</td>
              <td>bbbbb</td>
              <td>2022-07-28</td>
              <td>21</td>
            </tr>
            <tr>
              <td>6</td>
              <td>게시글2</td>
              <td>bbbbb</td>
              <td>2022-07-28</td>
              <td>11</td>
            </tr>
            <tr>
              <td>5</td>
              <td>게시글2</td>
              <td>bbbbb</td>
              <td>2022-07-27</td>
              <td>28</td>
            </tr>
            <tr>
              <td>4</td>
              <td>게시글2</td>
              <td>bbbbb</td>
              <td>2022-07-27</td>
              <td>17</td>
            </tr>
            <tr>
              <td>3</td>
              <td>게시글2</td>
              <td>bbbbb</td>
              <td>2022-07-26</td>
              <td>10</td>
            </tr>
            <tr>
              <td>2</td>
              <td>게시글2</td>
              <td>bbbbb</td>
              <td>2022-07-25</td>
              <td>20</td>
            </tr>
            <tr>
              <td>1</td>
              <td>게시글2</td>
              <td>bbbbb</td>
              <td>2022-07-24</td>
              <td>45</td>
            </tr>
          </tbody>
        </Table>
      </BoardTable>
    </>
  );
}

export default BoardList;

const BoardTable = styled.table`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-collapse: separate;
  border-spacing: 0 10px;

  .num {
    width: 5%;
    text-align: center;
  }
  .date {
    width: 7%;
  }
  .title {
    width: 25%;
    text-align: center;
  }
  .content {
    width: 63%;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 14px;
    border-top: 1px solid #444444;
    margin-top: 7px;
  }

  td {
    text-aligh: left;
    padding: 10px;
    border-bottom: 1px solid #444444;
    margin-left: 10px;
  }
  th {
    padding: 15px;
    border-bottom: 1px solid #444444;
    margin-left: 10px;
  }

  thead {
    font-family: 'SCDream-bold';
    font-weight: 100;
  }
`;
