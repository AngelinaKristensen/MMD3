<script setup>
import { RouterLink } from 'vue-router';
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
    display: none !important;
    background-color: grey;
    display: flex;
    justify-content: center;
    padding: 2rem;
    gap: 4rem;
    margin: 0;
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
</style>