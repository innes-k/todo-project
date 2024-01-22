#  📝 To Do List - React Project

- 리액트\_To Do List 관리 사이트
- 주소 : https://innes-k.github.io/todo-project/

<br/>

## 🖥️ 프로젝트 소개

할 일 목록 'To Do List'를 추가 및 관리하는 사이트 입니다.

<br/>

## 🕰️ 개발 기간

- 2024.01.19 ~ 2024.01.22 (4일간)

### ⚙️ 개발 환경

- `React`, `HTML5`, `CSS3`
- **Framework** : Bootstrap(5.0.2)
- **environment** : Visual Studio Code, git, github

<br/>

## ✨ 프로젝트 화면 구성 및 기능

- 메인 페이지

  ![메인](./images/main.png)

<br/>

- To Do List에 목록 추가

  ![목록추가](./images/add.gif)

<br/>

- 완료 항목 Done으로 이동

  ![목록이동](./images/done.gif)

<br/>

- Done 항목을 다시 To Do List로 복구

  ![list복구](./images/cancel.gif)

<br/>

- 항목 삭제하기

  ![삭제](./images/remove.gif)

<br/>

## 📌 주요 기능

### 필수 구현사항

1. To Do List에 새로운 리스트 추가

   - 제목, 내용 input은 다시 빈 값으로 초기화

2. 리스트의 '완료' 버튼 클릭 시 Done 목록으로 이동

   - Done 목록의 상태 버튼은 '취소하기'로 변경

3. 항목 삭제하기
   - '삭제하기' 버튼 클릭 시 항목 삭제

4. 공통 Layout 적용

   - 최대 넓이는 1200px, 최소 넓이는 800px, 가운데 정렬

<br>

### 선택 구현사항

1.  유효성 검사
- 제목, 내용 미입력시 alert 생성 후 input 초기화
   
    - 제목 미입력시

      ![제목유효성](./images/titleValid.gif)

      <br>

    - 내용 미입력시

      ![내용유효성](./images/bodyValid.gif)

<br>

2. Enter키로 '추가하기' 버튼 대체
- 제목, 내용 입력 후 '추가하기' 버튼 대신 Enter키로 리스트 추가 가능 

<br>

3. 컴포넌트 분리
- InputBox 컴포넌트 분리
```js
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

function App(){
  // ...생략
  return
  <InputBox
        title={title}
        inputTitle={inputTitle}
        onCheckEnter={onCheckEnter}
        body={body}
        inputBody={inputBody}
        addHandler={addHandler}
      />
  // ...생략
}
```

<br>

## 📝 KPT 회고

### Keep (유지하고 싶은 좋았던 점)

- 필수 기능을 모두 구현한 후에도 다양한 추가 기능을 고심한 것
- 코드와 사이트를 더 나은 방향으로 발전시키기 위해 수정을 거듭한 것

<br>

### Problem (아쉬웠던 점)

- 추가하고 싶었던 기능들을 모두 구현하지는 못한 점
- 코드를 간결하게 작성하지 못한 점
- 마주했던 다양한 트러블 슈팅 과정들을 기록하지 못한 점

<br>

### Try (Problem 해결 방법, 앞으로의 다짐 등)

- 기한 내에 구현하지 못했던 선택 사항들을 리팩토링 해보기
- 트러블 슈팅을 블로그에 보다 상세하게 작성하기
