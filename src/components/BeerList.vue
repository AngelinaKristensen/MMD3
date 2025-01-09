<script setup>
// Importer funktioner fra vue
import {RouterLink} from "vue-router";
import { ref, onMounted} from 'vue';
//Importer funktioner fra app.s
import {getCategory } from '../assets/js/app.js';

//Ref værrdi
const beers = ref([]);

// Et objekt som man kan bruge til at videregive data til et komponent. Det tager et nummer men default værdien er 12
const props = defineProps({
    amountToSHow:{
        type: Number,
        default: 12
    }
   
});

onMounted(()=>{
    // Fetcher vores data når komponenten er blevet mounted og derefter gemmer vi den i beers.value
    getCategory(26)
    .then(data=>{
        beers.value = data;
        let spinner = document.querySelector("#spinner");
        spinner.classList.add("stopspinning")
    })
})
</script>

<template>
    <section>
        <!-- Et for loop in vue, som looper igennem voes array fra beers og derefter laver html elementer -->
        <article v-for="beer in beers.slice(0,props.amountToSHow)">
            <RouterLink :to="{name: 'Beer', query:{id:beer.id}}">
                <img :src="beer.acf.cardimg" :alt="beer.acf.titel">
                <p class="beerName">{{ beer.acf.titel }}</p>
                <p class="beerType">{{ beer.acf.type }}</p>
            </RouterLink>
        </article>
            <svg id="spinner" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"/></svg>
    </section>
</template>

<style scoped>
.beerName{
    font-weight: 700;
    font-size: 2rem;
}

.beerType{
    font-size: 1.5rem;
}

section a{
    text-decoration: none;
    color: black;
}
section{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    position: relative;
}

@media (min-width: 1000px){
    section{
        display: grid;
        grid-template-columns: repeat(4,1fr);
        row-gap: 3rem;
        column-gap: 4rem;
        justify-items: center;
        max-width: 1150px;
        margin: 0 auto;
    }
    article:hover{
        scale: 1.1;
    }
    article{
        transition: 500ms;
    }
}

p{
    text-align: center;
}
</style>