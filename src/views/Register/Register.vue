<template>
  <section class="register">
    <div class="register-container">
      <form @submit.prevent="() => signup()" class="left box">
        <img
          class="logo"
          width="80"
          src="@/assets/Fundoo-logo.png"
          alt="Logo"
        />
        <h1 class="title">Create your Fundoo Account</h1>
        <Textbox
          name="firstName"
          label="First name"
          v-model:value="state.name.firstName"
          :error="
            v$.name.firstName.$error
              ? v$.name.firstName.$errors[0].$message
              : ''
          "
        />
        <Textbox
          name="lastName"
          label="Last name"
          v-model:value="state.name.lastName"
          :error="
            v$.name.lastName.$error ? v$.name.lastName.$errors[0].$message : ''
          "
        />
        <div class="email-container">
          <Textbox
            name="email"
            label="Username"
            type="email"
            v-model:value="state.email"
            :error="v$.email.$error ? v$.email.$errors[0].$message : ''"
          />
        </div>
        <div class="current-email">
          <a href="#"> Use my current email address instead </a>
        </div>
        <Textbox
          name="password"
          label="Password"
          :type="type"
          class="show-pass"
          v-model:value="state.password.password"
          :error="
            v$.password.password.$error
              ? v$.password.password.$errors[0].$message
              : ''
          "
        />
        <Textbox
          name="confirm"
          label="Confirm"
          :type="type"
          class="show-pass"
          v-model:value="state.password.confirmPassword"
          :error="
            v$.password.confirmPassword.$error
              ? v$.password.confirmPassword.$errors[0].$message
              : ''
          "
        />
        <div class="show-password">
          <input
            type="checkbox"
            name="show-check"
            id="show-check"
            class="show-check"
            @click="showPass()"
          />
          <label for="show-check">Show password</label>
        </div>
        <div class="sign-in-box">
          <router-link to="/login" class="sign-in">
            Sign in instead
          </router-link>
        </div>
        <div class="next-box">
          <button class="next" type="submit">Next</button>
        </div>
      </form>
      <div class="right">
        <img
          src="https://ssl.gstatic.com/accounts/signup/glif/account.svg"
          alt="Account"
        />
        <p class="one-account">One account. All of Fundoo working for you.</p>
      </div>
    </div>
  </section>
</template>

<script type="module" src="./Register.js"></script>

<style lang="scss" scoped>
@import "./Register";
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,500&display=swap");
</style>