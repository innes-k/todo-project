import "./App.css";

import React, { useState } from "react";
import InputBox from "./components/inputBox";
import Header from "./layout/header";
// import TodoItem from "./components/test";

// 부모 컴포넌트 시작
function App() {
  // box, title, body state설정
  const [box, setBox] = useState([]);

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
      makeInputEmpty();
    } else {
      // input의 value 값 반영한 새로운 객체 생성
      const newObj = {
        id: Date.now(),
        title: title,
        body: body,
        isDone: false,
        deadline: deadline,
      };
      setBox([...box, newObj]);
      console.log(newObj.id);

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

  // JSX 시작
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
        <div className="working">
          <span>📝 Working </span>
          <div className="boxFlex">
            {box
              .filter((item) => item.isDone === false)
              .map(function (item) {
                return (
                  <article key={item.id} className="TodoCard">
                    <div className="TodoCard-body">
                      <h2>{item.title}</h2>
                      <p>{item.body}</p>
                      <time>{item.deadline}</time>
                    </div>
                    <div className="TodoCard-buttons">
                      <button
                        onClick={() => removeHandler(item.id)}
                        className="removeBtn"
                      >
                        삭제하기
                      </button>
                      <button
                        onClick={() => reLocateHandler(item.id)}
                        className="completeBtn"
                      >
                        완료하기
                      </button>
                    </div>
                  </article>
                );
              })}
          </div>
        </div>
        <div className="done">
          <span>👍🏻 Done</span>
          <div className="boxFlex">
            {box
              .filter((item) => item.isDone === true)
              .map(function (item) {
                return (
                  <article key={item.id} className="TodoCard">
                    <div className="TodoCard-body">
                      <h2>{item.title}</h2>
                      <p>{item.body}</p>
                      <time>{item.deadline}</time>
                    </div>
                    <div className="TodoCard-buttons">
                      <button
                        onClick={() => removeHandler(item.id)}
                        className="removeBtn"
                      >
                        삭제하기
                      </button>
                      <button
                        onClick={() => reLocateHandler(item.id)}
                        className="cancelBtn"
                      >
                        취소하기
                      </button>
                    </div>
                  </article>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
