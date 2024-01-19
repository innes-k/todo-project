import "./App.css";

import React from "react";

function App() {
  return (
    <div className="container">
      <div className="title">
        <span>My Todo List</span>
        <span>React</span>
      </div>
      <div className="inputTitle">
        <div>
          제목 : <input />
          내용 : <input />
        </div>
        <div className="addBtn">
          <button>추가하기</button>
        </div>
      </div>
      <div>
        <span style={{ marginLeft: "10px" }}>Working..🔥</span>
        <div className="workingBox">
          <span style={{ fontSize: "20px" }}>제목</span>
          <p style={{ fontSize: "15px" }}>내용</p>
          <button className="removeBtn">삭제하기</button>
          <button className="completeBtn">완료</button>
        </div>
      </div>
      <div>
        <span style={{ marginLeft: "10px" }}>Done..🥳</span>
        {/* <div className="workingBox">
          <span style={{ fontSize: "20px" }}>제목</span>
          <p style={{ fontSize: "15px" }}>내용</p>
          <button className="removeBtn">삭제하기</button>
          <button className="completeBtn">완료</button>
        </div> */}
      </div>
    </div>
  );
}

export default App;
