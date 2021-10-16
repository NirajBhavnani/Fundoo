export default{
    name: 'TakeANote',
    data(){
        return{
            newNoteBoolean: true
        }
    },
    methods: {
        newNoteSwitch(){
            this.newNoteBoolean = !this.newNoteBoolean
        }
    },
}