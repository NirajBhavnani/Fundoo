import NotesCard from "../NotesCard/NotesCard.vue";
import { mapGetters, mapActions } from 'vuex';

export default{
    name: "Notes",
    components:{
        NotesCard
    },
    computed: mapGetters(["returnAllNotes", "returnAllArchives", "returnAllTrash"]),
    methods: {
        ...mapActions(["getAllNotes", "getAllArchives", "getAllTrash"]),
    },
    created(){
        this.getAllNotes();
        this.getAllArchives();
        this.getAllTrash();
    },
    props:{
        page:{
            type: String,
        }
    }
}