import axios from "axios";

let notesService = {
  header: {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  },
  async addNote(currentData) {
    try {
      const res = await axios.post("/notes", currentData, this.header);
      console.log(res.data);
    } catch (error) {
        console.log("Add Note failed");
        console.log(error);
    }
  },
};

export default notesService;