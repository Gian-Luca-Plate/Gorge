<template>
  <div id="singUp">
    <img src="" class="logoForms" />
    <div style="font-size: 16px; font-weight: bold">Create an account</div>
    <br />
    <div class="FormsSing">
      <input
        type="text"
        v-model="display_name"
        class="inputForms"
        placeholder="maxMusterman"
      />
      <input
        type="email"
        v-model="email"
        class="inputForms"
        placeholder="example@domain.com"
      />
      <input
        type="password"
        v-model="password"
        class="inputForms"
        placeholder="ABc123@!"
      />
      <router-link to="/login" style="text-decoration: none">
        <button type="button" @click="createAcc" class="createButton">
          Create
        </button>
      </router-link>
    </div>
    <br />
    <svg
      width="327"
      height="20"
      viewBox="0 0 327 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="9.5" width="148.5" height="1" fill="#E6E6E6" />
      <path
        d="M160.895 15.1591C160.205 15.1591 159.601 14.995 159.08 14.6669C158.563 14.3388 158.159 13.8797 157.867 13.2898C157.579 12.6998 157.435 12.0104 157.435 11.2216C157.435 10.4261 157.579 9.73177 157.867 9.13849C158.159 8.54522 158.563 8.08452 159.08 7.75639C159.601 7.42827 160.205 7.2642 160.895 7.2642C161.584 7.2642 162.188 7.42827 162.705 7.75639C163.225 8.08452 163.629 8.54522 163.918 9.13849C164.209 9.73177 164.355 10.4261 164.355 11.2216C164.355 12.0104 164.209 12.6998 163.918 13.2898C163.629 13.8797 163.225 14.3388 162.705 14.6669C162.188 14.995 161.584 15.1591 160.895 15.1591ZM160.895 14.1051C161.419 14.1051 161.849 13.9709 162.188 13.7024C162.526 13.4339 162.776 13.081 162.938 12.6435C163.101 12.206 163.182 11.732 163.182 11.2216C163.182 10.7112 163.101 10.2356 162.938 9.79474C162.776 9.35393 162.526 8.99763 162.188 8.72585C161.849 8.45407 161.419 8.31818 160.895 8.31818C160.371 8.31818 159.94 8.45407 159.602 8.72585C159.264 8.99763 159.014 9.35393 158.852 9.79474C158.689 10.2356 158.608 10.7112 158.608 11.2216C158.608 11.732 158.689 12.206 158.852 12.6435C159.014 13.081 159.264 13.4339 159.602 13.7024C159.94 13.9709 160.371 14.1051 160.895 14.1051ZM166.146 15V7.36364H167.28V8.51705H167.359C167.498 8.1392 167.75 7.83262 168.115 7.5973C168.479 7.36198 168.89 7.24432 169.348 7.24432C169.434 7.24432 169.542 7.24597 169.671 7.24929C169.8 7.2526 169.898 7.25758 169.964 7.2642V8.45739C169.925 8.44744 169.833 8.43253 169.691 8.41264C169.552 8.38944 169.404 8.37784 169.248 8.37784C168.877 8.37784 168.546 8.45573 168.254 8.61151C167.966 8.76397 167.737 8.97609 167.568 9.24787C167.402 9.51634 167.319 9.82292 167.319 10.1676V15H166.146Z"
        fill="#828282"
      />
      <rect x="178.5" y="9.5" width="148.5" height="1" fill="#E6E6E6" />
    </svg>
    <br />
    <br />
    <router-link to="/login">I already have an Account</router-link>
  </div>
</template>
  
  <script>
  import { supabase } from "@/client/supabase";
  
  export default {
    data() {
      return {
        email: "",
        password: "",
        display_name:''
      };
    },
  
    methods: {
      
      async createAcc() {
    localStorage.setItem("AoutoLogin", "yes");
    try {
      const { data, error } = await supabase.auth.signUp(
        {
          email: this.email,
          password: this.password,
        options: {
      data: { full_name: this.display_name }, // Hier wird der Display-Name gesetzt
    },
    });
  
      if (error) throw error;
      console.log("Registrierung erfolgreich:", data);
    } catch (error) {
      console.log("Fehler bei der Registrierung:", error.message);
    }
  }
  
    },
  };
  </script>
  
  <style>
#singUp {
  display: flex;
  flex-direction: column;
  align-items: center; /* Zentriert den Inhalt horizontal */
  justify-content: center; /* Zentriert den Inhalt vertikal */
  height: 100vh; /* Stellt sicher, dass der Container die volle Höhe des Viewports einnimmt */
  position: relative; /* Ermöglicht die Positionierung mit top */
  bottom: 100px; /* Verschiebt den Container 30px nach unten */
}

.custom-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 327px;
  height: 40px;
  background-color: #eeeeee;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  padding: 0 10px;
  color: black;
}

.logo {
  width: 20px;
  height: 20px;
  margin-right: 8px;
  background: none;
}

.custom-button:hover {
  background-color: #dddddd;
}

.FormsSing {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logoForms {
  width: 162px;
  height: 170px;
}

.createButton {
  display: flex;
  justify-content: center; /* Zentriert den Text im Button horizontal */
  align-items: center; /* Zentriert den Text im Button vertikal */
  background-color: #2e5266;
  width: 327px;
  height: 40px;
  border-radius: 8px;
  border: none;
  color: white; /* Textfarbe im Button */
  font-size: 16px; /* Schriftgröße */
  text-align: center; /* Stellen Sie sicher, dass der Text im Button zentriert ist */
}

.inputForms {
  margin-bottom: 10px;
  width: 305px;
  height: 38px;
  border: 1px solid #2e5266; /* Rahmen */
  border-radius: 8px;
  background-color: #6e8898; /* Hellerer Hintergrund */
  color: #ffffff; /* Textfarbe */
  padding: 0 10px; /* Sorgt für etwas Abstand zwischen Text und Rand */
  text-align: center; /* Zentriert den Text im Input */
}

.inputForms::placeholder {
  text-align: center; /* Zentriert den Placeholder-Text */
  color: #cbd6cc; /* Optional: Passe die Farbe des Placeholders an */
  font-size: 14px;
  font-weight: initial;
}
</style>