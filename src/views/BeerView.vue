<script setup>
import BeerList from '@/components/BeerList.vue';
import backToTopBTN from '@/components/BacktoTopBTN.vue'

</script>

<template>
    <main>
        <div class="wrapper">
            <article class="ourbeer">
            <h1>VORES ØL</h1>
            <p>Vi er stolte af vores håndværk. Alle vores øl får netop den kærlighed og opmærksomhed, de har brug for, så det kan udvikle sig til det produkt, som vi holder så meget af at servere for vores gæster og kunder. Alle øl er brygget i huset og smager lige så godt som de er håndteret, fantastisk.</p>
        </article>
        </div>
        <BeerList></BeerList>
        <backToTopBTN />
    </main>
</template>

<style scoped>
@media (min-width:1000px){
    .ourbeer p {
        width: 79ch !important;
    }
    .ourbeer{
        max-width: 1100px;
        margin: 0 auto;
    }
}
.wrapper{
    padding: 32px 18px 32px 18px;
    background-color: var(--primary);
}

.ourbeer p,h1 {
    color: white;
}
    
</style>