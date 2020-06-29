<template>
  <v-layout column justify-center align-center>
    <v-col cols="12" sm="6">
      <p>name: {{ user.name }}</p>
      <p>email: {{ user.email }}</p>
      <v-img :src="user.img"></v-img>
    </v-col>
  </v-layout>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState({
      logined: state => state.logined,
      user: state => state.info
    })
  },
  beforeMount() {
    if (!this.logined) this.$router.push("/");
  }
};
</script>
