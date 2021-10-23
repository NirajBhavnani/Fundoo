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
  async archiveNote(currentData) {
    try {
      const res = await axios.patch(
        `/notes/archive/${currentData._id}`,
        {},
        this.header
      );
      console.log(res.data);
    } catch (error) {
      console.log("Note archive failed");
      console.log(error);
    }
  },
  async deleteNote(currentData) {
    try {
      const res = await axios.patch(
        `/notes/delete/${currentData._id}`,
        {},
        this.header
      );
      console.log(res.data);
    } catch (error) {
      console.log("Delete Note failed");
      console.log(error);
    }
  },
  async changeColor(currentData) {
    try {
      const res = await axios.patch(
        "/notes/update/" + currentData._id,
        currentData,
        this.header
      );
      console.log(res.data);
    } catch (error) {
      console.log("Color not updated");
      console.log(error);
    }
  },

  async updateNote(currentData){
    try {
      const res = await axios.patch("/notes/update/" + currentData._id, currentData, this.header);
      console.log(res.data);
    } catch (error) {
      console.log("Update Note failed");
      console.log(error);
    }
  }
};

export default notesService;
