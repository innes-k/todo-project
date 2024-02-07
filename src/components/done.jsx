import React from "react";
import { useState } from "react";
import * as St from "../styles/done.style";
import { LinkTo } from "../styles/working.style";

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
      <St.Title>
        <St.TitleSpan>👍🏻 Done </St.TitleSpan>
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
          .filter((item) => item.isDone === true)
          .map(function (item) {
            return (
              <St.TodoList key={item.id}>
                <LinkTo to={`/detail/${item.id}`}>
                  <St.TodoListBody>
                    <St.Span>{item.title}</St.Span>
                    <St.P>{item.body}</St.P>
                    <St.Time>{item.deadline} 까지</St.Time>
                  </St.TodoListBody>
                </LinkTo>
                <St.TodoListBtns>
                  <St.RemoveBtn onClick={() => removeHandler(item.id)}>
                    삭제하기
                  </St.RemoveBtn>
                  <St.CancelBtn onClick={() => reLocateHandler(item.id)}>
                    취소하기
                  </St.CancelBtn>
                </St.TodoListBtns>
              </St.TodoList>
            );
          })}
      </St.TodoListFlex>
    </div>
  );
}

export default Done;
