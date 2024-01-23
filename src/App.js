import "./App.css";

import React, { useState } from "react";

// input Box 컴포넌트 (상단의 제목, 내용, 추가하기)
function InputBox(props) {
  return (
    <div className="container-inputTitle">
      <div className="inputTitle">
        <div className="form-floating mb-3">
          <input
            value={props.title}
            onChange={props.inputTitle}
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="inputTitle"
          />
          <label htmlFor="floatingInput">제목</label>
        </div>
        <div className="form-floating mb-3">
          <input
            onKeyPress={props.onCheckEnter}
            value={props.body}
            onChange={props.inputBody}
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="inputBody"
          />
          <label htmlFor="floatingInput">내용을 입력하세요</label>
        </div>
        <div className="addBtn">
          <button
            onClick={props.addHandler}
            type="button"
            className="btn text-white"
          >
            추가하기
          </button>
        </div>
      </div>
    </div>
  );
}

// 부모 컴포넌트 시작
function App() {
  // box, title, body state설정
  const [box, setBox] = useState([]);

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

  // 제목, 내용 input을 빈칸으로 초기화하는 함수
  const makeInputEmpty = () => {
    setTitle("");
    setBody("");
  };

  // '추가하기'버튼 onclick
  const addHandler = function () {
    // 제목, 내용 유효성 검사 alert
    if (title === "") {
      alert("제목을 입력해주세요.");
      makeInputEmpty();
    } else if (body === "") {
      alert("내용을 입력해주세요.");
      makeInputEmpty();
    } else {
      // 리스트들 간에 id 값 중복없도록 newId 만드는 조건문
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
      <div className="title">
        <span>☁️ Welcome to To Do List! ⛅️</span>
      </div>
      {/* input 박스 - 컴포넌트 분리 */}
      <InputBox
        title={title}
        inputTitle={inputTitle}
        onCheckEnter={onCheckEnter}
        body={body}
        inputBody={inputBody}
        addHandler={addHandler}
      />
      <div className="boxContainer">
        <div className="working">
          <span>📝 Working </span>
          <div className="boxFlex">
            {box
              .filter((item) => item.isDone === false)
              .map(function (item) {
                return (
                  <div key={item.id} className="toDoBox">
                    <p className="boxTitle">{item.title}</p>
                    <p className="boxBody">{item.body}</p>
                    <button
                      onClick={() => removeHandler(item.id)}
                      className="removeBtn"
                    >
                      삭제하기
                    </button>
                    &nbsp;
                    <button
                      onClick={() => reLocateHandler(item.id)}
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
          <span>👍🏻 Done</span>
          <div className="boxFlex">
            {box
              .filter((item) => item.isDone === true)
              .map(function (item) {
                return (
                  <div key={item.id} className="toDoBox">
                    <p className="boxTitle">{item.title}</p>
                    <p className="boxBody">{item.body}</p>
                    <button
                      onClick={() => removeHandler(item.id)}
                      className="removeBtn"
                    >
                      삭제하기
                    </button>
                    &nbsp;
                    <button
                      onClick={() => reLocateHandler(item.id)}
                      className="cancelBtn"
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
