import "./App.css";

import React, { useState } from "react";

function App() {
  const [box, setBox] = useState([
    { id: 0, title: "제목2", body: "내용2", isDone: false },
    { id: 1, title: "제목3", body: "내용3", isDone: false },
    { id: 2, title: "제목4", body: "내용4", isDone: false },
  ]);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  return (
    <div className="container">
      <div className="title">
        <span>My Todo List</span>
        <span>React</span>
      </div>
      <div className="inputTitle">
        <div>
          제목 :
          <input
            value={title}
            onChange={function (e) {
              setTitle(e.target.value);
            }}
          />
          &nbsp; 내용 : <input /> &nbsp;
        </div>
        <div className="addBtn">
          <button>추가하기</button>
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
