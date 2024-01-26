// input Box 컴포넌트 (상단의 제목, 내용, 추가하기)
function InputBox(props) {
    return (
      <div className="container-inputTitle">
        <div className="inputTitle">
          <div className="form-floating mb-3">
            <input
              value={props.title}
              onChange={props.inputTitle}
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="inputTitle"
            />
            <label htmlFor="floatingInput">제목</label>
          </div>
          <div className="form-floating mb-3">
            <input
              onKeyPress={props.onCheckEnter}
              value={props.body}
              onChange={props.inputBody}
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="inputBody"
            />
            <label htmlFor="floatingInput">내용을 입력하세요</label>
          </div>
          <div className="addBtn">
            <button
              onClick={props.addHandler}
              type="button"
              className="btn text-white"
            >
              추가하기
            </button>
          </div>
        </div>
      </div>
    );
  }

  export default InputBox;