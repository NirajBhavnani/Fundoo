<template>
  <section class="forgot">
    <form @submit.prevent="() => forgotPass()" class="forgot-container">
      <img class="logo" width="80" src="@/assets/Fundoo-logo.png" alt="Logo" />
      <h1 class="title text-center">Reset your password</h1>
      <h2 class="subtitle text-center">Enter your recovery email</h2>
      <Textbox
        name="email"
        label="Recovery Email"
        v-model:value="state.emailForgot"
        :error="v$.emailForgot.$error ? v$.emailForgot.$errors[0].$message : ''"
      />
      <div class="next-box">
        <button class="next" type="submit">Next</button>
      </div>
    </form>
  </section>
</template>

<script type="module" src="./Forgot.js"></script>

<style lang="scss" scoped>
@import "./Forgot";
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,500&display=swap");
</style>