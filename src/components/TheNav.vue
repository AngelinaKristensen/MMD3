<!-- <script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

const menuOpen = ref(false);
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

</script>

<template>
 <nav>
    <ul>
        <li><RouterLink to="/">Forside</RouterLink></li>
        <li><RouterLink to="/VoresOel">Vores Øl</RouterLink></li>
        <li>
            <button>Bryghus</button>
            <div>
                <RouterLink to="/Bryggerstuen">Bryggerstuen</RouterLink>
                <RouterLink to="/Brygproces">Brygproces</RouterLink>
                <RouterLink to="/SmagsGuide">Smags Guide</RouterLink>
                <RouterLink to="/Rundvisning">Rundvisning</RouterLink>
                <RouterLink to="/Vaerdier">Værdier</RouterLink>
            </div>
        </li>
        <li><RouterLink to="/Begivenheder">Begivenheder</RouterLink></li>
        <li><RouterLink to="/Kontakt">Kontakt</RouterLink></li>
        <li><RouterLink to="/Galleri">Galleri</RouterLink></li>
    </ul>
 </nav>
</template>

<style scoped>
nav ul{
    background-color: grey;
    display: flex;
    justify-content: center;
    padding: 2rem;
    gap: 4rem;
    margin: 0;
    max-width: 100%;
}
nav li{
    list-style: none;
    font-family: "Exo", sans-serif;
    font-weight: 600;
}
nav a{
    text-decoration: none;
    text-transform: uppercase;
    color: white;
    position: relative;
}


</style> -->


<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

const menuOpen = ref(false);
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};
</script>

<template>
  <nav>
    <div class="logo">
      <RouterLink to="/">Logo</RouterLink>
    </div>
    <!-- Toggle Button (hamburger for mobile) -->
    <div class="menu-icon" @click="toggleMenu">☰</div>
    
    <!-- Navigation links -->
    <ul :class="{ 'active': menuOpen }">
      <li><RouterLink to="/">Forside</RouterLink></li>
      <li><RouterLink to="/VoresOel">Vores Øl</RouterLink></li>
      <li>
        <button>Bryghus</button>
        <div class="submenu">
          <RouterLink to="/Bryggerstuen">Bryggerstuen</RouterLink>
          <RouterLink to="/Brygproces">Brygproces</RouterLink>
          <RouterLink to="/SmagsGuide">Smags Guide</RouterLink>
          <RouterLink to="/Rundvisning">Rundvisning</RouterLink>
          <RouterLink to="/Vaerdier">Værdier</RouterLink>
        </div>
      </li>
      <li><RouterLink to="/Begivenheder">Begivenheder</RouterLink></li>
      <li><RouterLink to="/Kontakt">Kontakt</RouterLink></li>
      <li><RouterLink to="/Galleri">Galleri</RouterLink></li>
    </ul>
  </nav>
</template>

<style scoped>
/* Basic Styles */
nav {
  background-color: grey;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  position: relative;
}

nav .logo {
  text-align: center;
  font-family: "Exo", sans-serif;
  font-weight: 600;
}

nav ul {
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 0;
  margin: 0;
  list-style: none;
}

nav li {
  position: relative;
}

nav a {
  text-decoration: none;
  text-transform: uppercase;
  color: white;
}

/* Hamburger menu (only for mobile view) */
.menu-icon {
  display: none;
  font-size: 30px;
  cursor: pointer;
  color: white;
}

/* Submenu for the "Bryghus" button */
.submenu {
  display: none;
  position: absolute;
  background-color: grey;
  top: 100%;
  left: 0;
  width: 200px;
  text-align: left;
}

nav li:hover .submenu {
  display: block;
}

/* Mobile styles */
@media screen and (max-width: 600px) {
  nav ul {
    flex-direction: column;
    align-items: center;
    background-color: grey;
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    display: none;  /* Hidden by default */
  }

  nav ul.active {
    display: flex;  /* Display the menu when active */
  }

  nav li {
    margin: 1rem 0;
  }

  .menu-icon {
    display: block;  /* Display the hamburger icon */
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
}


/* Desktop styles (1000px and above) */
@media screen and (min-width: 1000px) {
  nav ul {
    gap: 4rem;
  }

  .submenu {
    display: block;
  }
}

/* Large screen (1920px) */
@media screen and (min-width: 1920px) {
  nav ul {
    gap: 6rem;
  }

  nav li {
    font-size: 1.5rem;  /* Increase font size for larger screens */
  }

  .submenu {
    width: 250px;  /* Make submenu a bit wider */
  }
}
</style>