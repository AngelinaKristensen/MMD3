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
    <!-- Hamburger-menu til mobil -->
     <div class="MobileNav">
      <div class="Mobilelogo">
        <RouterLink to="/">
          <img src="@/assets/icons/LøkkenBryghusLogo.png" alt="Løkken Bryghus Logo" />
        </RouterLink>
      </div>

      <div class="menu-icon" @click="toggleMenu">
       <span v-if="!menuOpen">☰</span>
        <span v-if="menuOpen">✖</span>
      </div>
     </div>

    <!-- Navigation links -->
    <ul :class="{ 'active': menuOpen }">
      <li><RouterLink to="/">Forside</RouterLink></li>
      <li><RouterLink to="/VoresOel">Vores Øl</RouterLink></li>

      <!-- Dropdown-menu -->
      <li class="dropdown">
        <span class ="dropdown-link">Bryghus ⬇ </span>
        <div class="submenu">
          <RouterLink to="/Bryggerstuen">Bryggerstuen</RouterLink>
          <RouterLink to="/Brygproces">Brygproces</RouterLink>
          <RouterLink to="/SmagsGuide">Smags Guide</RouterLink>
          <RouterLink to="/Rundvisning">Rundvisning</RouterLink>
          <RouterLink to="/Vaerdier">Værdier</RouterLink>
        </div>
      </li>

      <div class="logo">
        <RouterLink to="/">
          <img src="@/assets/icons/LøkkenBryghusLogo.png" alt="Løkken Bryghus Logo" />
        </RouterLink>
      </div>

      <li><RouterLink to="/Begivenheder">Begivenheder</RouterLink></li>
      <li><RouterLink to="/Kontakt">Kontakt</RouterLink></li>
      <li><RouterLink to="/Galleri">Galleri</RouterLink></li>
    </ul>
  </nav>
</template>

<style scoped>

ul{
  font-weight: 700;
  font-family: var(--font-text);
}
li:hover{
  text-decoration: underline;
  text-underline-offset: 8px;
  transition: 300ms;
  color: white
}
/* Basic Styles */
nav {
  background-color: var(--dark-2);
  display: flex;
  justify-content: center;
  position: relative;
}

nav .logo img {
  max-width: 150px; /* logo størrelse*/
  height: auto; 
}

 /* ---------Navigation elements styling START----------*/
nav ul { 
  display: flex;
  align-items: center;
  max-width: 100%; 
  gap: 1.5rem;
  padding: 1rem;
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

nav a:hover,
nav a.router-link-active {
  color: #f4a261;
}

nav .dropdown-link {
  color: white;
  cursor: pointer;
  text-transform: uppercase;
}

nav .dropdown-link:hover {
  color: #f4a261;
}
/* ---------Navigation elements styling END----------*/

/* Skjul submenu som standard */
nav .submenu {
  display: none; /* Skjult som standard */
  position: absolute;
  top: 100%; /* Placer under dropdown-linket */
  left: 0;
  background-color: var(--dark-2);
  padding: 1rem;
  z-index: 10;
  border-radius: 0.5rem;
  min-width: 200px;
}

/* Styling af links i submenuen */
nav .submenu a {
  display: block;
  color: white;
  text-decoration: none;
  margin: 0.5rem 0;
  text-transform: capitalize;
}

nav .submenu a:hover {
  color: #f4a261;
}

nav li:hover .submenu {
  display: block;
}

/* Hamburger menu */
.menu-icon {
  display: none;
  font-size: 30px;
  cursor: pointer;
  color: white;
}

.Mobilelogo{
  display: none;
}

/* Mobile styles */
@media screen and (max-width: 900px) {
  nav {
    display: flex;
    justify-content: space-between; 
    align-items: center; 
    padding: 0.5rem 1rem;
  }

  .menu-icon {
    display: block; /* vis hamburger icon */
    padding: 1rem;
  }

  nav ul {
    flex-direction: column; /* Gør sådan at items i menuen bliver stacked */
    position: absolute; /* Gemmer menuen off screen */
    top: 100%;
    left: 0;
    width: 100%; /* Gær sådan at menuen dækker hele screen. */
    background-color: var(--dark-2);
    opacity: 0;
  }

  nav ul.active {
    opacity: 1;
    z-index: 2000;
  }

  nav ul li {
    width: 100%; /* Gær sådan at menuitems dækker hele screen. */
    text-align: left;
    padding: 1rem;
  }

  .logo{
    display: none;
  }

  .Mobilelogo{
  display: block;
}

.MobileNav {
    display: flex;
    justify-content: space-between; 
    align-items: center;
    width: 100%; 
  }

nav .Mobilelogo img {
  max-width: 150px; /* logo størrelse*/
  height: auto; 
}
}
</style>

