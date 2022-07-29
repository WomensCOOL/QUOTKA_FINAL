import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import UpdateTime from 'library/utils/updateTime';
import DeleteBoard from './DeleteBoard';
import LikeButton from '../Like/LikeButton';
import ScrapButton from '../Scrap/ScrapButton';
import CommentButton from '../Comment/CommentButton';
import ShowInfo from '../ShowInfo/ShowInfo';
import Github from 'assests/Github.png';
import styled from 'styled-components';
import Profile from 'assests/Profile.png';

function AddBoard(props) {
  const currentUser = window.localStorage.getItem('userId');
  const [showInfo, setShowInfo] = useState(false);
  const showHandler = () => {
    setShowInfo(!showInfo);
  };

  return (
    <>
      <AddBoardBox key={props.id}>
        <div>
          <BoardHeader>
            <Title>{props.title}</Title>
            <WriterInfo>
              <div className="profileImg">
                <ProfileImg src={Profile} />
              </div>
              <ul>
                <li>
                  {props.user.field === undefined ? (
                    <OnlyWriter>{props.writer}</OnlyWriter>
                  ) : (
                    <AddBoardWriter onClick={showHandler}>
                      <NameBox>
                        <Writer>{props.writer}</Writer>
                        <Field>{props.user.field}</Field>
                      </NameBox>
                    </AddBoardWriter>
                  )}
                </li>
                <li>
                  <div className="timeView">
                    <TimeBox>{props.time}</TimeBox>
                    <ViewCounts>조회수 {props.viewCounts}</ViewCounts>
                  </div>
                </li>
              </ul>
            </WriterInfo>
            <ul>
              <li>
                <DeleteBoardBox>
                  {props.user !== undefined ? (
                    props.user === currentUser ? (
                      <>
                        <DeleteBoard
                          board={props.id}
                          user={props.user}
                          history={props.history}
                          onRemove={props.onRemove}
                        />
                      </>
                    ) : null
                  ) : props.user._id === currentUser ? (
                    <>
                      <DeleteBoard
                        board={props.id}
                        user={props.user}
                        history={props.history}
                        onRemove={props.onRemove}
                      />
                    </>
                  ) : null}
                </DeleteBoardBox>
              </li>
            </ul>
          </BoardHeader>
        </div>
        <div>
          <Content>{props.content}</Content>
        </div>
        <ButtonBox>
          <div style={{ textAlign: 'left' }}>
            <LikeButton
              boardId={props.id}
              boardWriter={props.writer}
              boardTitle={props.title}
              boardContent={props.content}
            />
            <ScrapButton
              boardId={props.id}
              boardWriter={props.writer}
              boardTitle={props.title}
              boardContent={props.content}
            />
            <Link to={`/board/${props.id}`}>
              <CommentButton boardId={props.id} />
            </Link>
          </div>
        </ButtonBox>
      </AddBoardBox>
    </>
  );
}

export default withRouter(AddBoard);

const BoardHeader = styled.span`
  width: 100%;
`;

const WriterInfo = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  margin-top: 5px;

  .profileImg {
    margin-right: 0px;
  }

  ul {
    margin-left: 10px;
    margin-top: 5px;
  }

  .timeView {
    display: flex;
    align-items: left;
  }
`;

const Title = styled.div`
  font-family: 'SCDream4R';
  font-weight: bold;
  font-size: 23px;
  padding-left: 0px;
  margin-bottom: 1px;
  margin-top: -15px;
`;

const AddBoardBox = styled.div`
  margin-bottom: 10px;
`;

const AddBoardWriter = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top; 10px;
`;

const Writer = styled.span`
  width: 60px;
  height: 20px;
  font-size: 15px;
  padding-top: 3px;
  font-family: 'SCDream4R';
  font-weight: 500;
  color: black;
  background-color: white;
  margin: 0 auto;
  text-align: left;
  cursor: pointer;
`;

const OnlyWriter = styled.span`
  width: 60px;
  height: 20px;
  font-size: 15px;
  padding-top: 3px;
  font-family: 'SCDream4R';
  font-weight: 500;
  color: black;
  background-color: white;
  margin: 0 auto;
  text-align: left;
`;

const Field = styled.span`
  font-size: 12px;
  width: 60px;
  height: 30px;
  display: flex;
  padding-top: 9px;
  color: #aaa;
`;

const ProfileImg = styled.img`
  width: 45px;
  height: 45px;
  padding: 3px;
  background-color: #eee;
  border-radius: 50px;
  margin-right: 5px;
`;

const TimeBox = styled.div`
  width: 100px;
  height: 30px;
  font-size: 14px;
  padding-top: 3px;
  color: #aaa;
  font-family: 'SCDream';
  font-weight: 900;
`;

const ViewCounts = styled.div`
  width: 100px;
  margin-left: 10px;
  padding-top: 3px;
  font-family: 'SCDream';
  font-size: 14px;
  color: #aaa;
  font-weight: 900;
`;

const NameBox = styled.div`
  display: flex;
  align-items: center;
`;

const InfoBox = styled.li`
  width: 150px;
  margin-left: 2px;
  border-radius: 8px;
  padding: 10px;
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  white-space: pre-wrap;
  border-top: 1px solid rgba(0, 0, 0, 0.07);
  font-size: 13px;
  padding-left: 2px;
  padding-top: 30px;
  padding-bottom: 35px;
  margin-top: 20px;
  line-height: 25px;
  font-weight: 900;
`;

const ButtonBox = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.07);
  padding-bottom: 35px;
  margin-bottom: 40px;
`;

const DeleteBoardBox = styled.div``;
