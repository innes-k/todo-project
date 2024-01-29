import React from 'react'

function Done({box, removeHandler, reLocateHandler }) {
  return (
    <div className="done">
      <div className='doneTitle'>
        <span>👍🏻 Done </span>
        <select>
          <option>오름차순</option>
          <option>내림차순</option>
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

  )
}

export default Done