import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

/*

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

========================================================================

싱글페이지 애플리케이션 (업데이트 방식)
재사용 기반
html, css, javascript 개발을 도와주는 라이브러리

*/