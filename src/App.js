import "./App.css";

import React, { useState } from "react";

function App() {
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

  const addClickHandler = () => {
    const newBoxObj = {
      id: box.length + 1,
      title: title,
      body: body,
      isDone: false,
    };
    setBox([...box, newBoxObj]);
  };

  const inputTitle = function (e) {
    setTitle(e.target.value);
  };

  const inputBody = function (e) {
    setBody(e.target.value);
  };

  return (
    <div className="container">
      <div className="title">
        <span>My Todo List</span>
        <span>React</span>
      </div>
      <div className="inputTitle">
        <div>
          제목 :
          <input value={title} onChange={inputTitle} />
          &nbsp; 내용
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
                  <button className="removeBtn">삭제하기</button>
                  <button className="completeBtn">완료</button>
                </div>
              );
            })}
          </div>
        </div>
        <div className="done">
          <span style={{ marginLeft: "10px" }}>Done..🥳</span>
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
