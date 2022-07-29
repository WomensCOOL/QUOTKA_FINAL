import React, { useEffect, useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import AddBoard from './Section/Board/AddBoard';
import AddComment from './Section/Comment/AddComment';
import CommentInput from './Section/Comment/CommentInput';
import ReplyInput from './Section/Reply/ReplyInput';
import { uploadComment, getComment } from 'modules/actions/comment';
import { getBoard } from 'modules/actions/board';
import styled from 'styled-components';
import Reply from 'assests/Reply.png';
import List from 'assests/List.png';
import BoardTitleBox from './Section/Board/BoardTitle';

const boardIdNew = 'quotkaId';
const boardUserNew = 'quotkaUser';
const boardTimeNew = '2022-07-20';
const boardWriterNew = '쿼억하';
const boardTitleNew = 'New Title Test';
const boardContentNew =
  'board content test [수원=뉴시스]박상욱 기자 = 고령사회(65세 이상 인구 비율 14% 이상)에 진입한 경기도가 오는 15일 노인학대 예방의 날을 앞두고 다양한 노인 보호정책을 추진 중이다.\n 13일 도에 따르면 올해 5월 말 기준 경기도의 65세 이상 노인인구는 192만9000여 명으로 도내 전체 인구 대비 14.2%를 차지한다. 이는 지난해 5월 말 13.5%(181만8000여 명) 대비 0.7%p 상승한 것으로, 국내 평균(2018년)보다 3년여 늦게 고령사회에 진입했다. 올해 국내 노인인구 비율은 17.5%다. 노인인구 증가와 함께 노인학대 신고 건수도 2019년 2445건, 2020년 2592건, 2021년 2881건으로 늘고 있다. 이에 따라 도는 노인학대 대응 관련 예산을 2020년 20억 원에서 2022년 48억 원으로 2.4배 증액하는 등 노인학대 예방에 총력을 기울이고 있다. 현재 도내 노인보호전문기관 5곳(수원, 성남, 부천, 의정부, 고양), 학대피해노인 전용쉼터 2곳(부천, 의정부)를 운영하는 등 전국 최대 규모의 노인학대 대응 인프라를 구축했다. 또, 전국 최초로 노인보호전문기관 전담 변호사를 배치해 학대 발생 시 조사의 전문성과 신뢰성을 확보하고, 피해노인을 위한 법률적 지원을 시행하고 있다. 관련 기관 종사자의 임금 및 수당 인상을 통한 처우도 개선, 노인학대와 관련된 상담·조사·예방교육 등 제공 서비스 질을 높였다. 노인학대에 대한 상담 및 신고 등은 누구나 1577-1389로 문의하면 된다.조태훈 경기도 노인복지과장은 "올해 하반기에는 경기 남부지역 내 학대피해노인 전용쉼터를 추가로 설치할 계획으로, 현재 경기 서부·북부 지역에 있는 학대피해노인 전용쉼터의 보호 사각지대를 해소하고 학대피해노인의 신속 분리 보호와 일상 복귀가 이뤄질 것으로 기대한다"고 말했다. 한편, 도는 노인학대 예방의 날을 맞아 14일 경기문화재단 다산홀에서 노인학대 예방의 날(6월 15일) 기념행사를 개최한다. 유엔(UN)은 2006년부터 매년 6월 15일을 세계 노인 학대인식의 날로 지정했다. 우리나라는 2017년도부터 범국민적으로 노인 학대에 대한 인식을 높이고 관심을 유도하기 위해 매년 6월 15일을 노인학대 예방의 날로 지정해 기념해 왔다.';
const boardViewCounts = '33';

const commentIdNew = 'commentId';
const commentUserNew = 'commentUser';
const commentTimeNew = '2022-07-21';
const commentWriterNew = 'commentWriter';
const commentContentNew = 'comment content test';

function BoardDetail(props) {
  const dispatch = useDispatch();
  const BoardId = props.match.params.boardId;
  const userFrom = localStorage.getItem('userId');
  const writerFrom = localStorage.getItem('userName');
  const [Comments, setComments] = useState([]);
  const [BoardDetail, setBoardDetail] = useState([]);
  const [BoardWriter, setBoardWriter] = useState(writerFrom);
  const [commentId, getCommentId] = useState('');
  const [Value, setValue] = useState('');
  const [show, setShow] = useState(false);
  const showHandler = () => setShow(!show);
  const onChange = e => {
    setValue(e.currentTarget.value);
  };
  const [CommentsCounts, setCommentsCounts] = useState('');
  let variables = {
    userFrom: userFrom,
    boardFrom: BoardId,
    commentContent: Value,
    commentWriter: BoardWriter,
  };

  const FetchComment = () => {
    dispatch(getComment(variables)).then(response => {
      if (response.payload.success) {
        setComments(response.payload.comments);
        setCommentsCounts(response.payload.commentCounts);
      } else {
        alert('댓글을 보여줄 수 없습니다.');
      }
    });
  };

  useEffect(() => {
    dispatch(getBoard(BoardId)).then(response => {
      if (response.payload.success) {
        setBoardDetail(response.payload.board);
      } else {
        alert('게시글 가져오기에 실패했습니다.');
      }
    });
  }, []);

  useEffect(() => {
    FetchComment();
  }, [CommentsCounts]);

  const onSubmit = e => {
    e.preventDefault();
    if (!Value) {
      alert('댓글을 작성해주세요.');
      return;
    }

    dispatch(uploadComment(variables)).then(response => {
      alert('댓글이 등록되었습니다.');
      setValue('');
      FetchComment();
      window.location.replace(`${location.pathname}`);
    });
  };

  const onRemoveBoard = id => {
    setBoardDetail(BoardDetail.filter(BoardDetail => BoardDetail._id !== id));
    props.history.push('/board'); // 나중에 boardlist로 수정할 부분
  };

  const onRemoveComment = id => {
    setComments(Comments.filter(Comments => Comments._id !== id));
  };

  return (
    <>
      <BoardBox key={props.id}>
        <Link
          style={{ textDecoration: 'none', color: 'black' }}
          to="/quotemaster/boardlist"
        >
          <BoardTitleBox></BoardTitleBox>
        </Link>
        <AddBoard
          id={boardIdNew}
          user={boardUserNew}
          time={boardTimeNew}
          writer={boardWriterNew}
          title={boardTitleNew}
          content={boardContentNew}
          viewCounts={boardViewCounts}
          history={`${props.history}`}
          onRemove={onRemoveBoard}
        />

        <form onSubmit={onSubmit}>
          <CommentInput
            name="Comment"
            placeholder="댓글을 작성해주세요."
            value={Value}
            onChange={onChange}
          />
          <CommentButton type="submit" onClick={onSubmit}>
            작성
          </CommentButton>
        </form>
        {Comments &&
          Comments.map((comment, index) => {
            return (
              <CommentUl key={index}>
                <React.Fragment key={index}>
                  <AddComment
                    id={commentIdNew}
                    boardId={boardIdNew}
                    user={commentUserNew}
                    time={commentTimeNew}
                    writer={commentWriterNew}
                    content={commentContentNew}
                    onRemove={onRemoveComment}
                  />
                  <ReplyImg
                    src={Reply}
                    onClick={() => {
                      showHandler();
                      getCommentId(commentIdNew);
                    }}
                  />
                  <li>
                    {show && comment._id === commentId && (
                      <ReplyInput
                        id={commentId}
                        boardId={BoardId}
                        name="Reply"
                        placeholder="대댓글을 작성해주세요."
                        userFrom={userFrom}
                        writerFrom={writerFrom}
                      />
                    )}
                  </li>
                </React.Fragment>
              </CommentUl>
            );
          })}
      </BoardBox>
    </>
  );
}

export default withRouter(BoardDetail);

const BoardBox = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 100%;
`;

const CommentButton = styled.button`
  border-radius: 8px;
  padding-top: 3px;
  font-weight: 600;
  font-size: 14px;
  margin-left: 10px;
  width: 70px;
  height: 35px;
  text-align: center;
  background: #c5ad81;
  color: white;
  &:active {
    background: rgba(0, 0, 0, 0.3);
  }
`;
const CommentUl = styled.ul`
  position: relative;
`;

const ReplyImg = styled.img`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 0;
  right: 5px;
  cursor: pointer;
`;

const ListImg = styled.img`
  width: 30px;
  height: 30px;
  padding: 5px;
  background-color: #eee;
  border-radius: 50px;
`;
