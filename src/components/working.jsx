import React from "react";
import { useState } from "react";
import * as St from "../styles/working.style";

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
      <St.Title>
        <St.TitleSpan>📝 Working </St.TitleSpan>
        <St.TitleSelect
          value={sortOrder}
          onChange={(e) => {
            setSortOrder(e.target.value);
            changeSort(e.target.value);
          }}
        >
          <option value="asc">오름차순</option>
          <option value="desc">내림차순</option>
        </St.TitleSelect>
      </St.Title>
      <St.TodoListFlex>
        {box
          .filter((item) => item.isDone === false)
          .map(function (item) {
            return (
              <St.TodoList key={item.id}>
                <St.LinkTo to={`/detail/${item.id}`}>
                  <St.TodoListBody>
                    <St.Span>{item.title}</St.Span>
                    <p>{item.body}</p>
                    <St.Time>
                      {new Date(item.deadline).toLocaleDateString("ko-KR", {
                        year: "numeric",
                        month: "long", // "long"을 사용하면 월 이름이 됨
                        day: "numeric",
                      })}
                      까지
                    </St.Time>
                  </St.TodoListBody>
                </St.LinkTo>
                <St.TodoListBtns>
                  <St.RemoveBtn onClick={() => removeHandler(item.id)}>
                    삭제하기
                  </St.RemoveBtn>
                  <St.CompleteBtn onClick={() => reLocateHandler(item.id)}>
                    완료하기
                  </St.CompleteBtn>
                </St.TodoListBtns>
              </St.TodoList>
            );
          })}
      </St.TodoListFlex>
    </div>
  );
}

export default Working;
