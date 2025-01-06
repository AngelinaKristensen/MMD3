<script setup>
import { ref } from 'vue';

const steps = ref([
{
    title: 'SPIRING',
    description: `Første trin i fremstillingen af malt består i at få kornet til at spire. Kernerne lægges i blød, så de suger vand. Når vandet opsuges, begynder kernerne at spire. Herefter kommes de i spirekasser.

    De ligger i et metertykt lag på en perforeret bund, hvor der blæses luft op igennem. Kernerne vendes 2-3 gange i døgnet for ikke at filtre sammen. De ligger til spiring i 4-7 dage. Når de spirer, begynder kimen at producere enzymer.

    Kimen skal bruge energi i form af sukker for at spire, og enzymerne sendes derfor op til frøhviden for at omdanne stivelsen i frøhviden til sukker. Når enzymindholdet er på sit højeste, stoppes spiringen, da enzymerne er vigtige for den senere brygproces.`
  },

  {
    title: 'TØRRING OG RISTNING',
    description: `Efter 4-7 døgn i spirekasser stopper man spiringen ved at blæse varm luft op imellem kernerne. Den varme luft får vandet til at fordampe, og kernerne tørrer. I slutningen af tørringen kan man riste malten ved forskellige temperaturer.

   Tørrings- og ristningstemperaturen er afgørende for maltens særlige karakteristika og farve. 


    - Ristes malten ved en lav temperatur, fåes en lys malttype.

    - ristes den ved en meget høj temperatur, fåes en mørk malttype.

    Efter tørringen og ristningen fjernes spirerne fra kernerne. Den færdige malt er nu klar til at blive brugt til ølbrygning`
  },

  {
    title: 'MÆSKNING',
    description: `Malten knuses og der tilsættes varmt vand. Når den knuste malt blandes med vand, trænger enzymer og stivelse ud og opløses i vandet, hvorved mæskningen går i gang. 

   Mæskningen foregår i nogle timer ved ca. 65 °C. Opløsningen, der kaldes ”mæsken”, vil efterhånden begynde at ændre udseende.`
  },

  {
    title: 'URTESEPARERING',
    description: `Når mæskningen er færdig, skal mæsken (malt- og vandmassen) sies i et sikar. Efter siningen står man tilbage med to dele. 

    - En fast del, der kaldes masken, som bl.a. består af skallerne fra malten.

    - En flydende del, der kaldes urten. Det er urten, der skal bruges i den videre brygproces. 
 
    Masken indeholder cellulose og protein. Vi har en lokal landmand, der bruger det som foder til kvæg`
  },

  {
    title: 'URTEKOGNING',
    description: `Næste trin i brygprocessen er kogningen af urten. Urten koges sammen med humle i en urtkedel i ca. 1 time. 

   Under kogningen afgives humlebitterstoffer til urten. Hvis man vil give øllet ekstra aroma, kan man tilsætte aromahumle, når urten er næsten færdigkogt.
   
   Når urten er færdigkogt, skal den køles ned, men inden da skal de udfældede stoffer  kaldet ”trub”  frasepareres. Det sker ofte i en beholder kaldet en ”whirlpool”.
   
   
   Det er nødvendigt at afkøle urten, inden gæren tilsættes, da gæringen skal foregå under kølige temperaturforhold. Urten har efter kogningen ændret smagsindtryk, idet maltens sødme og humlens bitterhed har afbalanceret smagen.`
  },

  {
    title: 'GÆRING',
    description: `Når urten er nedkølet og overført til gæringstanke tilsættes ølgæren. I gæringstankene går gærcellerne i krig med maltsukkeret og omdanner det til alkohol og kuldioxid.

   Gæringen varer normalt 7-10 dage og foregår ved forskellige temperaturer afhængig af gærtypen. 

    *  Anvender man undergær, foregår gæringen typisk ved 10 – 16 °C. 

    * Anvender man overgær, er temperaturen lidt højere typisk mellem 18 – 25 °C.

    Når gæringen er færdig, bundfælder gæren, hvis der er anvendt en undergær. Gæren pumpes ud fra bunden af gæringstanken og opsamles.

    Øllet er nu blevet til en uklar væske, og smagen er på dette tidspunkt endnu noget ung, rå og ufærdig.
`
  },

  {
    title: 'LAGRING',
    description: `Efter 4-7 døgn i spirekasser stopper Den færdiggærede øl skal nu lagre i kolde omgivelser. Lagringstiden afhænger meget af gærtypen og øltypen. Den varer typisk fra en uges tid til flere måneder. 

    Lagringen foregå ofte ved en temperatur på mellem 0 – 2 °C. Når øllet køles tæt på øllets frysepunkt, sker der en udfældning af stoffer, som giver uklarheder i øllet.`
  },

  {
    title: 'TAPNING',
    description: `Efter lagringen tappes øllet på flaske eller fustage. Øllet der tappes på flaske bliver pasteuriseret.  

   Pasteurisering er en kortvarig opvarmning af øllet til en temperatur over 62 °C, hvorved man uskadeliggør eventuelle uønskede bakterier og forlænger holdbarheden.
   
   Nu er det tid til at nyde den færdige Løkken Bryghus øl!`
  },
]);


