import React from 'react'

function Working({box, removeHandler, reLocateHandler}) {
  return (
    <div className="working">
    <span>📝 Working </span>
    <div className="boxFlex">
      {box
        .filter((item) => item.isDone === false)
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

  )
}

export default Working