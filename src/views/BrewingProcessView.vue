<script setup>
import timeline from '@/components/timelineComponent.vue'
import backToTopBTN from '@/components/BacktoTopBTN.vue'
</script>

<template>
    <main>
        <section class="brygIntro">
            <div class="brygIntroContent">
                <h1>Sådan brygges øllet</h1>
                <p>Alt vores øl er brygget ud fra egne opskrifter af udvalgte kvalitets råvarer. Vi brygger med lokalt økologsk malt.  </p>
                <p>ør man kan nyde en Løkken Bryghus øl, går der flere uger fra brygmesteren nøje udvælger råvarer til øllet står klar på flasker i butikkerne.</p>
            </div>
        </section>
        <section class="timelineSection">
            <timeline />
        </section>
        <backToTopBTN/>
    </main>

</template>

<style scoped>

.brygIntro {
    background-color: var(--primary); 
    color: var(--light);
    width: 100%; 
    padding-bottom: var(--spacing-medium);
}

.brygIntroContent {
    max-width: 1200px; 
    margin: 0 auto; 
    padding: 0 var(--spacing-large); 
}

.brygIntro h1{
    padding-bottom: 1rem;
}

.timelineSection{
    padding-top: var(--spacing-medium);
    max-width: 1200px; 
    margin: 0 auto; 
}

</style>