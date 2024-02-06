import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Detail = ({ box }) => {
  const params = useParams();
  const [selectedBox, setSelectedBox] = useState("");

  useEffect(() => {
    const foundBox = box.find(
      (todoList) => todoList.id === parseInt(params.id)
    );
    setSelectedBox(foundBox);
  }, [box, params.id]);
  const { title, body, deadline } = selectedBox;

  const formattedDate = new Date(deadline).toLocaleDateString("ko", {
    year: "2-digit",
    month: "long",
    day: "2-digit",
  });

  return (
    <Container>
      <DetailWrapper>
        <Title>{title}</Title>
        <Content>{body}</Content>
        <Time>마감일 : {formattedDate}까지</Time>
        <BtnWrapper>
          <Button>수정</Button>
          <Button>삭제</Button>
        </BtnWrapper>
      </DetailWrapper>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 200px;
  display: flex;
  justify-content: center;
`;

const DetailWrapper = styled.div`
  width: 500px;
  height: 300px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 40px;
  gap: 12px;
  border: 4px solid navy;
  border-radius: 20px;
`;

const Title = styled.p`
  font-size: 32px;
  font-weight: bold;
`;

const Content = styled.span`
  font-size: 27px;
`;

const Time = styled.time`
  color: gray;
  font-size: 23px;
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  margin-right: 20px;
`;

const Button = styled.button`
  font-size: 20px;
  width: 70px;
  height: 40px;
  background-color: yellow;
  border: 0px;
  border-radius: 12px;
`;

export default Detail;
