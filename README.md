# Todo 앱 - Composition API + localStorage

Vue 3 기반 TodoList Application 1.1 앱입니다.

## 기술 스택

- Vue 3
- Vite
- JavaScript
- CSS

## 주요 기능

### v.1.0

- Options API로 작성
- 할 일 추가, 수정, 삭제, 완료/미완료 토글
- 전체 / 완료 탭 필터링

### v.1.1 (현재)

- Options API에서 Composition API로 리팩토링
- `script setup` 문법 적용
- `localStorage` 자동 저장 / 복원 기능 추가
- 완료 개수 / 남은 일 개수 표시
- 완료된 항목 하단 정렬
- 헤더, 리스트, 아이템 단위 컴포넌트 분리
- `useTodos` hook으로 상태 및 핸들러 로직 분리
- 전역 스타일과 컴포넌트 스타일 책임 분리
- 공통 utility 클래스를 활용한 CSS 리팩토링

## 추가될 기능

- 완료된 항목 전체 삭제(v1.1)
- pinia 사용해 상태관리 구조 리팩토링
- `localStorage` 기반 저장 구조를 DB + 백엔드 서버 방식으로 확장

## 실행 방법

```bash
npm install
npm run dev
```

## 폴더 구조

```text
todo-app-composition/
├─ src/
│  ├─ App.vue                    # 화면 조립과 주요 컴포넌트 연결
│  ├─ main.js                    # 앱 진입점
│  ├─ assets/
│  │  └─ main.css                # 전역 토큰, 공통 utility 스타일
│  ├─ components/
│  │  ├─ TodoHeader.vue          # 헤더 조합 컴포넌트
│  │  ├─ TodoSummary.vue         # 전체/완료/진행중 요약 카드
│  │  ├─ TodoTabs.vue            # 전체/완료 탭 전환
│  │  ├─ TodoInput.vue           # 할 일 입력 및 등록
│  │  ├─ TodoList.vue            # 목록 순회 및 빈 상태 처리
│  │  └─ TodoListItem.vue        # 개별 할 일 항목 UI와 상호작용
│  └─ hooks/
│     ├─ useLocalStorage.js      # localStorage 저장 / 복원 유틸
│     └─ useTodos.js             # 투두 상태, 계산값, 핸들러 관리
├─ public/                       # 정적 파일
├─ index.html                    # HTML 엔트리
├─ package.json                  # 프로젝트 설정 및 스크립트
├─ PROJECT_HISTORY.md            # 작업 기록 문서
└─ TROUBLESHOOTING.md            # 구현 중 겪은 문제와 해결 기록
```

## 학습 포인트

- Composition API의 `ref`, `computed` 사용
- `props`와 `emit`을 활용한 컴포넌트 통신
- 조건부 렌더링과 목록 상태 관리
- `script setup`, `defineProps`, `defineEmits`를 이용한 컴포넌트 작성 방식
- `localStorage`와 Vue 반응형 상태를 분리해서 관리하는 방법
- `computed`에서 화면용 데이터(필터링, 정렬, 카운트)를 가공하는 방법
- 부모 컴포넌트와 자식 컴포넌트의 역할을 나눠 상태 흐름을 설계하는 방법
- `useTodos` 같은 composable로 상태와 비즈니스 로직을 분리하는 방법
- 반복되는 UI 패턴을 utility 클래스로 정리하는 CSS 리팩토링 방식
- 큰 컴포넌트를 요약/탭/아이템 단위로 분리하는 컴포넌트 설계 방법

## 트러블슈팅

- 구현 과정에서 겪은 문제와 해결 기록은 [TROUBLESHOOTING.md](./TROUBLESHOOTING.md)에 정리했습니다.

## 스크린샷

스크린샷 이미지는 추후 추가 예정입니다.

예시:

```md
![Todo App 화면](./docs/screenshot.png)
```