const currentStep = ref(0);

</script>

<template>
    <div class="timeline">
      <!-- Continuous Line -->
      <div class="line"></div>
      
      <!-- Timeline Items -->
      <div
        v-for="(step, index) in steps"
        :key="index"
        class="timeline-item"
      >
        <!-- Circle -->
        <div class="circle" :class="{ 'active': index === currentStep }">
          {{ index + 1 }}
        </div>
        
        <!-- Content -->
        <div class="content">
          <h3>{{ step.title }}</h3>
          <p v-for="(paragraph, pIndex) in step.description.split('\n\n')" :key="pIndex">
            {{ paragraph }}
          </p>
        </div>
      </div>
    </div>
  </template>

<style scoped>

.timeline {
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 1rem; 
  max-width: auto;
}

/* Timeline Item */
.timeline-item {
  display: flex;
  position: relative;
  margin-bottom: 2.5rem;
}

/* Circle */
.circle {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: #f4a261; 
  display: flex;
  align-items: center; /* For at centerer verticalt */
  justify-content: center; /* For at centerer horisontalt */
  font-size: 2rem;
  font-weight: bold;
  color: var(--light);
  position: relative;
  z-index: 1;
}

.line {
  position: absolute;
  width: 3px;
  height: calc(88% + 1.5rem); 
  background-color: #f4a261;
  left: 2.4rem; /* Center of circle */
  z-index: 0;
}

/* Step indhold */
.content {
  background-color: var(--primary); 
  color: var(--light); 
  padding: 2rem;
  margin-left: 1.5rem; 
  flex: 1;
  position: relative;
}


.content p {
  margin-bottom: 1rem; /* laver space mellem title og content på card. */
  line-height: 1.6; 
}

.content h3{
  padding-bottom: 1rem;
}



@media (min-width: 1000px) {
  .timeline {
    max-width: 1200px; 
    margin: 0 auto; 
    padding: 0; 
}

  /* Centerlinje for Desktop */
  .line {
    left: 50%; 
    transform: translateX(-50%);
    height: 89%;
  }

    /* flex-direction row til at sætte items horisontalt */
  .timeline-item {
    flex-direction: row; 
  }

  /* Circles */
  .circle {
    position: absolute;
    left: 50%; 
    transform: translateX(-50%);
  }

  /* Content for Odd Items (Left Side) */
  .timeline-item:nth-child(even) .content {
    margin-left: 0;
    margin-right: auto;
    max-width: 40%; /* Restrict content width */
  }

  /* Content for Even Items (Right Side) */
  .timeline-item:nth-child(odd) .content {
    margin-left: auto;
    margin-right: 0;
    max-width: 40%; /* Restrict content width */
    text-align: left; /* Align text to the left */
  }
}
</style>


