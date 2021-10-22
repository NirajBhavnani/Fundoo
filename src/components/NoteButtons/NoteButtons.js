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
    };
  },
  watch: {
    data: function(newVal) {
      this.notesData = newVal;
    },
  },
};
