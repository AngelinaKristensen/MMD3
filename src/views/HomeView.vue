<script setup>
import BeerList from '@/components/BeerList.vue';
import { ref} from 'vue';


let currentAmountShowed = ref(8);
const maxAmount = 12;

const showRest = () => {
    if(currentAmountShowed.value < maxAmount){
        currentAmountShowed.value +=4;
    }
}
</script>

<template>
   <div class="overlay">
    <header>
       <div>
       <picture>
        <source media="(min-width: 1000px)" srcset="../assets/billeder/logodesktop.png">
        <img src="../assets/billeder/logomobil.png" alt="">
       </picture>
        <p class="aligntext">VI BRYGGER MED RESPEKT FOR HÅNDVÆRKET</p>
        <div><p>Fredag 12-19 Lørdag 11-18</p>
            <p>Vrenstedvej 12</p></div>
       </div>
       <svg class="arrow" width="79" height="107" viewBox="0 0 79 107" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.2348 80.4304C30.3173 82.5232 33.6993 82.5232 35.7819 80.4304L62.4381 53.6432C64.5206 51.5505 64.5206 48.1518 62.4381 46.0591C60.3556 43.9663 56.9736 43.9663 54.8911 46.0591L37.3312 63.7219V12.3574C37.3312 9.39411 34.9488 7 32 7C29.0512 7 26.6687 9.39411 26.6687 12.3574V63.7052L9.10894 46.0758C7.02642 43.9831 3.64441 43.9831 1.56189 46.0758C-0.52063 48.1686 -0.52063 51.5672 1.56189 53.66L28.2181 80.4472L28.2348 80.4304Z" fill="#168039"/>
</svg>
    </header>
   </div>
    <main>
        <section>
            <div class="wrapper">
                <article class="welcome">
                <h1>Velkommen</h1>
                <p>På Løkken Bryghus, der er beliggende i byens centrum og tæt på tovet, brygger øl efter de gamle håndværkstraditioner.  Brygmester Kent Boalth har en hånd med i hele processen lige fra omhyggelig udvælgelse af de fineste malt- og humletyper til brygning og tapning på flasker eller fad. På Løkken Bryghus brygges der med økologisk malt, der dyrkes blot 12 km fra bryghuset. </p>
                <p>Et besøg på Løkken Bryghus er en ganske særlig oplevelse af ølbrygningens kunst og giver et unikt indblik i det særlige håndværk, der kræves for netop at skabe Løkken Bryghus-øl. Bryggerstuen er stedet, hvor vores mange gæster mødes for at smage, vurdere og nyde de forskellige øltyper i hyggelige og afslappede omgivelser. Oplev Løkken Bryghus indefra i vores hyggelige bryggerstue eller køb øl i vores brewshop og gå en tur omkring Løkkens mange skønne seværdigheder. </p>
            </article>
            </div>
        </section>
        <BeerList :amountToSHow="currentAmountShowed"></BeerList>
       <div class="btn" v-if="currentAmountShowed<maxAmount">
        <button @click="showRest">Se flere</button>
       </div>
    </main>
    <section>
        <div class="wrapper">
                <article class="welcome">
                <h1>Brewshoppen</h1>
                <p>Brewshoppen holder åbent samtidig med vores Bryggerstue. Åbningstiderne finder du her på vores hjemmeside eller på vores Facebooks. Vores Brewshop på Løkken Bryghus er altid et besøg værd.</p>
                <p>Her finder du alle vores øl og gavekasser. Vi hjælper altid med at finde den perfekte gave eller hvordan du kan blande den bedste smagskasse, hvis der skal hygges sammen med venner og familie.</p>
            </article>
            <article class="grid2">
    <picture>
        <source media="(min-width: 1000px)" srcset="../assets/billeder/BrewshopDesktop2.png">
        <img src="../assets/billeder/Brewshop1.png" alt="">
    </picture>
    <picture>
        <source media="(min-width: 1000px)" srcset="../assets/billeder/BrewshopDesktop1.png">
        <img src="../assets/billeder/Brewshop2.png" alt="">
    </picture>
           
        </article>
        </div>
    </section>
</template>

<style scoped>

.arrow{
    position: absolute;
    bottom: 220px;
    animation: bounce 2s ease-in-out infinite;
}

.grid2{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 0 auto;
}

.btn{
    display: flex;
    justify-content: center;
}
.wrapper{
    padding: 35px 20px;
    background-color: var(--primary);
    color: white;
}

header{
    background-image: url(../assets/billeder/headermobil.png);
    background-size: cover;
    height: 100vh;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    position: relative;
}

i{
    position: absolute;
}

@media (min-width: 1000px) {

    .arrow{
    bottom: 70px;
}

    .grid2{
        justify-content: center;
        flex-direction: unset;
        gap: 3.6rem;
    }
    header {
        background-image: url(../assets/billeder/headerdesktop.png);
    }
    .aligntext{
    width: auto;
}

.welcome{
    margin: 0 auto;
    max-width: 1100px;;
}
.welcome p {
    width: 132ch;
}
.wrapper{
    background-color: var(--primary);
    color: white;
}

}
header>div{
    text-align: center;
    margin-bottom: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
}


@keyframes bounce{
    0%{
        transform: translateY(0px) scale(1);
    }
    50%{
        transform: translateY(-30px) scale(1.1);
    }
    100%{
        transform: translateY(0px) scale(1);
    }
}
</style>




