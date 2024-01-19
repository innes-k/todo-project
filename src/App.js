import "./App.css";

import React, { useState } from "react";

function App() {
  // box, title, body state설정
  const [box, setBox] = useState([
    // {
    //   id: 1,
    //   title: "제목을 입력하세요",
    //   body: "내용을 입력하세요",
    //   isDone: false,
    // },
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
    const newBox = box.filter((item) => item.id !== id);
    setBox(newBox);
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
          {/* <div className="workingBox">
          <span style={{ fontSize: "20px" }}>제목</span>
          <p style={{ fontSize: "15px" }}>내용</p>
          <button className="removeBtn">삭제하기</button>
          <button className="completeBtn">완료</button>
        </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
