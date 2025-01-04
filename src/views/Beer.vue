<script setup>
import { ref, onMounted } from 'vue';

import { getQueryParameter, getPost } from '../assets/js/app.js';
let id = getQueryParameter();
let beerinfo = ref({acf:{}});

onMounted(async()=>{
    beerinfo.value = await getPost(id);
})

</script>

<template>
    <main>
        <section class="sec">
            <picture>
                <source :srcset="beerinfo.acf.beerimgdesktop" media="(min-width: 1001px)">
                <img :src="beerinfo.acf.beerimgmobil" :alt="beerinfo.acf.titel" class="beercenter">
            </picture>
            <article class="boxmargin">
                <div>
                    <h1>{{ beerinfo.acf.titel }}</h1>
                    <h3>{{ beerinfo.acf.type }}</h3>
                    <p class="text">{{ beerinfo.acf.beskrivelse }}</p>
                </div>
                <div class="infoContainer">
                    <hr class="line">
                    <div class="info">
                       <div class="icon"> <img src="../assets/billeder/type.svg" alt=""></div>
                       <p>Type: {{ beerinfo.acf.type }}</p>
                    </div>
                    <hr class="line">
                    <div class="info">
                       <div class="icon"> <img src="../assets/billeder/alkoprocent.svg" alt=""></div>
                       <p>Alkoholprocent: {{ beerinfo.acf.alkoholprocent }}</p>
                    </div>
                    <hr class="line">
                    <div class="info">
                       <div class="icon"> <img src="../assets/billeder/ibu.svg" alt=""></div>
                       <p>IBU: {{ beerinfo.acf.ibu }}</p>
                    </div>
                    <hr class="line">
                    <div class="info">
                       <div class="icon"> <img src="../assets/billeder/ebc.svg" alt=""></div>
                       <p>EBC: {{ beerinfo.acf.ebc }}</p>
                    </div>
                    <hr class="line">
                    <div class="info">
                       <div class="icon"> <img src="../assets/billeder/size.svg" alt=""></div>
                       <p>{{ beerinfo.acf.size }}</p>
                    </div>
                    <hr class="line">
                </div>
            </article>
        </section>
    </main>
</template>

<style scoped>
@media (min-width:1000px) {
    .text{
    font-size: 20px;
    width: 40ch;
    margin: 36px 0px 46px 0px;
}

h1{
    font-size: 64px;
    margin-bottom: 0px;
}
h3{
    font-size: 32px;
}
.sec{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    column-gap: 2rem;
}
.sec img{
    grid-column: 2;
    display: block;
    margin: 0;
}

.sec article{
    grid-column: 1;
    grid-row: 1;
}
}

.beercenter{
    display: block;
    margin: 0 auto;
}
.boxmargin {
    margin: 0rem 24px;
}
.infoContainer{
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.line{
    height: 3px;
    background-color: black;
}
.info{
    display: flex;
    align-items: center;
    gap: 1rem;
}
.icon{
    width: 40px;
    height: 40px;
    background-color: var(--secondary);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
}
</style>