<script setup>
import BeerList from '@/components/BeerList.vue';
import { ref} from 'vue';

//Ref variabler og værdier
let currentAmountShowed = ref(8);
const maxAmount = 12;

//Funktion som skal vise de sidste øl
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
        <div class="timendPlace"><p>Fredag 12-19 Lørdag 11-18</p>
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
                <h2>VELKOMMEN PÅ LØKKEN BRYGHUS</h2>
                <p>På Løkken Bryghus, der er beliggende i byens centrum og tæt på tovet, brygger øl efter de gamle håndværkstraditioner.  Brygmester Kent Boalth har en hånd med i hele processen lige fra omhyggelig udvælgelse af de fineste malt- og humletyper til brygning og tapning på flasker eller fad. På Løkken Bryghus brygges der med økologisk malt, der dyrkes blot 12 km fra bryghuset. </p>
                <p>Et besøg på Løkken Bryghus er en ganske særlig oplevelse af ølbrygningens kunst og giver et unikt indblik i det særlige håndværk, der kræves for netop at skabe Løkken Bryghus-øl. Bryggerstuen er stedet, hvor vores mange gæster mødes for at smage, vurdere og nyde de forskellige øltyper i hyggelige og afslappede omgivelser. Oplev Løkken Bryghus indefra i vores hyggelige bryggerstue eller køb øl i vores brewshop og gå en tur omkring Løkkens mange skønne seværdigheder. </p>
            </article>
            </div>
        </section>
        <div class="wrapper2 welcome">
            <h2>VORES ØL</h2>
        </div>
        <!-- Komponenten som har videregivet data med props -->
        <BeerList :amountToSHow="currentAmountShowed"></BeerList>
        <!-- Conditionalrendering -->
       <div class="btn" v-if="currentAmountShowed<maxAmount">
        <!-- Eventlistner som skal udføre funktion når der trykkes på den -->
        <button @click="showRest" class="btnstyle">SE FLERE</button>
       </div>
    </main>
    <section>
        <div class="wrapper last">
                <article class="welcome">
                <h2>BREWSHOPPEN</h2>
                <p>Brewshoppen holder åbent samtidig med vores Bryggerstue. Åbningstiderne finder du her på vores hjemmeside eller på vores Facebooks. Vores Brewshop på Løkken Bryghus er altid et besøg værd.</p>
                <p class="ext">Her finder du alle vores øl og gavekasser. Vi hjælper altid med at finde den perfekte gave eller hvordan du kan blande den bedste smagskasse, hvis der skal hygges sammen med venner og familie.</p>
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
.wrapper>.welcome h2{
    padding-bottom: 24px;
}

.wrapper>.welcome p:first-of-type,.ext{
    padding-bottom: 16px;
}
.wrapper2{
    padding: 24px 0px 24px 20px;
}
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
.last:last-of-type{
    margin-top: 48px;
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
    width: auto !important;
    font-size: 36px !important;
}
.wrapper2{
    padding: 36px 0px;
    padding-left: 0px;
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
.timendPlace p{
    font-size: 36px;
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

.aligntext{
    width: 21ch;
    font-family: 'Lato';
  font-style: italic;
  font-weight: 900;
  font-size: 20px;
}

.timendPlace p{
    font-style: italic;
  font-weight: 700;
}
</style>




