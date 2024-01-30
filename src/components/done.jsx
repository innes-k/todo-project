import React from "react";
import { useState } from "react";

function Done({ box, setBox, removeHandler, reLocateHandler }) {
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
    <div className="done">
      <div className="doneTitle">
        <span>👍🏻 Done </span>
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
          .filter((item) => item.isDone === true)
          .map(function (item) {
            return (
              <article key={item.id} className="TodoCard">
                <div className="TodoCard-body">
                  <h2>{item.title}</h2>
                  <p>{item.body}</p>
                  <time>{item.deadline} 까지</time>
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
  );
}

export default Done;
