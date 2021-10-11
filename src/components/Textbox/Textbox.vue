<template>
  <div class="text-box">
    <div class="text-box-container" :style="{ '--theme': color }">
      <input
        :type="type"
        :id="name"
        :name="name"
        :placeholder="placeholder"
        v-model="value"
        @input="$emit('update:value', value)"
        :class="[error ? 'error' : '']"
      />
      <label
        :for="name"
        v-if="label"
        v-html="label"
        :class="[error ? 'error' : '']"
      ></label>
    </div>
    <small class="error-text" v-html="error ? error : '&nbsp;'"></small>
  </div>
</template>

<script type="module" src="./Textbox.js"></script>

<style lang="scss" scoped>
@import "./Textbox";
</style>