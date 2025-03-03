<script>
import { supabase } from "@/client/supabase";
import navbar from './navbar.vue';

export default {
  components: { navbar },
  data() {
    return {
      Posts: [],
    };
  },
  mounted() {
    setTimeout(() => {
      this.fetchTasks();
    }, 300);
  },
  methods: {
    async fetchTasks() {
      // holt die aufgaben
      try {
        const {
          data: { user },
          error,
        } = await supabase.auth.getUser();
        if (error) throw error;

        if (!user || !user.id) {
          // check ob benutzer angemeldt ist
          console.error("Benutzer nicht angemeldet.");
          this.errorMessage = "Benutzer nicht angemeldet.";
          return;
        }

        const { data } = await supabase // daten werden vom server geladen
          .from("Post")
          .select("*");

        this.Posts.push(data);
        console.log(this.Posts);
      } catch (error) {
        this.errorMessage =
          "Fehler beim Abrufen der Aufgaben: " + error.message;
        console.error("Fehler beim Abrufen der Aufgaben:", error);
      }
    },
  },
};
</script>
<template>
  <div id="home">
    <navbar></navbar>
    <div v-for="x in Posts" :key="x">
      <div v-for="y in x" :key="y">
        {{ y.UserName }}
        <br>
        {{ y.ui }}
        {{ y.PostText }}
        <br />
        <img :src="y.PostImg" alt="" />
      </div>
    </div>
  </div>
</template>

<style>
img {
  max-width: 200px;
}

.unten {
  position: fixed;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
  background: #2e5266;
  border-radius: 8px;
}
.unten svg {
  background-color: #2e5266;
  border-radius: 8px;
  padding: 10px;
}
</style>