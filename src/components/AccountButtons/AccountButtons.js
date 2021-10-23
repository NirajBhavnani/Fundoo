export default {
  name: "AccountButtons",
  data() {
    return {
      profileMenu: false,
      user: {
        email: "",
        firstName: "",
        lastName: "",
      },
    };
  },
  methods: {
    profile() {
      if (this.profileMenu) {
        this.profileMenu = false;
      } else {
        var userArr = JSON.parse(localStorage.getItem("profile"));
        this.user.email = userArr[0];
        this.user.firstName = userArr[1];
        this.user.lastName = userArr[2];
        this.profileMenu = true;
      }
    },
    logout() {
      localStorage.removeItem("token");
      localStorage.removeItem("profile");
      this.$router.push("/login");
    },
  },
};
