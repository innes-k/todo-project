import "./App.css";

import React, { useState } from "react";

function App() {
  // box, title, body state설정
  const [box, setBox] = useState([
    {
      id: 1,
      title: "제목을 입력하세요",
      body: "내용을 입력하세요",
      isDone: false,
    },
  ]);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  // '추가'버튼의 onclick 함수
  const addClickHandler = () => {
    const newBoxObj = {
      id: box.length + 1,
      title: title,
      body: body,
      isDone: false,
    };
    setBox([...box, newBoxObj]);
    // input에 value={title}, body 정해져 있으니까, 클릭 후에 title, body를 ''로 바꿔준다는 명령 set -> 클릭 후 input란이 빈값으로 바뀜
    setTitle("");
    setBody("");
  };

  // '제목' 입력한 value - onchange 함수
  const inputTitle = function (e) {
    setTitle(e.target.value);
  };

  // '내용' 입력한 value - onchange 함수
  const inputBody = function (e) {
    setBody(e.target.value);
  };

  // 삭제 onclick 함수 (filtering)
  // - click시 key={}의 값을 매개변수로 넣음 -> 넣은 매개변수를 onclick 함수에서 받아옴 -> 사용가능
  // - filter한 결과를 set 해줘야 State가 변경되면서 결과값이 출력됨
  // - 렌더링을 바꿀때 반드시 필요한것 set!
  const removeClickHandler = (id) => {
    const newWorkingBox = box.filter((item) => item.id !== id);
    setBox(newWorkingBox);
  };

  // 완료 onclick 함수 - 원장 튜터님 답변
  // const completeBtnHandler = function (id) {
  // 복사해 올 때부터 변경해서 복사할 수가 있음
  // const newArr = box.map(function(item) {
  // 만약에 클릭한 id와 일치하는 todo 아이템인 경우
  // if (item.id === id) {
  // 어떠한 것을 해야할까요???
  //     return {
  //     }
  //   }
  //   return item;
  // });
  // 변경할 새로운 배열 만듦 - box로부터 복사해온 배열
  // 2. id가 일치하는애의 isDone 바꿔주기

  // 3. setBox -> 새로운 배열 세팅
  //   alert(id);
  // };

  // 완료 onclick 함수 test
  // const completeBtnHandler = function (id) {
  //   const newArr = box.map(function (item) {
  //     if (item.id === id) {
  //       item.isDone = true;
  //     }
  //     return box.filter(function(item){
  //       item.id === id
  //     });
  //   });
  // };

  // 1.

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
          <button onClick={addClickHandler}>추가하기</button>
        </div>
      </div>
      <div className="boxContainer">
        <div className="working">
          <span>Working..🔥</span>
          <div className="boxFlex">
            {box.map(function (item) {
              return (
                <div key={item.id} className="workingBox">
                  <span style={{ fontSize: "20px" }}>{item.title}</span>
                  <p style={{ fontSize: "15px" }}>{item.body}</p>
                  <button
                    onClick={() => removeClickHandler(item.id)}
                    className="removeBtn"
                  >
                    삭제하기
                  </button>
                  &nbsp;
                  <button className="completeBtn">완료</button>
                </div>
              );
            })}
          </div>
        </div>
        <div className="done">
          <span>Done..🥳</span>
          {/* 카드를 어떻게 붙이지? 취소 버튼으로 바꾸는건 어떻게? */}
        </div>
      </div>
    </div>
  );
}

export default App;
