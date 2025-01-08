<script setup>
const snackMenuItems = [
  { name: "Chips", price: 20 },
  { name: "Flæskesvær", price: 25 },
  { name: "Snacktallerken pr. person", price: 25 },
];

const smorrebrodItems = [
  "Fiskefillet",
  "Æg og rejer",
  "Roastbeef",
  "Hamburgerryg",
  "Rullepølse",
  "Dyrelægens Natmad",
];
</script>

<template>
<main>

    <section class="bryggeStuenIntro">
        <article>
            <h1>BRYGGESTUEN</h1>
            <p>På Løkken Bryghus finder du altid et bredt sortiment af øl på hanerne.</p>
            <p>Vi brygger med respekt for håndværket, det betyder at der i hver eneste øl er lagt massere af kærlighed.</p>
            <p>Bryggerstuen er stedet, hvor vendelboer, sommerhusejere, feriegæster og andet godfolk mødes for at smage, vurdere og nyde de forskellige øltyper i hyggelige og afslappende omgivelser.</p>
            <p>Her præsenterer vi forskellige øl på hanerne. Øl der er nøje afstemt til den brede smag. Et bred sortiment af både smag, styrke og smag. Her er noget for en hver smag. </p>
            <p>Vi glæder os til at hygge om alle vores skønne gæster. Velkommen indenfor til en super øloplevelse</p>
        </article>
        
        <div class="bryggestuenImage">
          <img src="@/assets/billeder/Bryggestuen.png" alt="Bryggerstuen image" />
        </div>
    </section>

    <section class="snackMenu">
      <div class="content">
        <h2>SNACK MENU</h2>
        <p>I vores bryggerstue har man også muligheden for at tilkøbe snacks, som man kan nyde til den kolde øl</p>
        <ul>
           <li v-for="(item, index) in snackMenuItems" :key="index">
              {{ item.name }} kr. {{ item.price }}
            </li>
        </ul>
      </div>
    </section>

    <section class="MadUdvalg">
        <article>
            <h2>SMØRREBRØD</h2>
            <p>Hver fredag og lørdag serverer vi smørrebrød og en fadøl for 110 kr. Vi har en række af forskellige smørrebrød at vælge imellem.</p>
            <ul>
                <li v-for="(item, index) in smorrebrodItems" :key="index">{{ item }}</li>
            </ul>
            <p>Det kan kun købes ved forudbestilling. Bestilling skal ske senest inden kl. 22 dagen før ønsket servering. Send din bestilling på SMS til 22954741.</p>
        </article>
        
        <div class="bryggestuenImage">
          <img src="@/assets/billeder/Smørbrød.png" alt="Smørbrød" />
        </div>
    </section>

</main>
</template>

<style scoped>
.bryggeStuenIntro{
  padding: 0 var(--spacing-large);
  max-width: 1200px; 
  margin: 0 auto; 
}

.bryggeStuenIntro h1{
  padding: var(--spacing-small) 0; 
}

.bryggeStuenIntro p{
  padding-bottom: 1rem;
  word-wrap: break-word;
}

.bryggestuenImage{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
}

img {
  max-width: 80%; 
  height: auto; 
}

.MadUdvalg{
  padding: 0 var(--spacing-large);
  max-width: 1200px; 
  margin: 0 auto; 
}

.MadUdvalg h2{
  padding-top: 1rem;
}

/*------------ snackmenu ---------------*/
.snackMenu {
  background-color: var(--primary); 
  width: 100%; 
  padding: var(--spacing-small) 0; 
}

.snackMenu .content {
  margin: 0 auto; 
  padding: 0 var(--spacing-large); 
  color: var(--light);
}

.snackMenu p{
    margin-bottom: 1rem;
}

.snackMenu ul {
  list-style: none;
}
/*------------ snackmenu END ---------------*/

ul li {
  font-size: 1.2rem;
  padding-bottom: 1rem;
  padding-top: 1rem;
}


/*------------ MEDIA QUERY START ---------------*/

@media (min-width: 1000px) {
  main {
    flex-direction: column; 
  }

  section {
    display: flex;
    flex-direction: row;
  }

  article {
    flex: 1;
  }

  .bryggestuenImage{
    flex: 1;
    max-width: 50%; 
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    max-height: 80vh;
    max-width: 90%; 
  }
}

/*------------ MEDIA QUERY END ---------------*/

</style>