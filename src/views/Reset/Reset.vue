<template>
  <section class="reset">
    <form action="" class="reset-container">
      <img class="logo" width="80" src="@/assets/Fundoo-logo.png" alt="Logo" />
      <h1 class="title text-center">Reset your password</h1>
      <h2 class="subtitle text-center">Enter your new password</h2>
      <Textbox name="password" label="Password" type="password" />
      <Textbox name="confirm" label="Confirm" type="password" />
      <div class="show-password">
        <input
          type="checkbox"
          name="show-check"
          id="show-check"
          class="show-check"
        />
        <label for="show-check">Show password</label>
      </div>
      <div class="next-box">
        <router-link to="#">Resend email?</router-link>
        <button class="next">Next</button>
      </div>
    </form>
  </section>
</template>

<script type="module" src="./Reset.js"></script>

<style lang="scss" scoped>
@import "./Reset";
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,500&display=swap");
</style>