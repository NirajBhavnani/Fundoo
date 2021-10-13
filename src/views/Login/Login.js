import Textbox from "../../components/Textbox/Textbox.vue";
import useVuelidate from "@vuelidate/core";
import { required, email, minLength, helpers } from "@vuelidate/validators";
import { reactive, computed } from "vue";
import axios from "axios";

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
    async signin() {
      try {
        this.v$.$validate();
        console.log(this.v$);
        if (!this.v$.$error) {
          let currentData = {
            email: this.state.emailLogin,
            password: this.state.passwordLogin,
          };
          const res = await axios.post("/users/login", currentData);
          localStorage.setItem("token", res.data.accessToken);
          // this.$router.push({ name: "Dashboard" });
          console.log(res.data);
          console.log("User logged in successfully");
        } else {
          console.log("User login failed");
        }
      } catch (error) {
        console.log(error);
        console.log("Login failed");
      }
    },
  },
};
