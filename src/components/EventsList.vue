<script setup>
import { ref, onMounted } from 'vue';
let baseurl = "https://0x.mohafh.dk/wp-json/wp/v2/posts?";
const events = ref([]);

//Fetch call hvor vi henter vores øl fra wordpress.
function getEvents(id){
    fetch(baseurl+`categories=${id}&per_page=100`)
    .then(res=>res.json())
    .then(data => {
        events.value = data
    })
    .catch(err=>console.log(err))
}
onMounted(()=>{
    getEvents(27);
})
</script>

<template>
    <section>
        <div class="card" v-for="event in events" :key="event.id">
            <div class="date">
                <p>{{ event.acf.datedot }}</p>
            </div>
            <picture>
                <source media="(min-width: 1000px)" :srcset="event.acf.cardimgdesktop">
                <img :src="event.acf.cardimgmobil" :alt="event.acf.titel">
            </picture>
            <div class="text">
                <h3>{{event.acf.titel}}</h3>
                <p>{{ event.acf.disclosuretekst }}</p>
            </div>
        </div>
    </section>
</template>


<style scoped>
section{
    display: grid;
    justify-items: center;
    row-gap: 2rem;
}
.card{
    background-color: var(--primary);
    color: white;
    position: relative;
    border-radius: 6px;
}

.card img {
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
}

.text{
    padding: 16px 0px 16px 16px;
    width: 40ch;
}

.date{
    top: 10px;
    left: 10px;
    height: 55px;
    width: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    position: absolute;
    background-color: var(--CTA);
}

@media (min-width: 1000px){
    section{
        display: grid;
        grid-template-columns: repeat(3,1fr);
        justify-items: center;
        max-width: 1200px;
        margin: 0 auto;
        gap: 30px;
    }
}

@media (min-width: 1920px){
    section{
        grid-template-columns: repeat(4,1fr);
        max-width: 1600px;
    }
}


</style>