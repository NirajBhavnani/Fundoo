import { mapActions, mapGetters } from "vuex";

export default {
    name: "Todos",
    computed: mapGetters(["returnAllTodos"]),
    methods: {
        ...mapActions(["getAllTodos", "addTodos", "deleteTodos"]),
    },
    created(){
        this.getAllTodos();
    }
}