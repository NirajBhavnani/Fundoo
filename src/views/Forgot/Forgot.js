import Textbox from "../../components/Textbox/Textbox.vue";
import useVuelidate from "@vuelidate/core";
import {
  required,
  email,
  helpers,
} from "@vuelidate/validators";
import { reactive, computed } from "vue";
import authService from "../../services/authService.js";


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
        if (!this.v$.$error) {
          let currentData = {
            email: this.state.emailForgot
        }
         authService.forgot(currentData);
        } else {
        console.log("Error!!: Process failed because of invalid input");
        }
    },
  }
};
