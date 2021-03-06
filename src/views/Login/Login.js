import Textbox from "../../components/Textbox/Textbox.vue";
import useVuelidate from "@vuelidate/core";
import { required, email, minLength, helpers } from "@vuelidate/validators";
import { reactive, computed } from "vue";
import authService from "../../services/authService.js";

export default {
  name: "Login",
  components: {
    Textbox,
  },
  setup() {
    const state = reactive({
      emailLogin: "",
      passwordLogin: "",
    });
    const mustBeGmail = (value) => value.includes("gmail");

    const rules = computed(() => {
      return {
        emailLogin: {
          required: helpers.withMessage("Enter Email", required),
          email: helpers.withMessage("Please enter a valid email", email),
          mustBeGmail: helpers.withMessage(
            "Must be gmail address",
            mustBeGmail
          ),
        },
        passwordLogin: {
          required: helpers.withMessage("Enter Password", required),
          minLength: helpers.withMessage(
            "Password should be at least 8 characters long",
            minLength(8)
          ),
        },
      };
    });
    const v$ = useVuelidate(rules, state); // v$ is standard naming convention for vuelidate

    return {
      state,
      v$,
    };
  },
  methods: {
    signin() {
      this.v$.$validate();
      if (!this.v$.$error) {
        let currentData = {
          email: this.state.emailLogin,
          password: this.state.passwordLogin,
        };
        authService.signin(currentData).then((res) => {
          localStorage.setItem("token", res.data.accessToken);
          localStorage.setItem("profile", JSON.stringify([res.data.email, res.data.fName, res.data.lName]));
          this.$router.push("/dashboard");
        });
      } else {
        console.log("Error!!: Login failed because of invalid input");
      }
    },
  },
};
