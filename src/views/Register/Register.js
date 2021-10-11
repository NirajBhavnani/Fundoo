import Textbox from "../../components/Textbox/Textbox.vue";
import useVuelidate from "@vuelidate/core";
import {
  required,
  alpha,
  email,
  minLength,
  sameAs,
  helpers,
} from "@vuelidate/validators";
import { reactive, computed } from "vue";

export default {
  name: "Register",
  components: {
    Textbox,
  },
  setup() {
    const state = reactive({
      name: {
        firstName: "",
        lastName: "",
      },
      email: "",
      password: {
        password: "",
        confirmPassword: "",
      },
    });

    const mustBeGmail = (value) => value.includes("gmail");

    const rules = computed(() => {
      return {
        name: {
          firstName: {
            required: helpers.withMessage("Enter First name", required),
            alpha: helpers.withMessage(
              "First name should have only alphabet characters",
              alpha
            ),
            minLength: helpers.withMessage(
              "First name should have atleast 3 characters",
              minLength(3)
            ),
          },
          lastName: {
            required: helpers.withMessage("Enter Last name", required),
            alpha: helpers.withMessage(
              "Last name should have only alphabet characters",
              alpha
            ),
            minLength: helpers.withMessage(
              "Last name should have atleast 3 characters",
              minLength(3)
            ),
          },
        },
        email: {
          required: helpers.withMessage("Enter Email", required),
          email: helpers.withMessage("Please enter a valid email", email),
          mustBeGmail: helpers.withMessage(
            "Must be gmail address",
            mustBeGmail
          ),
        },
        password: {
          password: {
            required: helpers.withMessage("Enter Password", required),
            minLength: helpers.withMessage(
              "Password should be at least 8 characters long",
              minLength(8)
            ),
          },
          confirmPassword: {
            required: helpers.withMessage("Enter Password", required),
            sameAs: helpers.withMessage(
              "Password Mismatch, Try Again.",
              sameAs(state.password.password)
            ),
          },
        },
      };
    });

    const v$ = useVuelidate(rules, state); // v$ is standard naming convention for vuelidate

    return {
      state,
      v$,
    };
  },
  data() {
    return {
      type: "password",
    };
  },
  methods: {
    showPass() {
      if (this.type === "password") {
        this.type = "text";
      } else {
        this.type = "password";
      }
    },
    signup() {
      this.v$.$validate();
      console.log(this.v$);
      if (!this.v$.$error) {
        console.log("User registered successfully");
      } else {
        console.log("User registration failed");
      }
    },
  },
};
