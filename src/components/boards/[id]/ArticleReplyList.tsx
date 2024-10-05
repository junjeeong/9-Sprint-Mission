import styled from "styled-components";
import ReplyItem from "./ReplyItem";
import { ReplyNoExist } from "./ReplyNoExist";

export const ArticleReplyList = ({ list }) => {
  const replyNoExist = !!list[0]; // list 배열에 아무런 값이 없을 경우 댓글 존재하지 않음.

  return (
    <Container>
      {replyNoExist ? (
        list.map((reply) => <ReplyItem key={reply.id} info={reply} />)
      ) : (
        <ReplyNoExist />
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 24px;
`;
