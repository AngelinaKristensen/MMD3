<script setup>
import timeline from '@/components/timelineComponent.vue'
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
        <timeline />
    </main>

</template>

<style scoped>

main{
    padding-left: var(--spacing-large);
    padding-right: var(--spacing-large);
}

.brygIntro {
    background-color: var(--primary); 
    color: var(--light);
    width: 100vw; 
    margin-left: calc(-50vw + 50%); 
    padding: 2rem 0; /* Add vertical padding */
}

.brygIntroContent {
    max-width: 1200px; 
    margin: 0 auto; 
    padding: 0 var(--spacing-large); 
}

.brygIntro h1{
    padding-bottom: 1rem;
    padding-top: var(--spacing-small);
}

.timeline{
    padding-top: var(--spacing-medium);
}
</style>