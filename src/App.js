/*
싱글페이지 애플리케이션 (업데이트 방식)
재사용 기반
html, css, javascript 개발을 도와주는 라이브러리
========================================================================

nodejs LTS 설치
인스톨시 체크박스 체크
PowerShell 관리자 권한으로 열고 Set-ExecutionPolicy Unrestricted 입력 후 Y
node -v 버전확인
npm -v 버전확인
C:\Users\Administrator\AppData\Roaming\npm 폴더 확인 (폴더 없으면 생성)

PowerShell에 프로젝트 생성할 경로에서 
npx create-react-app 프로젝트명

vsc로 열고
ctrl + shift + ` 눌러서 터미널 열고
npm start
안되면 vsc의 powershell에서 $env:Path += ";C:\Program Files\nodejs\" 입력

========================================================================

node_modules : 라이브러리 코드 보관함
public : static 파일 모아놓는 곳 (이미지나 html 등)
src : 코드짜는 곳
App.js : 프로젝트 시작점
index.js : App.js를 index.html 에서 실행
package.json : 프로젝트 정보
*/

import logo from './logo.svg';
import './App.css';       // CSS 경로를 입력하면 잘 추가됨
import { useState } from 'react';

// JSX
// [1] class -> className (자바스크립트 코드와 곂쳐서 변경)
// [2] JSX : 변수는 중괄호로 이용!! (데이터바인딩 == 서버에서 받은 데이터를 화면에 넣기)
// [3] - 기호는 뺄셈이기 때문에 대문자로 변경 (font-size ==> fontSize)
// [4] 스타일은 object 자료형 형식으로 입력

function App() {
  // 여기에 코딩, return 안에 html 작성
  let 서버에서받은값 = '블로그임'       // [2] JSX : 변수는 중괄호로 이용!! (데이터바인딩 == 서버에서 받은 데이터를 화면에 넣기)
  // 값을 보관할 때 변수 또는 state 를 사용
  let [getValue, setValue] = useState('남자 코트 추천')
  // state 사용 이유 : 변수 값이 바뀌면 자동으로 화면에도 반영하기 위해서 (데이터바인딩)
  // 변수는 변경이 되어도 html 화면에 재랜더링이 되지 않음...

  // 따라서, 자주변경될것 같은 html은 useState로 저장하고
  // 자주변경되지않을 것 같은 html은 변수에 저장
  let [getTitle, setTitle] = useState(['남성 코트 추천', '여성 코트 추천', '신촌 맛집 추천'])
  let [getDateTime, setDateTime] = useState(['2024-03-29', '2024-03-27', '2024-03-26'])
  let [getSecondScore, setSecondScore] = useState(0)
  let [getScore, setScore] = useState([0, 0, 0])

  function 함수1(){
    // getScore[0] 을 +1 시키겠다
    setScore((prev) => {
      const updateSources = [...prev]
      updateSources[0] += 1
      return updateSources
    })
  }

  return (
    <div className="App">
      <div className="black-nav">
        <img src={logo} alt="..." width="100px" height="100px"/>
        <h4 id={서버에서받은값} style={{color:'yellowgreen', fontSize:'20px'}}>{서버에서받은값}</h4>
      </div>

      <div className="list">
        <h4>{getValue} <span onClick={함수1}>👍</span> {getScore[0]} </h4>
        <p>{getDateTime[0]}</p>
      </div>
      <div className="list">
        <h4>{getTitle[1]} <span onClick={()=>{setSecondScore(getSecondScore + 1)}}>👍</span> {getSecondScore} </h4>
        <p>{getDateTime[1]}</p>
      </div>
      <div className="list">
        <h4>{getTitle[2]} <span>👍</span> {getScore[2]} </h4>
        <p>{getDateTime[2]}</p>
      </div>
    </div>
  );
}

export default App;

