<template>
  <section class="login">
    <div class="login-container">
      <form action class="box">
        <img class="logo" width="80" src="@/assets/Fundoo-logo.png" alt="Logo" />
        <h1 class="title text-center">
          Sign in
        </h1>
        <h2 class="subtitle text-center">
          Use your Fundoo Account
        </h2>
        <Textbox name="email" label="Email or phone" />
        <Textbox name="password" label="Enter your password" type="password" />
        <a href="#">
          Forgot email?
        </a>
        <div class="not-your-computer">
          Not your computer? Use Guest mode to sign in privately.
          <div>
            <a href="#">Learn more</a>
          </div>
        </div>
        <div class="next-box">
          <router-link to="/register">Create account</router-link>
          <button class="next">Next</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script type="module" src="./Login.js"></script>

<style lang="scss" scoped>
@import "./Login";
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,500&display=swap');
</style>