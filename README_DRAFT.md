# Todo 앱 - Composition API + localStorage

Vue 3 기반 Todo 앱 프로젝트입니다.

이 프로젝트는 Todo 기능 구현을 바탕으로 Vue 3의 상태 관리와 컴포넌트 설계 방식을 직접 익히기 위한 학습 프로젝트입니다.
또한 AI와 함께 기능을 구현하고, 수정 흐름과 판단 과정을 문서로 정리하는 협업 방식도 함께 실습합니다.

## 프로젝트 목표

- Vue 3 Composition API 기반 Todo 앱을 직접 구현한다.
- 상태, 저장, UI 책임을 나누는 구조를 연습한다.
- 실제 기능 개선 과정을 사용자와 AI 협업 흐름으로 기록한다.
- 구현뿐 아니라 문서화와 회고까지 포함한 개발 workflow를 경험한다.

## 현재 구현 기능

- 할 일 추가
- 할 일 수정
- 할 일 삭제
- 전체 항목 삭제
- 완료 항목 일괄 삭제
- 전체 삭제 전 확인창 표시
- 완료/미완료 상태 토글
- 전체 / 진행중 / 완료 탭 필터링
- 완료 개수 / 남은 일 개수 표시
- 완료 항목 자동 하단 정렬
- `localStorage` 자동 저장 / 복원
- 한글 IME 입력 중 `Enter` 중복 등록 방지

## 구조 포인트

- `script setup` 기반 Composition API 구성
- `useTodos` composable로 상태와 핸들러 분리
- `useLocalStorage`로 저장 책임 분리
- 헤더 / 입력 / 목록 / 아이템 단위 컴포넌트 분리
- 전역 스타일과 컴포넌트 스타일 책임 분리

## 실행 방법

```bash
npm install
npm run dev
```

## 폴더 구조

```text
todo-app-composition/
├─ src/
│  ├─ App.vue
│  ├─ main.js
│  ├─ assets/
│  │  └─ main.css
│  ├─ components/
│  │  ├─ TodoHeader.vue          # 헤더 조합 컴포넌트
│  │  ├─ TodoSummary.vue         # 전체/완료/진행중 요약 카드
│  │  ├─ TodoTabs.vue            # 전체/진행중/완료 탭 전환
│  │  ├─ TodoInput.vue           # 할 일 입력 및 등록
│  │  ├─ TodoList.vue            # 목록 순회 및 빈 상태 처리
│  │  └─ TodoListItem.vue        # 개별 할 일 항목 UI와 상호작용
│  └─ hooks/
│     ├─ useLocalStorage.js      # localStorage 저장 / 복원 유틸
│     └─ useTodos.js             # 투두 상태, 계산값, 핸들러 관리
├─ PROJECT_HISTORY.md            # 작업 타임라인과 사용자/AI 협업 흐름
└─ TROUBLESHOOTING.md            # 구현 중 겪은 문제와 해결 기록
```

## 학습 포인트

프로젝트 목표가 "무엇을 위해 만드는가"에 가깝다면, 학습 포인트는 구현 과정에서 구체적으로 익히는 기술 요소를 정리한 항목이다.

- Composition API와 `script setup` 문법 익히기
- `props`, `emit`을 활용한 컴포넌트 통신 이해하기
- `ref`, `computed`를 이용한 반응형 상태 관리 익히기
- `localStorage`와 화면 상태를 분리해서 다루기
- 컴포넌트 분리와 composable(`useTodos`) 구조 연습하기
- 한글 IME 입력, 일괄 삭제 같은 실제 UX 이슈 다뤄보기

## 문서 안내

- 작업 타임라인과 사용자/AI 협업 흐름은 `PROJECT_HISTORY.md`
- 구현 중 겪은 문제와 해결 과정은 `TROUBLESHOOTING.md`

## 스크린샷 이미지
