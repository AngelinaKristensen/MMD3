<script setup>

</script>

<template>
    <header>
        <picture>
            <img src="../assets/billeder/logodesktop.png" alt="">
            <source srcset="../assets/billeder/logomobil.png" media="(max-width: 430px)">
            <source srcset="../assets/billeder/logodesktop.png" media="(min-width: 1000px)">
            <img src="../assets/billeder/logodesktop.png" alt="løkken bryghus loo">
        </picture>
    </header>
</template>

<style scoped>

@media (max-width: 430px){
    header{
        background-image: url(../assets/billeder/);
    }
}
</style>