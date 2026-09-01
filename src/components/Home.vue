<script>
import { supabase } from "@/client/supabase";
import navbar from "./navbar.vue";
import { ref } from "vue";

export default {
  components: { navbar },
  directives: {
    viewport: {
      mounted(el, binding) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            // Reagiert dynamisch: true wenn im Viewport, false wenn außerhalb
            binding.value(entry.isIntersecting);
          },
          { threshold: 0.1 }
        );
        observer.observe(el);
        el._observer = observer;
      },
      unmounted(el) {
        if (el._observer) el._observer.disconnect();
      }
    },
  },
  data() {
    return {
      Posts: [],
      visibleMedia: {},
      playing: ref(false),
      videoRef: ref(null),
    };
  },
  mounted() {
    setTimeout(() => {
      this.fetchTasks();
    }, 300);
  },
  methods: {
    isVideo(url) {
      if (!url) return false;
      const videoExtensions = [".mp4", ".webm", ".mov", ".ogg", ".m4v"];
      return videoExtensions.some((ext) => url.toLowerCase().includes(ext));
    },
    setVisible(id, isIntersecting) {
      this.visibleMedia[id] = isIntersecting;
    },
    async fetchTasks() {
      try {
        const {
          data: { user },
          error,
        } = await supabase.auth.getUser();
        if (error) throw error;

        if (!user || !user.id) {
          console.error("Benutzer nicht angemeldet.");
          this.errorMessage = "Benutzer nicht angemeldet.";
          return;
        }

        const { data } = await supabase.from("Post").select("*");

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
      <div v-for="y in x" :key="y.id || y">
        <br />
        <div style="font-weight: 600;"> {{ y.UserName }}</div>
        
        <br />

        <div 
          v-viewport="(isIntersecting) => setVisible(y.id || y.PostImg, isIntersecting)" 
          class="media-container"
        >
          <template v-if="visibleMedia[y.id || y.PostImg]">
            <img v-if="!isVideo(y.PostImg)" :src="y.PostImg" alt="" />

            <video
              v-else
              controls
              autoplay
              muted
              :src="y.PostImg"
              @click="console.log('test')"
            ></video>
          </template>
        </div>

        <br />
        {{ y.PostText }}
      </div>
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </div>
</template>

<style>
img {
  max-width: 100%;
  max-height: 300px;
}
video {
  max-width: 100%;
  max-height: 300px;
}
.media-container {
  min-height: 200px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>