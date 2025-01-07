<!-- <script setup>
import { RouterLink } from 'vue-router';
Nav-og-footer


import { ref } from 'vue';

const menuOpen = ref(false);
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

DropdownMenuSites
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
=======
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
        <RouterLink to="#">Bryghus</RouterLink>
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
/* Basic Styles */
nav {
  background-color: var(--primary);
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

nav a:hover {
  color: #f4a261;
}
/* ---------Navigation elements styling END----------*/

/* Skjul submenu som standard */
nav .submenu {
  display: none; /* Skjult som standard */
  position: absolute;
  top: 100%; /* Placer under dropdown-linket */
  left: 0;
  background-color: var(--primary);
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
@media screen and (max-width: 600px) {
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
    background-color: var(--primary);
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