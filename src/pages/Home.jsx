import React from "react";
import { useState } from "react";
import InputBox from "../components/inputBox";
import Header from "../layout/header";
import Working from "../components/working";
import Done from "../components/done";

const Home = ({ box, setBox }) => {
  // box, title, body state설정

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [deadline, setDeadline] = useState("");

  // input '제목' 입력한 value - onchange 함수
  const inputTitle = function (e) {
    setTitle(e.target.value);
  };

  // input '내용' 입력한 value - onchange 함수
  const inputBody = function (e) {
    setBody(e.target.value);
  };

  // deadline 변경 - onChange 함수
  const changeDeadline = (e) => {
    setDeadline(e.target.value);
  };
  // 제목, 내용 input을 빈칸으로 초기화하는 함수
  const makeInputEmpty = () => {
    setTitle("");
    setBody("");
  };

  // '추가하기'버튼 onclick
  const addHandler = function () {
    // 제목, 내용, 마감일 유효성 검사 alert
    if (title === "") {
      alert("제목을 입력해주세요.");
      makeInputEmpty();
    } else if (body === "") {
      alert("내용을 입력해주세요.");
      makeInputEmpty();
    } else if (deadline === "") {
      alert("마감일을 지정해주세요.");
    } else {
      setBox((box) => [
        ...box,
        {
          id: Date.now(),
          title: title,
          body: body,
          isDone: false,
          deadline: deadline,
        },
      ]);

      // '추가' 클릭 후 input 빈칸으로 초기화
      makeInputEmpty();
    }
  };

  // '완료' 클릭시 isDone을 true로, '취소' 클릭시 isDone을 false로 바꾸기
  const reLocateHandler = function (id) {
    const reLocateBox = box.map(function (item) {
      if (item.id === id) {
        return { ...item, isDone: !item.isDone };
      }
      return item;
    });
    setBox(reLocateBox);
  };

  // 삭제버튼 onclick
  const removeHandler = function (id) {
    const removeBox = box.filter(function (item) {
      return item.id !== id;
    });
    setBox(removeBox);
  };

  // enter키로 todo 추가하기
  const onCheckEnter = (e) => {
    if (e.key === "Enter") {
      addHandler();
    }
  };
  return (
    <div className="container">
      <Header />
      {/* input 박스 - 컴포넌트 분리 */}
      <InputBox
        title={title}
        inputTitle={inputTitle}
        onCheckEnter={onCheckEnter}
        body={body}
        inputBody={inputBody}
        addHandler={addHandler}
        deadline={deadline}
        changeDeadline={changeDeadline}
      />
      <div className="boxContainer">
        <Working
          box={box}
          setBox={setBox}
          removeHandler={removeHandler}
          reLocateHandler={reLocateHandler}
        />
        <Done
          box={box}
          setBox={setBox}
          removeHandler={removeHandler}
          reLocateHandler={reLocateHandler}
        />
      </div>
    </div>
  );
};

export default Home;
