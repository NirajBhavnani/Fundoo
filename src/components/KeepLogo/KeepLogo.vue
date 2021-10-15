<template>
    <div class="keep-logo">
        <button @click="sideNavSwitch()">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 15h16v-2H4v2zm0 4h16v-2H4v2zm0-8h16V9H4v2zm0-6v2h16V5H4z"/></svg>
        </button>
        <a href="#">
            <img src="@/assets/Keep-logo.png" alt="">
            <span>Keep</span>
        </a>
    </div>
</template>

<script type='module' src='./KeepLogo.js'></script>

<style lang="scss" scoped>
@import "./KeepLogo";
</style>