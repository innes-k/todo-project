import "./App.css";

import React, { useState } from "react";

function App() {
  // box, title, body state설정
  const [box, setBox] = useState([
    // {
    //   id: 0,
    //   title: "제목을 입력하세요",
    //   body: "내용을 입력하세요",
    //   isDone: false,
    // },
  ]);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  // input '제목' 입력한 value - onchange 함수
  const inputTitle = function (e) {
    setTitle(e.target.value);
  };

  // input '내용' 입력한 value - onchange 함수
  const inputBody = function (e) {
    setBody(e.target.value);
  };

  // 추가 onclick
  const addHandler = function () {
    // id 값 중복없게 하기 위해 newId 만드는 조건문
    let newId;
    if (box.length > 0) {
      newId = box[box.length - 1].id + 1;
    } else if (box.length <= 0) {
      newId = 0;
    }

    // input의 value 값 반영한 새로운 객체 생성
    const newObj = {
      id: newId,
      title: title,
      body: body,
      isDone: false,
    };
    setBox([...box, newObj]);

    // 클릭 후 input 빈칸으로 초기화
    setTitle("");
    setBody("");
  };

  // '완료' 클릭하면 isDone을 true로 바꿔줘
  const completeHandler = function (id) {
    // 한빈님 답변
    // console.log(id);
    // const idx = box.findIndex((item) => item.id === id);
    // console.log(idx);
    // console.log(box[idx]);
    // console.log(box[idx].id);
    // true로 바꾼 애 -> setBox로 다시 정해주기

    const trueBox = box.map(function (item) {
      if (item.id === id) {
        return { ...item, isDone: true };
      }
      return item;
    });
    setBox(trueBox);
  };

  // '취소' 클릭하면 isDone을 false로 바꿔줘
  const cancelHandler = function (id) {
    const falseBox = box.map(function (item) {
      if (item.id === id) {
        return { ...item, isDone: false };
      }
      return item;
    });
    setBox(falseBox);
  };

  // 삭제버튼 onclick
  const removeHandler = function (id) {
    const removeBox = box.filter(function (item) {
      return item.id !== id;
    });
    setBox(removeBox);
  };

  // JSX 시작
  return (
    <div className="container">
      <div className="title">
        <span>My Todo List</span>
        <span>React</span>
      </div>
      <div className="inputTitle">
        <div>
          제목 :&nbsp;
          <input value={title} onChange={inputTitle} />
          &nbsp; 내용 :&nbsp;
          <input value={body} onChange={inputBody} /> &nbsp;
        </div>
        <div className="addBtn">
          <button onClick={addHandler}>추가하기</button>
        </div>
      </div>
      <div className="boxContainer">
        <div className="working">
          <span>Working..🔥</span>
          <div className="boxFlex">
            {box
              .filter((item) => item.isDone === false)
              .map(function (item) {
                return (
                  <div key={item.id} className="workingBox">
                    <span style={{ fontSize: "20px" }}>{item.title}</span>
                    <p style={{ fontSize: "15px" }}>{item.body}</p>
                    <button
                      onClick={() => removeHandler(item.id)}
                      className="removeBtn"
                    >
                      삭제하기
                    </button>
                    &nbsp;
                    <button
                      onClick={() => completeHandler(item.id)}
                      className="completeBtn"
                    >
                      완료
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="done">
          <span>Done..🥳</span>
          <div className="boxFlex">
            {box
              .filter((item) => item.isDone === true)
              .map(function (item) {
                return (
                  <div key={item.id} className="workingBox">
                    <span style={{ fontSize: "20px" }}>{item.title}</span>
                    <p style={{ fontSize: "15px" }}>{item.body}</p>
                    <button
                      onClick={() => removeHandler(item.id)}
                      className="removeBtn"
                    >
                      삭제하기
                    </button>
                    &nbsp;
                    <button
                      onClick={() => cancelHandler(item.id)}
                      className="completeBtn"
                    >
                      취소하기
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
