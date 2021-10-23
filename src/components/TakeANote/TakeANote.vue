<template>
    <div class="take-a-note">
        <div v-if="newNoteBoolean" class="take-note" :style="{ backgroundColor: note.color}">
            <input type="text" placeholder="Take a note..." autofocus @click="newNoteBoolean = !newNoteBoolean;" :style="{ backgroundColor: note.color}">
            <div class="take-note-buttons">
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#444"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM17.99 9l-1.41-1.42-6.59 6.59-2.58-2.57-1.42 1.41 4 3.99z"/></svg>
                </button>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#444"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M7 16c.55 0 1 .45 1 1 0 1.1-.9 2-2 2-.17 0-.33-.02-.5-.05.31-.55.5-1.21.5-1.95 0-.55.45-1 1-1M18.67 3c-.26 0-.51.1-.71.29L9 12.25 11.75 15l8.96-8.96c.39-.39.39-1.02 0-1.41l-1.34-1.34c-.2-.2-.45-.29-.7-.29zM7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3z"/></svg>
                </button>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#444"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z"/></svg>
                </button>
            </div>
        </div>
        <div v-else class="create-note" :style="{ backgroundColor: note.color}">
            <div class="pair">
                <input type="text" placeholder="Title" v-model="note.title" autofocus :style="{ backgroundColor: note.color}">
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#444"><g><rect fill="none" height="24" width="24"/></g><g><path d="M14,4v5c0,1.12,0.37,2.16,1,3H9c0.65-0.86,1-1.9,1-3V4H14 M17,2H7C6.45,2,6,2.45,6,3c0,0.55,0.45,1,1,1c0,0,0,0,0,0l1,0v5 c0,1.66-1.34,3-3,3v2h5.97v7l1,1l1-1v-7H19v-2c0,0,0,0,0,0c-1.66,0-3-1.34-3-3V4l1,0c0,0,0,0,0,0c0.55,0,1-0.45,1-1 C18,2.45,17.55,2,17,2L17,2z"/></g></svg>
                </button>
            </div>
            <input type="text" placeholder="Take a note..." v-model="note.description" autofocus :style="{ backgroundColor: note.color}">
            <div class="pair">
                <NoteButtons :data="note" />
                <button class="close-button" @click="newNoteSwitch()">Close</button>
            </div>
        </div>
    </div>
</template>

<script type="module" src="./TakeANote.js"></script>

<style lang="scss" scoped>
@import "./TakeANote";
</style>