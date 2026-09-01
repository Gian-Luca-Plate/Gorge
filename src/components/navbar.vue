<template>
  <div class="navbar-container">
    <nav class="navigation">
      <router-link to="/home" class="nav-item" active-class="active">
        <div class="icon-wrapper" :class="{ 'is-ready': isLoaded }">
          <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px">
            <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/>
          </svg>
        </div>
      </router-link>

      <router-link to="/addPost" class="nav-item" active-class="active">
        <div class="icon-wrapper" :class="{ 'is-ready': isLoaded }">
          <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px">
            <path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
          </svg>
        </div>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "AnimatedNavbar",
  data() {
    return {
      isLoaded: false
    };
  },
  mounted() {
    // Kurzer Delay (100ms) nach dem Laden der Komponente,
    // damit die Pop-Up Animation smooth abgespielt wird
    setTimeout(() => {
      this.isLoaded = true;
    }, 100);
  }
};
</script>

<style scoped>
.navbar-container {
  position: fixed;
  bottom: 20px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  z-index: 1000;
  pointer-events: none;
}

.navigation {
  pointer-events: auto;
  position: relative;
  display: flex;
  width: 220px;
  height: 55px;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  background-color: var(--primary-bg, #1e293b);
  padding: 4px;
}

.nav-item {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  z-index: 2;
  color: #a0a0a0;
  transition: all 0.3s ease;
}

.icon-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  
  /* Elastische Transition für sanftes Einrasten und flüssige Wechsel */
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), 
              background-color 0.3s ease,
              box-shadow 0.3s ease;
}

.icon-wrapper svg {
  fill: #e8eaed;
  transition: fill 0.3s ease;
}

/* Hover bei inaktiven Tabs */
.nav-item:not(.active):hover .icon-wrapper {
  transform: translateY(-6px) scale(1.05);
  background: rgba(255, 255, 255, 0.08);
}

.nav-item.active {
  color: #ffffff;
  background-color: #1e293b;
  width: 100%;
  border-radius: 16px;
}

/* Startposition beim Laden: Bleibt flach, bis 'is-ready' aktiv wird */
.nav-item.active .icon-wrapper {
  transform: translateY(0) scale(1);
}

/* Sobald die Seite geladen ist (nach 100ms Delay), fährt der aktive Button hoch */
.nav-item.active .icon-wrapper.is-ready {
  transform: translateY(-14px) scale(1.12);
  background: #ffffff;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.35);
}

.nav-item.active .icon-wrapper svg {
  fill: #1e293b;
}
</style>