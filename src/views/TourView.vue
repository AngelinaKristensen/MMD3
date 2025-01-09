<script setup>
import beerIcon from "@/assets/Icons/beerIcon.png";
import clockIcon from "@/assets/Icons/clockIcon.png";
import Carousel from "@/components/ImageCarousel.vue";
import Coins from "@/assets/Icons/coins.png"

const tours = [
  {
    title: "Rundvisning og ølsmagning stor gruppe",
    details: [
      { icon: beerIcon, text: "Antal smagninger: 6" },
      { icon: clockIcon, text: "Tid: 2 timer" },
      { icon: Coins, text: "Pris: 125 kr. pr person" }
    ]
  },
  {
    title: "Rundvisning og ølsmagning lille gruppe",
    details: [
      { icon: beerIcon, text: "Antal smagninger: 3" },
      { icon: clockIcon, text: "Tid: 1 time" },
      { icon: Coins, text: "Pris: 125 kr." }

    ]
  }
];
</script>

<template>
<main>
   
    <section class="tourIntro">
        <h1>RUNDVISNING</h1>
        <article class="tourIntroContent">
            <p>På Løkken Bryghus inviterer vi vores gæster med in på en spændende rejse gennem øllets univers.  Vi bringer en oplevelse som både underholder og oplyser.</p>
            <p>Vi kombinerer vores rundvisning med spændende indblik i bryggekunsten med sjove og medrivende fortællinger, hvor vi præsenterer vores øl, holder smagning og foredrag omkring ølbrygning, her går vi i dyben med de forskellige stilarter.</p>
            <p>Til at slutte af med får vi en god øl og en bid smørbrød (skal bestilles)</p>
            <p>Ved større grupper (min 10 personer) Kan vi på Løkken Bryghus tilbyde ølsmagninger til lukkede selskaber, dette kan foregå på bryghuset med rundvisning i bryggeriet eller afholdes på egen virksomhed eller til privat arrangement. </p>
        </article>

        <article class="tourDetailsSection">
            <div class="tourDetails" v-for="(tour, index) in tours" :key="index">
                <h4>{{ tour.title }}</h4>
                <ul>
                    <li v-for="(detail, id) in tour.details" :key="id">
                        <span class="icon-circle">
                            <img :src="detail.icon" alt="" />
                        </span>
                        {{ detail.text }}
                    </li>
                </ul>
            </div>
        </article>

        <div class="tourIntroImage">

        </div>
    </section>

    <section>
        
        <Carousel/>
    </section>
</main>

</template>

<style scoped>

main{
    max-width: 1200px; 
    margin: 0 auto; 
    padding: 0 var(--spacing-large); 
}

.tourIntro h1{
    padding-bottom: 1rem;
    padding-top: var(--spacing-small);
}


article{
   padding-bottom: var(--spacing-small);
}

.tourIntro p{
padding-bottom: 1rem;
}

.tourDetails h4 {
  margin-bottom: .5rem; 
}

.tourDetails  ul {
  list-style: none;
  padding: 1rem;
}

li {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 0.9rem;
}

.icon-circle {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: var(--secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  font-size: 1rem;
}

.icon-circle img {
  width: 25px; /* sætter størrelsen på icon */
  color: white; /* Icon color */
}


</style>