<template>
  <v-layout column align-center>
    <v-col cols="12" sm="6">
      <v-form>
        <v-text-field
          :disabled="loading"
          v-model="login"
          label="Login"
          required
        ></v-text-field>
        <v-text-field
          v-model="password"
          label="Password"
          full-width
          required
          :disabled="loading"
        ></v-text-field>

        <v-btn
          :loading="loading"
          :disabled="loading"
          color="success"
          class="mt-4"
          @click="LoginUser"
        >
          Login
        </v-btn>
      </v-form>
    </v-col>
  </v-layout>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data: () => ({
    password: "",
    login: "",
    loading: false
  }),
  methods: {
    ...mapActions({
      API_LOGIN: "API_LOGIN"
    }),
    LoginUser() {
      this.loading = true;
      this.API_LOGIN({ password: this.password, login: this.login })
        .then(() => {
          this.$router.push("/user");
        })
        .finally(() => {
          this.loaging = false;
        });
    }
  }
};
</script>
