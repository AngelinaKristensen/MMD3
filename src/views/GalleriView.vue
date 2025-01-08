<script setup>

</script>

<template>
    <section>
        
    </section>
</template>

<style scoped>
section{
    display: grid;
    justify-items: center;
    row-gap: 2rem;
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
}

@media (min-width: 1920px){
    section{
        grid-template-columns: repeat(4,1fr);
        max-width: 1600px;
    }
}
</style>