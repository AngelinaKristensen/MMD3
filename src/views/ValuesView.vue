<script setup>

import { ref } from 'vue';
import missionICON from '@/assets/Icons/Mission.svg';
import valueICON from '@/assets/Icons/Vision.svg';
import visionICON from '@/assets/Icons/Values.svg';

import LophaveLogo from '@/assets/billeder/Lophave.png'; 
import GyrupGaardmalLogo from '@/assets/billeder/GyrupGaardmal.png'; 
import bageriHaabetLogo from '@/assets/billeder/bageriHaabet.png' ;
import LaesoeTangLogo from '@/assets/billeder/LaesoeTangLogo.jpg'; 

const firmaer = ref([
  {
    logo: LophaveLogo, 
    name: 'Lophave Hereford'
  },
  {
    logo: GyrupGaardmalLogo, 
    name: 'gyrup'
  },
  {
    logo: bageriHaabetLogo, 
    name: 'Bageri Haabet'
  },
  {
    logo: LaesoeTangLogo, 
    name: 'tofteladen'
  }
]);

</script>

<template>
<main>
    <section class="valuesIntro">
    <h1>VORES VÆRDIER</h1>
    <div class="valueIcons">
        <!-- binder imported icons til source med v:bind shortkey -->
        <img :src="missionICON" alt="Mission Icon" class="icon" />
        <img :src="valueICON" alt="Value Icon" class="icon" />
        <img :src="visionICON" alt="Vision Icon" class="icon" />
    </div>


    <article class="valuesText">
        <p>Vores <span>MISSION</span> er at kunne stimulere livsnyderen i os alle. Det er noget vi vil opnå ved at tilbyde vores velsmagende øl af høj kvalitet</p>
        <p>Vores <span>VISION</span> er at vi vil være et stærkt varemærke blandt de mange øldrikkende forbrugere.</p>
        <p>Vores <span>VÆRDIER</span> er at vi vil gøre er til formål for at kunne give forbrugeren mulighed for at nyde et godt produkt</p>
    
    </article>
    </section>

    <section class="sustainabilitySection">
        <h3>BÆREDYGTIGHEDEN</h3>
        <p>På Løkken Bryghus betyder det meget for os, at vælge vores leverandører og samarbejdspartnere lokalt. I vores valg af produkter tilsigter vi at vælge økologisk, CO2-neutralt og genanvendelige materialer. F.eks er alt vores pilsnermalt dyrket økologisk blot 12 km fra Løkken Bryghus. Vores fustager er af genanvendelige materialer og vi benytter ikke CO2 som drivmiddel i vores Bryggerstue.</p>
    </section>

    <section>
      <h3>VORES SAMARBEJDSPARTNERE</h3>
      <div class="Samarbejdspartnere">
          <div v-for="(firma, index) in firmaer" :key="index" class="firma-item">
            <img :src="firma.logo" :alt="firma.name" class="firma-logo" />
            <p>{{ firma.name }}</p>
           </div>
        </div>
    </section>

</main>
</template>

<style scoped>

main{
  max-width: 1200px; 
  margin: 0 auto; 
  padding: 0 var(--spacing-large); 
}

.valuesIntro h1{
    padding-bottom: 1rem;
    padding-top: var(--spacing-small);
}

section {
  padding-bottom: var(--spacing-medium);
}

/* -----Icons section --------*/
.valueIcons {
  display: flex;
  justify-content: center;
  gap: 40px; 
  padding: var(--spacing-small);
  flex-wrap: wrap; 
}

.valueIcons .icon {
  width: 10rem;
  height: 10rem;
  object-fit: contain; 
  max-width: 100%; 
  height: auto; 
  flex-shrink: 0; 
}
/* ----------Icon end-------- */

/* Text wrap  og word-break for at undgå overflow */
.valuesText p {
  margin-bottom: 1rem;
  word-wrap: break-word; 
  overflow-wrap: break-word; 
}

article span {
  color: var(--CTA);
  font-weight: bold;
}

.Samarbejdspartnere {
  display: flex;
  justify-content: space-around; 
  flex-wrap: wrap; 
  gap: 2rem;  
  margin-top: var(--spacing-small); 
}

.firma-item {
  display: flex;
  flex-direction: column;  
  align-items: center; 
  max-width: 150px;  /* max-width af hvert item i container */
  text-align: center;  
}

.firma-logo {
  max-width: 200px;  
  height: 100px;  
  object-fit: contain;  
  margin-bottom: 1rem; 
}

/*-------------- Media queries START ------------------*/

/* Responsive Layout small tablets and mobile 600px (Mobile Devices) */


@media screen and (min-width: 1000px) {
  .valueIcons .icon {
    width: 10rem;
    height: 10rem;
  }
}

@media screen and (min-width: 1500px) {

  .valueIcons {
    gap: 3rem; 
  }

  .valueIcons .icon {
    width: 12rem; 
    height: 12rem;
  }

  .sustainabilitySection p{
    word-wrap: break-word;
    max-width: 1100px;
  }
  
}
</style>