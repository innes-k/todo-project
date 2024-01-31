import * as St from "../styles/inputBox.styles";

// input Box 컴포넌트 (상단의 제목, 내용, 추가하기)
function InputBox(props) {
  return (
    <St.Container>
      <St.Title>
        {/* <div className="form-floating mb-3"> */}
        <St.TitleInput
          value={props.title}
          onChange={props.inputTitle}
          placeholder="제목"
        />
        {/* <label htmlFor="floatingInput">제목</label> */}
        {/* </div> */}
        {/* <div className="form-floating mb-3"> */}
        <St.TitleInput
          onKeyPress={props.onCheckEnter}
          value={props.body}
          onChange={props.inputBody}
          placeholder="내용"
        />
        {/* <label htmlFor="floatingInput">내용을 입력하세요</label>
        </div> */}
        <St.Time>
          <label htmlFor="start">마감일 :</label>
          <St.TimeInput
            type="date"
            id="start"
            name="trip-start"
            min="2024-01-01"
            max="2026-12-31"
            value={props.deadline}
            onChange={props.changeDeadline}
          />
        </St.Time>
        <div className="addBtn">
          <St.AddBtn
            onClick={props.addHandler}
            type="button"
            className="btn text-white"
          >
            추가하기
          </St.AddBtn>
        </div>
      </St.Title>
    </St.Container>
  );
}

export default InputBox;
