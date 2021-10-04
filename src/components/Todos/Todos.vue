<template>
  <div class="Todos">
    <h1>Add Todos</h1>
    <input type="text" v-model="title" class="inputText" />
    <button @click="addTodos(title)" class="addBtn">
      <i class="fas fa-plus"></i>
    </button>
    <h2>Todos</h2>
    <ul>
      <!-- Integrating getters -->
      <li class="deleteTodos" v-for="items in returnAllTodos" :key="items.id">
        <span class="title"> {{ items.title }} </span>
        <button @click="deleteTodos(items.id)" class="delBtn">
          <i class="fas fa-trash-alt icon trash-icon"></i>
        </button>
      </li>
    </ul>
  </div>
</template>

<script type="module" src="./Todos.js"></script>

<style lang="scss" scoped>
@import "./Todos";
@import "https://use.fontawesome.com/releases/v5.8.1/css/all.css";
</style>