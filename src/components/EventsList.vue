<script setup>
import {RouterLink} from "vue-router";
// Importer funktioner fra vue
import { ref, onMounted} from 'vue';
//Importer funktioner fra app.s
import { getQueryParameter, getCategory} from '../assets/js/app.js';

//Ref variabler og variabler
const events = ref([]);
let id = ref(null);
let currentEvent = ref({acf:{}});
let overlay;

//Funktion som skal fjerne id fra hash i url
function removeId(){
    let url = window.location.href;
    let newUrl = url.split('?')[0];
    window.history.pushState(history.state, document.title, newUrl);
}

onMounted(()=>{
        // Fetcher vores data når komponenten er blevet mounted og derefter gemmer vi den i events.value
    getCategory(27)
    .then(data=>{
        events.value = data;
        let spinner = document.querySelector("#spinner");
        spinner.classList.add("stopspinning");
    })

    let xcon = document.querySelector("i");
    overlay = document.querySelector(".overlay");
    xcon.addEventListener("click",function(){
        overlay.style.display = "none"
        removeId();
    })

})

const click = () => {
    // Når der klikkes så bliver idet fra url fanget ved hjælp af getqueryparamter funktionen. Derefter bruger en .find funktionen i javascript til at finde et objekt som har den id i vores events array. Der er også en lille timeout før det sker
   setTimeout(()=>{
    id.value = getQueryParameter();
    currentEvent.value = events.value.find(event=> event.id === parseInt(id.value));
    overlay.style.display = "block"
   },400)
}
</script>

<template>
    <section>
        <div class="card" v-for="event in events" :key="event.id">
            <RouterLink :to="{name: 'begivenheder', query:{id:event.id}}" @click="click">
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
        </RouterLink>
        </div>
        <svg id="spinner" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"/></svg>
    </section>
    <div class="overlay">
        <div class="modal">
        <div class="close"> <i class="fa-solid fa-x"></i></div>
        <div class="content">
            <picture>
                <source media="(min-width: 1000px)" :srcset="currentEvent.acf.begivenhedimgdesktop" class="imgdesktop">
                <img :src="currentEvent.acf.begivenhedimgmobil" :alt="currentEvent.acf.titel">
            </picture>
        <h2> {{ currentEvent.acf.titel }}</h2>
        <div class="logotext">
            <img src="../assets/billeder/location.svg" alt="">
            <p>{{ currentEvent.acf.lokation }}</p>
        </div>
        <div class="logotext">
            <img src="../assets/billeder/tidspunkt.svg" alt>
            <p>{{ currentEvent.acf.tidspunkt }}</p>
        </div>
        <p class="summary">{{ currentEvent.acf.beskrivelse }}</p>
        </div>
        </div>
    </div>
</template>


<style scoped>

section{
    position: relative;
}
.card a {
    text-decoration: none;
    color: white;
}
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
    width: 100%;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
}

.text{
    padding: 0px 0px 16px 16px;
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

.modal{
    position: fixed;
    z-index: 1;
    top: 0px;
    left: 50%;
    transform: translate(-50%, 0%);
    color: white;
    width: 80%;
    background-color: var(--primary);
    padding-bottom: 20px;
}

@media (min-width: 1000px){
    .modal{
        top: 5px;
        max-width: 700px;
        max-height: 90vh;
        height: auto;
        overflow-y: auto;
    }
    .close i:hover{
        scale: 1.3;
    }
    .close i {
        transition: 250ms;
    }
    .modal img{
        width: 500px;
    }
    .summary{
        width: 69ch;
    }
}
.overlay{
    display: none;
    position: fixed;  
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 0;
}
.overlay h2{
    padding-top: 10px;
}

.content{
    display: flex;
    flex-direction: column;
    padding: 0px 20px;
    box-sizing: border-box;
}

.close{
    display: flex;
    justify-content: end;
    padding: 5px 20px 20px 0px;
}

.close i {
    font-size: 25px;
}

.logotext{
    display: flex;
    justify-content: start; 
    align-items: center;
    gap: 8px;
}

.logotext img{
    width: 30px;
}


.logotext:last-of-type {
    padding-bottom: 30px;
    padding-top: 10px;
}

.logotext:first-of-type{
    padding-top: 15px;
}

.opleve p {
    padding-bottom: 8px;
}

.opleve p:first-of-type{
    padding-top: 8px;
}

@media (min-width: 1000px){
    section{
        display: grid;
        grid-template-columns: repeat(3,1fr);
        justify-items: center;
        max-width: 1200px;
        margin: 0 auto;
        column-gap: 40px;
        row-gap: 40px;
    }
    .card:hover{
        scale: 1.08;
    }
    .card{
        transition: 500ms;
    }
}

@media (min-width: 1920px){
    section{
        grid-template-columns: repeat(4,1fr);
        max-width: 1600px;
    }
}


</style>