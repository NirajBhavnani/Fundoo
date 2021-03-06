import notesService from "../../services/notesService.js";
import { mapActions } from 'vuex';

export default {
  name: "NoteButtons",
  props: {
    data: {
      type: Object,
    },
  },
  data() {
    return {
      notesData: this.data,
      noteColors: false,
    };
  },
  watch: {
    data: function(newVal) {
      this.notesData = newVal;
    },
  },
  methods:{
    ...mapActions(["getAllNotes", "getAllArchives", "getAllTrash"]),
    async refreshContent(){
      await this.getAllNotes();
      await this.getAllArchives();
      await this.getAllTrash();
    },
    async archiveNote(){
      await notesService.archiveNote(this.notesData);
      this.refreshContent();
    },
    async deleteNote(){
      await notesService.deleteNote(this.notesData);
      this.refreshContent();
    },
    async changeColor(color){
      this.notesData.color = color;
      await notesService.changeColor(this.notesData);
      this.refreshContent();
    }
  }
};
