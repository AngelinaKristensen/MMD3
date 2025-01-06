<script setup>
import { ref, onMounted} from 'vue';
import {getCategory } from '../assets/js/app.js';

const beers = ref([]);

const props = defineProps({
    amountToSHow:{
        type: Number,
        default: 12
    }
   
});

onMounted(()=>{
    getCategory(26)
    .then(data=> beers.value = data)
})
</script>

<template>
    <section>
        <article v-for="beer in beers.slice(0,props.amountToSHow)">
               <a :href="'/#/Beer?id=' + beer.id">
                <img :src="beer.acf.cardimg" :alt="beer.acf.titel">
                <p>{{ beer.acf.titel }}</p>
                <p>{{ beer.acf.type }}</p>
               </a>
            </article>
    </section>
</template>

<style scoped>

section a{
    text-decoration: none;
    color: black;
}
section{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
}

@media (min-width: 1000px){
    section{
        display: grid;
        grid-template-columns: repeat(4,1fr);
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