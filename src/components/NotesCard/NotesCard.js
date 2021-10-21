import NoteButtons from "../NoteButtons/NoteButtons.vue";

export default{
    name: "NotesCard",
    components:{
        NoteButtons
    },
    data(){
        return{
            notesData: this.data
        }
    },
    props:{
        data: {
            type: Object
        }
    }
}