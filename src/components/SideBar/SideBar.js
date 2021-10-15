import { mapGetters, mapActions } from 'vuex';

export default {
    name: "SideBar",
    computed: mapGetters(["returnSideNav"]),
    methods: {
        ...mapActions(["sideNavSwitch"])
    }
  };