import NoteButtons from "../NoteButtons/NoteButtons.vue";

export default{
    name: 'TakeANote',
    data(){
        return{
            newNoteBoolean: true
        }
    },
    methods: {
        newNoteSwitch(){
            this.newNoteBoolean = !this.newNoteBoolean
        }
    },
    components: {
        NoteButtons
    }
}