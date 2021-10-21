import NotesCard from "../NotesCard/NotesCard.vue";
import { mapGetters, mapActions } from 'vuex';

export default{
    name: "Notes",
    components:{
        NotesCard
    },
    computed: mapGetters(["returnAllNotes", "returnAllArchives"]),
    methods: {
        ...mapActions(["getAllNotes", "getAllArchives"]),
    },
    created(){
        this.getAllNotes();
        this.getAllArchives();
    },
    props:{
        page:{
            type: String,
        }
    }
}