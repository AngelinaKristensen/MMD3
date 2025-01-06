<script setup>
import { ref, onMounted } from 'vue';
let baseurl = "https://0x.mohafh.dk/wp-json/wp/v2/posts?";
const beers = ref([]);

//Fetch call hvor vi henter vores øl fra wordpress.
function getBeers(id){
    fetch(baseurl+`categories=${id}&per_page=100`)
    .then(res=>res.json())
    .then(data => {
        beers.value = data
    })
    .catch(err=>console.log(err))
}
onMounted(()=>{
    getBeers(26);
})
</script>

<template>
    <section>
        <article v-for="beer in beers">
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