# Todo App Composition

Vue 3와 Vite로 만든 간단한 Todo 앱입니다. Composition API를 사용해 할 일 추가, 완료 처리, 수정, 삭제와 같은 기본 기능을 구현했습니다.

## 주요 기능

- 할 일 추가
- 완료 여부 변경
- `전체`, `완료` 탭 필터링
- 할 일 수정 및 삭제
- 목록이 비었을 때 안내 문구 표시

## 기술 스택

- Vue 3
- Vite
- JavaScript
- CSS

## 컴포넌트 구성

- `App.vue`: 전체 상태 관리, 필터링, 이벤트 처리
- `TodoHeader.vue`: 제목 및 탭 전환
- `TodoInput.vue`: 할 일 입력 및 등록
- `TodoList.vue`: 목록 출력, 수정/삭제/완료 처리

## 스크린샷

스크린샷 이미지는 추후 추가 예정입니다.

예시:

```md
![Todo App 화면](./docs/screenshot.png)
```

## 실행 방법

```bash
npm install
npm run dev
```

## 학습 포인트

- Composition API의 `ref`, `computed` 사용
- `props`와 `emit`을 활용한 컴포넌트 통신
- 조건부 렌더링과 목록 상태 관리
