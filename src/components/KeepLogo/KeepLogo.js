import { mapActions } from "vuex";

export default {
  name: "KeepLogo",
  methods: {
    ...mapActions(["sideNavSwitch"]),
  },
};
