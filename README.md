## 과제 목표

- Vue 컴포넌트 구현
  - 컴포넌트로 나눠서 웹 앱을 관리하길 원한다.
- 컴포넌트 별 상태 관리
  - 할 일 목록 Li 컴포넌트에서 `done` 상태를 관리하길 원한다.
- 컴포넌트 간 데이터 전달
  - 추가 컴포넌트에서 추가한 내용이 목록 컴포넌트에서 보여지길 원한다.
- 동적 컴포넌트 적용
  - 할 일 목록 Li 컴포넌트에서 완료하기를 누르면 완료하기 버튼이 없어진다.
- 다이나믹 스타일 적용
  - 할 일 목록 Li 컴포넌트에서 `done` 상태에 따라 스타일이 변경된다.

## 해결한 문제

- vetur plugin path 문제

  - `vetur` 플러그인이 /rootDir/\*\* 에 있는 폴더를 인식하지 못하는 문제가 발생
  - package.json에 parserOptions : {requireConfigFile": false} 추가하여 해결

- tailwindcss 적용
  - pnpm install -D tailwindcss postcss autoprefixer
  - npx tailwindcss init
  - tailwind.config.js 파일에 적절한 옵션 넣기
