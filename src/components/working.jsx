import React from "react";
import { useState } from "react";

function Working({ box, setBox, removeHandler, reLocateHandler }) {
  const [sortOrder, setSortOrder] = useState("asc");

  const changeSort = (order) => {
    const sortedBox = [...box].sort((a, b) => {
      if (order === "asc") {
        return new Date(a.deadline) - new Date(b.deadline);
      }
      return new Date(b.deadline) - new Date(a.deadline);
    });
    setBox(sortedBox);
  };

  return (
    <div className="working">
      <div className="workingTitle">
        <span>📝 Working </span>
        <select
          value={sortOrder}
          onChange={(e) => {
            setSortOrder(e.target.value);
            changeSort(e.target.value);
          }}
        >
          <option value="asc">오름차순</option>
          <option value="desc">내림차순</option>
        </select>
      </div>
      <div className="boxFlex">
        {box
          .filter((item) => item.isDone === false)
          .map(function (item) {
            return (
              <article key={item.id} className="TodoCard">
                <div className="TodoCard-body">
                  <h2>{item.title}</h2>
                  <p>{item.body}</p>
                  <time>
                    {new Date(item.deadline).toLocaleDateString("ko-KR", {
                      year: "numeric",
                      month: "long", // "long"을 사용하면 월 이름이 됨
                      day: "numeric",
                    })}
                    까지
                  </time>
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
  );
}

export default Working;
