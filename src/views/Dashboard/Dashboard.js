import DashboardHeader from "../../components/DashboardHeader/DashboardHeader.vue";
import SideBar from "../../components/SideBar/SideBar.vue";
import TakeANote from "../../components/TakeANote/TakeANote.vue";
import Notes from "../../components/Notes/Notes.vue";

export default{
    name: "Dashboard",
    components:{
        DashboardHeader,
        SideBar,
        TakeANote,
        Notes
    },
    beforeMount(){
        if(localStorage.getItem('token') == '' || localStorage.getItem('token') == null){
            this.$router.push('/login')
        }
    }
}