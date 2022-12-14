import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  getLike,
  ischeckLike,
  subtractionLike,
  additionLike,
} from 'modules/actions/like';
import styled from 'styled-components';
import LikeIcon from 'assests/likee.png';
import 'styles/board/button.css';

function LikeButton({ boardId, boardTitle, boardContent, boardWriter }) {
  const dispatch = useDispatch();
  const userFrom = localStorage.getItem('userId');
  const [likeCounts, setLikeCounts] = useState(0);
  const [userLiked, setUserLiked] = useState(false);
  let variables = {
    userFrom: userFrom,
    boardFrom: boardId,
    boardWriter: boardWriter,
    boardTitle: boardTitle,
    boardContent: boardContent,
  };

  const getLikeNumber = () => {
    dispatch(getLike(variables))
      .then(response => {
        if (!response.payload.success) {
          alert('좋아요 정보를 가져오는데 실패했습니다.');
          return;
        }
        setLikeCounts(response.payload.likeCounts);
      })
      .catch(e => console.log(e));
  };

  const isCheckLike = () => {
    dispatch(ischeckLike(variables))
      .then(response => {
        if (!response.payload.success) {
          alert('좋아요 정보를 가져오는데 실패했습니다.');
          return;
        }
        setUserLiked(response.payload.liked);
      })
      .catch(e => console.log(e));
  };

  const subLike = () => {
    dispatch(subtractionLike(variables))
      .then(response => {
        if (!response.payload.success) {
          alert('좋아요 삭제를 실패했습니다.');
          return;
        }
        setLikeCounts(likeCounts - 1);
      })
      .catch(e => console.log(e));
  };

  const addLike = () => {
    dispatch(additionLike(variables))
      .then(response => {
        if (!response.payload.success) {
          alert('좋아요 등록을 실패했습니다.');
          return;
        }
        setLikeCounts(likeCounts + 1);
      })
      .catch(e => console.log(e));
  };

  const handleLike = e => {
    e.preventDefault();
    userLiked ? subLike() : addLike();
  };

  useEffect(() => {
    getLikeNumber();
    isCheckLike();
  }, [likeCounts, userLiked]);

  return (
    <>
      <button onClick={handleLike}>
        <Like src={LikeIcon} />
        <Counts>
          <span>{likeCounts}</span>
        </Counts>
      </button>
    </>
  );
}

export default LikeButton;

const Like = styled.img`
  width: 15px;
  height: 15px;
  margin-right: -23px;
  margin-top: 3px;
`;

const Counts = styled.span`
  font-size: 15px;
  color: gray;
  text-align: left;
  margin-top: 4px;
  margin-right: 10px;
`;
