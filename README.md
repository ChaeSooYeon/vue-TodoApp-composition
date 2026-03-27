# Todo 앱 - Composition API + localStorage

Vue 3 기반 TodoList Application 1.1 앱입니다.

## 기술 스택

- Vue 3
- Vite
- JavaScript
- CSS

## TodoList 1.0 => 1.1 리팩토링

- Options API → Composition API 변환
- script setup 문법 적용
- localStorage 자동 저장 / 복원 기능 추가
- 완료 개수 / 남은 일 개수 표시
- 완료 항목 전체 삭제 기능 추가

## 실행 방법

```bash
npm install
npm run dev
```

## 폴더 구조

- `App.vue`: 전체 상태 관리, 필터링, 이벤트 처리
- `TodoHeader.vue`: 제목 및 탭 전환
- `TodoInput.vue`: 할 일 입력 및 등록
- `TodoList.vue`: 목록 출력, 수정/삭제/완료 처리

## 학습 포인트

- Composition API의 `ref`, `computed` 사용
- `props`와 `emit`을 활용한 컴포넌트 통신
- 조건부 렌더링과 목록 상태 관리

## 스크린샷

스크린샷 이미지는 추후 추가 예정입니다.

예시:

```md
![Todo App 화면](./docs/screenshot.png)
```
