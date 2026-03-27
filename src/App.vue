<!-- 
  컴포넌트가 여러개로 자신의 기능을 수행하도록 구조화
  관리자  : App.vue 
  1. App컴포넌트는 methods옵션속성으로 addTodo() 함수 정의
     매개변수로 할일을 받는 기능 
  2. 입력받은 텍스트를 사용해서 할 일 목록을 구성할 객체데이터 생성 
     할일 목록 객체는 id(고유값), 사용자가 입력한 할일(msg) 
     할일 완료 여부(completed)     {id:1, msg:'운동하기',completed:false}
  3. 할일 목록 데이터를 관리하기 위한 자료구조 정의 todo : []   
  4. 할 일 목록 객체 데이터를 todo데이터에 추가하는 기능 . todo [] => push()
  5. methods 옵션 속성으로 정의한 addTodo() 함수
     v-on 디렉티브를 사용하여 TodoInput 컴포넌트에 전달하고
     전달한 이벤트는 TodoInput 컴포넌트에서 $emit()함수로 
     실행되게 한다.
---------------------------------------
   할일 목록 필터링
   1. 현재 목록 상태를 관리할 수 있는 데이터 정의 : current 
      '전체' 가 기본값이서 current 데이터의 초깃값은 'all' 정의
   2. current 데이터의 값에 따라 출력할 데이터를 변경하기 위해
      App.vue 에 computed 옵션 속성에서 할일 목록을 저장하는
      todo데이터가 배열이므로 배열의 표준 내장객체 메서드인 filter()
      사용하여 current값이 all 이면 필터링 하지 않고 그래도
      todo 데이터를 보여주고
      completed 라면 completed 속성의 값이 true인 것만 필터링해서 데이터를 보여준다.   

-->
<script setup>
import TodoHeader from './components/TodoHeader.vue';
import TodoList from './components/TodoList.vue';
import TodoInput from './components/TodoInput.vue';
import { ref, computed } from 'vue';
const todos = ref([]);
const current = ref('all');

const computedTodos = computed(() => {
  return current.value === 'all'
    ? todos.value
    : todos.value.filter((v) => v.completed);
});

const updateTab = (tab) => {
  current.value = tab;
};

const addTodo = (inputMsg) => {
  todos.value.push({
    id: new Date().getTime(),
    msg: inputMsg,
    completed: false,
    editable: false,
  });
};

const deleteTodo = (id) => {
  todos.value = todos.value.filter((v) => v.id !== id);
};

const updateTodo = (id) => {
  todos.value = todos.value.map((v) =>
    v.id === id ? { ...v, completed: !v.completed } : v,
  );
};

const toggleEditTodo = (id) => {
  todos.value = todos.value.map((v) => {
    return v.id === id ? { ...v, editable: !v.editable } : v;
  });
};

const editTodo = (item, newMsg) => {
  //TODO
  // 1. item의 editable값을 toggle 한다
  // 2. editable이 true면 (1)input 폼을 보여주고 value에 msg를 넣어준다. (2) 수정아이콘이 완료 아이콘으로 바뀐다
  // 3. 완료 버튼을 누르면 item의 msg를 새로 입력한 값으로 변경한다
  // 4. editable을 false로 바꾼다.
  todos.value = todos.value.map((v) => {
    return v.id === item.id ? { ...v, msg: newMsg } : v;
  });
  toggleEditTodo(item.id);
};
</script>
<template>
  <div class="todo">
    <TodoHeader :current @update-tab="updateTab" />
    <TodoList
      :todos="computedTodos"
      @delete-todo="deleteTodo"
      @update-todo="updateTodo"
      @toggle-edit-todo="toggleEditTodo"
      @edit-todo="editTodo"
    />
    <TodoInput @add-todo="addTodo" />
  </div>
</template>
