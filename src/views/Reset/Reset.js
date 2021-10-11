import Textbox from "../../components/Textbox/Textbox.vue";
import useVuelidate from "@vuelidate/core";
import {
  required,
  minLength,
  sameAs,
  helpers,
} from "@vuelidate/validators";
import { reactive, computed } from "vue";

export default {
  name: "Reset Password",
  components: {
    Textbox,
  },
  setup(){
    const state = reactive({
      passwordReset: {
        passwordReset: "",
        confirmPasswordReset: "",
      },
    });

    const rules = computed(()=>{
      return{
        passwordReset: {
          passwordReset: {
            required: helpers.withMessage("Enter Password", required),
            minLength: helpers.withMessage(
              "Password should be at least 8 characters long",
              minLength(8)
            ),
          },
          confirmPasswordReset: {
            required: helpers.withMessage("Enter Password", required),
            sameAs: helpers.withMessage(
              "Password Mismatch, Try Again.",
              sameAs(state.passwordReset.passwordReset)
            ),
          },
        },
      }
    })
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
    resetPass(){
      this.v$.$validate();
      console.log(this.v$);
      if (!this.v$.$error) {
        console.log("Password changed successfully");
      } else {
        console.log("Password unchanged");
      }
    }
  },
};
