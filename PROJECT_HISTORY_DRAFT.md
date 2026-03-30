# Todo App 작업 기록

이 문서는 `todo-app-composition` 프로젝트에서 사용자와 AI가 어떤 흐름으로 작업을 진행했는지 기록하는 타임라인 문서다.

기능 결과만 나열하기보다, 어떤 요청이 있었고 어떤 변경이 이어졌는지 협업 과정 중심으로 정리한다.

## 한눈에 보기

- Vue 3 Composition API 기반 Todo 앱 구현
- `localStorage` 연동 및 상태 흐름 정리
- 컴포넌트 분리와 `useTodos` composable 구조 적용
- 정렬, 일괄 삭제, 한글 IME 대응 같은 UX 개선 진행

## 작업 타임라인

### 초기 구현 단계

- 사용자: `todo-app-composition` 프로젝트를 생성하고 기본 Vue/Vite 구조를 준비함
- 사용자: `App.vue`, `TodoList.vue`, `TodoInput.vue`, `TodoHeader.vue`, `useLocalStorage.js`를 사용해 기본 Todo 앱 구조를 직접 구현함
- 사용자: `localStorage` 저장/복원 기능을 붙이려는 방향으로 코드를 확장함

### 상태 흐름과 구조 정리

- 사용자: 목록 수정 후 화면이 바로 갱신되지 않는 문제와 수정 UI 토글 구조를 점검함
- AI: 반응형 상태 흐름을 정리하고 `todos`는 원본 상태, `computedTodos`는 화면용 파생 데이터로 분리하는 방향을 제안함
- AI: 저장 책임은 `useLocalStorage.js`, 화면 상태 가공과 핸들러는 `useTodos.js`에 두는 구조로 정리함
- AI: `App.vue`에 모여 있던 투두 상태와 핸들러를 `useTodos.js`로 분리해 화면 조립 책임과 도메인 로직 책임을 나눔

### 컴포넌트와 UI 개선

- 사용자: 컴포넌트를 Composition API 형태로 통일하는 방향을 요청함
- AI: `TodoHeader.vue`를 `script setup` 기반 Composition API로 변환함
- AI: `TodoHeader.vue` 내부의 요약 카드와 탭 UI를 역할별 컴포넌트로 분리함
- AI: `TodoList.vue`에 있던 개별 item 마크업과 상호작용을 `TodoListItem.vue`로 분리함
- 사용자와 AI: 카드형 레이아웃, 탭, 입력 영역, 액션 버튼, 모바일 반응형 스타일을 함께 정리함
- AI: 화면 폭이 기대만큼 넓어지지 않던 원인을 `#app` 레이아웃 기준에서 찾아 수정함

### 기능 확장과 UX 보완

- 사용자: 완료된 항목이 목록 아래로 정렬되도록 요구사항을 추가함
- AI: `status(progress / done)` 기반으로 필터링, 정렬, 카운트 구조를 정리함
- AI: 한글 IME 입력 중 `Enter` 중복 등록 문제를 해결하기 위해 조합 입력 상태를 처리함
- 사용자: 할 일 전체 항목 삭제 기능을 구현함
- AI: 변경 파일을 검토하고 빌드 검증 후 한국어 커밋을 진행함
- 사용자: 전체 삭제 전에 확인창이 필요하다고 요청함
- AI: `deleteAllTodos()`에 `window.confirm`을 추가하고 빌드 검증 후 커밋함

### 문서화 작업

- 사용자: 일괄 삭제 기능을 어떤 문서에 어떤 문구로 정리할지 검토를 요청함
- AI: `README.md`와 `PROJECT_HISTORY.md`에 반영할 문구를 제안함
- 사용자: 제안 내용을 바탕으로 문서 반영을 요청함
- AI: 기능 소개와 작업 기록을 문서에 맞게 반영하고 문서 커밋을 진행함
- 사용자: 문서 간 중복, 과도한 분절, 역할 정리를 다시 검토 요청함
- AI: `README`, `PROJECT_HISTORY`, `TROUBLESHOOTING`의 역할을 재정의하고 개편 방향을 제안함

## 이번 작업에서 드러난 협업 방식

- 사용자는 요구사항과 학습 방향을 제시하고 직접 구현도 병행함
- AI는 코드 구조 정리, 검증, 커밋, 문서화 초안 제안을 맡음
- 기능 구현뿐 아니라 문서 역할과 기록 방식까지 함께 정리하는 협업 흐름이 형성됨

## 남은 과제

- 문서 역할에 맞게 기존 문서를 실제로 대체할지 결정
- `PROJECT_HISTORY.md`를 날짜 기준 타임라인으로 더 세분화할지 검토
- 이후 작업부터는 날짜와 작업자 표기를 더 명확히 남길지 기준 정하기
