<script setup>
import { ref, onMounted} from 'vue';
import { getQueryParameter} from '../assets/js/app.js';

let baseurl = "https://0x.mohafh.dk/wp-json/wp/v2/posts?";
const events = ref([]);
let id = ref(null);
let currentEvent = ref({acf:{}});
let overlay;


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
    let xcon = document.querySelector("i");
    overlay = document.querySelector(".overlay");
    xcon.addEventListener("click",function(){
        overlay.style.display = "none"
    })

})

const click = () => {
   setTimeout(()=>{
    id.value = getQueryParameter();
    currentEvent.value = events.value.find(event=> event.id === parseInt(id.value));
    console.log('currentEvent:', currentEvent.value)
    overlay.style.display = "block"
   },400)
}



</script>

<template>
    <section>
        <div class="card" v-for="event in events" :key="event.id">
            <a :href="'/#/Begivenheder?id=' + event.id" @click="click">
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
            </a>
        </div>
    </section>
    <div class="overlay">
        <div class="modal">
        <div class="close"> <i class="fa-solid fa-x"></i></div>
        <div class="content">
        <img src="../assets/billeder/Rectangle 76.png" alt="">
        <h2> {{ currentEvent.acf.titel }}</h2>
        <div class="logotext">
            <p>Voergaard 6, 9330 Flauenskjold</p>
            <img src="../assets/billeder/location-dot-solid (1).svg" alt="">
        </div>
        <p>Fredag 22. november, kl. 10.00 -16.00</p>
        <p>Voergaard julemarked afholder årligt et julemarked på Voergaard Slot, som også bliver kaldet for Jul på Slottet. Der er skønhed, god julestemning, underholdning og mad til gæsterne. Det er også et oplagt sted at finde en julegave til sine nærmeste.</p>
        </div>
        </div>
    </div>
</template>


<style scoped>

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

.modal{
    position: fixed;
    z-index: 1;
    top: 0px;
    left: 50%;
    transform: translate(-50%, 0%);
    color: white;
    width: 80%;
    background-color: var(--primary);
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

    .text{
        width: 45ch;
    }

    .card:hover{
        scale: 1.1;
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