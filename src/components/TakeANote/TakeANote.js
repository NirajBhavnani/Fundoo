import NoteButtons from "../NoteButtons/NoteButtons.vue";
import notesService from "../../services/notesService.js";
import { mapActions } from 'vuex';

export default{
    name: 'TakeANote',
    data(){
        return{
            newNoteBoolean: true,
            note: {
                title: '',
                description: '',
                color: '#fff'
            }
        }
    },
    methods: {
        ...mapActions(["updateAllNotes"]),
        newNoteSwitch(){
            let newNote = {
                title: this.note.title,
                description: this.note.description,
                color: this.note.color
            };
            if(newNote.title.length > 3 && newNote.description.length > 3){
                notesService.addNote(newNote);
                this.updateAllNotes(newNote);
            } else{
                console.log("Title and description must have minimum 3 characters");
            }
            this.note.title = '';
            this.note.description = '';
            this.note.color = '#ffffff';
            this.newNoteBoolean = !this.newNoteBoolean;
        }
    },
    components: {
        NoteButtons
    }
}