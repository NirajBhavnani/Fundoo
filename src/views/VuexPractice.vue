<template>
  <div class="vuex-practice">
    <Todos />
  </div>
</template>

<script>
// @ is an alias to /src
import Todos from '@/components/Todos/Todos.vue'

export default {
  name: 'VueX',
  components: {
    Todos
  }
}
</script>