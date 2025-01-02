<script setup>
import BeerList from '@/components/BeerList.vue';
</script>

<template>
    <main>
        <article class="ourbeer">
            <h1>VORES ØL</h1>
            <p>Vi er stolte af vores håndværk. Alle vores øl får netop den kærlighed og opmærksomhed, de har brug for, så det kan udvikle sig til det produkt, som vi holder så meget af at servere for vores gæster og kunder. Alle øl er brygget i huset og smager lige så godt som de er håndteret, fantastisk. </p>
        </article>
        <BeerList></BeerList>
    </main>
</template>

<style scoped>

.ourbeer{
    padding: 32px 0px 32px 18px;
    background-color: var(--primary);
}

.ourbeer p,h1 {
    color: white;
}

.ourbeer p {
    width: 45ch;
}
</style>