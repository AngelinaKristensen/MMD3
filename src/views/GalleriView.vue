<script setup>

</script>

<template>
    <section>
        <picture>
            <source srcset="../assets/billeder/Galleri1Desktop.png" media="(min-width: 1000px)">
            <img src="../assets/billeder/Galleri1Mobil.png" alt="">
        </picture>
        <picture>
            <source srcset="../assets/billeder/Galleri2Desktop.png" media="(min-width: 1000px)">
            <img src="../assets/billeder/Galleri2Mobil.png" alt="">
        </picture>
        <picture>
            <source srcset="../assets/billeder/Galleri3Desktop.png" media="(min-width: 1000px)">
            <img src="../assets/billeder/Galleri3Mobil.png" alt="">
        </picture>
        <picture>
            <source srcset="../assets/billeder/Galleri4Desktop.png" media="(min-width: 1000px)">
            <img src="../assets/billeder/Galleri4Mobil.png" alt="">
        </picture>
        <picture>
            <source srcset="../assets/billeder/Galleri5Desktop.png" media="(min-width: 1000px)">
            <img src="../assets/billeder/Galleri5Mobil.png" alt="">
        </picture>
        <picture>
            <source srcset="../assets/billeder/Galleri6Desktop.png" media="(min-width: 1000px)">
            <img src="../assets/billeder/Galleri6Mobil.png" alt="">
        </picture>
        <picture>
            <source srcset="../assets/billeder/Galleri7Desktop.png" media="(min-width: 1000px)">
            <img src="../assets/billeder/Galleri7Mobil.png" alt="">
        </picture>
        <picture>
            <source srcset="../assets/billeder/Galleri8Desktop.png" media="(min-width: 1000px)">
            <img src="../assets/billeder/Galleri8Mobil.png" alt="">
        </picture>
        <picture>
            <source srcset="../assets/billeder/Galleri9Desktop.png" media="(min-width: 1000px)">
            <img src="../assets/billeder/Galleri9Mobil.png" alt="">
        </picture>
        <picture>
            <source srcset="../assets/billeder/Galleri10Desktop.png" media="(min-width: 1000px)">
            <img src="../assets/billeder/Galleri10Mobil.png" alt="">
        </picture>
        <picture>
            <source srcset="../assets/billeder/Galleri11Desktop.png" media="(min-width: 1000px)">
            <img src="../assets/billeder/Galleri11Mobil.png" alt="">
        </picture>
        <picture>
            <source srcset="../assets/billeder/Galleri12Desktop.png" media="(min-width: 1000px)">
            <img src="../assets/billeder/Galleri12Mobil.png" alt="">
        </picture>
    </section>
</template>

<style scoped>

section{
    display: grid;
    justify-items: center;
    row-gap: 2rem;
    padding: 2rem 0rem 4rem 0rem;

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