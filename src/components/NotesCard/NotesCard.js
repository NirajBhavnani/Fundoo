import NoteButtons from "../NoteButtons/NoteButtons.vue";
import notesService from "../../services/notesService.js";

export default {
  name: "NotesCard",
  components: {
    NoteButtons,
  },
  props: {
    data: {
      type: Object,
    },
  },
  data() {
    return {
      notesData: this.data,
      updateNote: false,
    };
  },
  watch: {
    data: function(newVal) {
      this.notesData = newVal;
    },
  },
  methods: {
    async updateNoteFunc() {
      await notesService.updateNote(this.notesData);

      this.updateNote = false;
    },
  },
};
