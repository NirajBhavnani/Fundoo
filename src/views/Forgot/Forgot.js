import Textbox from "../../components/Textbox/Textbox.vue";
import useVuelidate from "@vuelidate/core";
import {
  required,
  email,
  helpers,
} from "@vuelidate/validators";
import { reactive, computed } from "vue";

export default {
  name: "Forgot Password",
  components: {
    Textbox,
  },
  setup(){
    const state = reactive({
      emailForgot: "",
    });
    const mustBeGmail = (value) => value.includes("gmail");

    const rules = computed(()=>{
      return{
        emailForgot:{
          required: helpers.withMessage("Enter Email", required),
          email: helpers.withMessage("Please enter a valid email", email),
          mustBeGmail: helpers.withMessage(
            "Must be gmail address",
            mustBeGmail
          ),
        },
      }
    })
    const v$ = useVuelidate(rules, state); // v$ is standard naming convention for vuelidate

    return {
      state,
      v$,
    };
  },
  methods:{
    forgotPass() {
      this.v$.$validate();
      console.log(this.v$);
      if (!this.v$.$error) {
        console.log("Reset link sent successfully");
      } else {
        console.log("Reset process failed");
      }
    },
  }
};
