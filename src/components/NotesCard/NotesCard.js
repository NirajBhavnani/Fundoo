import NoteButtons from "../NoteButtons/NoteButtons.vue";

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
    };
  },
  watch: {
    data: function(newVal) {
      this.notesData = newVal;
    },
  },
};
