<template>
  <div>
    <input type="file" @change="handleFileChange" />
    <input type="text" v-model="NewPostText" />
    <router-link to="/home">
    <button @click="add">Submit</button>
  </router-link>
    <p v-if="uploadStatus">{{ uploadStatus }}</p>
  </div>
</template>

<script>

import { supabase } from "@/client/supabase";

export default {
  name: "Home",
  data() {
    return {
      NewPostText: "",
      file: null, // Datei-Variable korrekt definiert
      uploadStatus: "",
      UrlStorageImg :''
     
    };
  },
  methods: {
    // Datei auswählen
    handleFileChange(event) {
      this.file = event.target.files[0];
      console.log("Datei ausgewählt:", this.file);
      this.upload()
    },

    // Datei hochladen
    async upload() {
      if (!this.file) {
        alert('bitte wähle sie eine dartei aus ')
      }

      try {
        const filePath = `public/${Date.now()}-${this.file.name}`;
        console.log("Hochladen als:", filePath);

        const { data, error } = await supabase.storage
          .from("Picture")
          .upload(filePath, this.file);

        if (error) throw error;

        this.UrlStorageImg = 'https://ivzfzexvkzaztkbqvdrh.supabase.co/storage/v1/object/public/Picture/'+data.path
        this.uploadStatus = `✅ Datei erfolgreich hochgeladen: ${data.path}`;
        console.log("Upload erfolgreich:", this.UrlStorageImg);
      } catch (error) {
        this.uploadStatus = `❌ Fehler: ${error.message}`;
        console.log(error.message);
        console.error("Fehler beim Upload:", error);
      }
    },
    // Post hinzufügen
    async add() {
      try {
        const {
          data: { user },
          error: userError,
        } = await supabase.auth.getUser();
        

        if (userError) throw userError;

        if (!this.NewPostText) {
          this.errorMessage = "Der Post darf nicht leer sein!";
          return;
        }

        console.log("Post wird hinzugefügt:", this.NewPostText);
        
        // Post in die Datenbank speichern
        const { error } = await supabase.from("Post").insert([
          {
            UserName: localStorage.getItem('Benu'),
            PostText: this.NewPostText,
            PostImg:this.UrlStorageImg,
          },
        ]);

        if (error) throw error;

        this.successMessage = "✅ Post erfolgreich hinzugefügt!";
        this.NewPostText = ""; // Eingabefeld leeren
      } catch (error) {
        this.errorMessage = `❌ Fehler: ${error.message}`;
        console.log(error.message);
        console.error("Fehler beim Hinzufügen des Posts:", error);
      }
    },
  },
};
</script>

<style>
/* Optional: Stil für die Statusmeldungen */
p {
  font-size: 14px;
  margin-top: 5px;
}
</style>
