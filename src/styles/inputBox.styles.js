import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Title = styled.div`
  width: 400px;
  height: 270px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: white;
  margin-bottom: 50px;
  border-radius: 30px;
  border: 2px solid rgb(135, 206, 235);
`;

export const Time = styled.time`
  margin-bottom: 10px;
`;

export const TimeInput = styled.input`
  width: 250px;
  height: 30px;
  text-align: center;
`;

export const AddBtn = styled.button`
  width: 300px;
  background-color: rgb(135, 206, 235);
`;
