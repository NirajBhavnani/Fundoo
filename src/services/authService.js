import axios from "axios";

let authService = {
  async signup(currentData) {
    try {
      const res = await axios.post("/users/register", currentData);
      console.log(res.data);
      console.log("User registered successfully");
    } catch (error) {
      console.log(error);
      console.log("User registration failed");
    }
  },

  async signin(currentData) {
    try {
      const res = await axios.post("/users/login", currentData);
      console.log(res.data);
      console.log("User logged in successfully");
      return res;
    } catch (error) {
      console.log(error);
      console.log(
        "User login failed! Please try again with correct credentials"
      );
    }
  },

  async forgot(currentData) {
    try {
      const res = await axios.post("/users/forgot", currentData);
      console.log(res.data);
      console.log("Reset link sent successfully");
    } catch (error) {
      console.log(error);
      console.log("Reset process failed");
    }
  },

  async reset(currentData, resetToken) {
    try {
      console.log(resetToken);

      const res = await axios.patch(
        "/users/reset/" + resetToken,
        currentData
      );
      console.log(res.data);
      console.log("Password changed successfully");
    } catch (error) {
        console.log(error);
        console.log("Password unchanged");
    }
  },
};

export default authService;
