<template>
    <div class="notes">
        <div class="notes-list">
            <NotesCard v-for="items in returnAllNotes" :key="items._id" :data="items"/>
        </div>
    </div>
</template>

<script type="module" src="./Notes.js"></script>

<style lang="scss" scoped>
@import "./Notes";
</style>