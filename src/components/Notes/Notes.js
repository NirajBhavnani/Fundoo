import NotesCard from "../NotesCard/NotesCard.vue";
import { mapGetters, mapActions } from 'vuex';

export default{
    name: "Notes",
    components:{
        NotesCard
    },
    computed: mapGetters(["returnAllNotes"]),
    methods: {
        ...mapActions(["getAllNotes"]),
    },
    created(){
        this.getAllNotes();
    }
}