<script setup>

</script>

<template>
<main>
<section class="madSectionIntro">
  <div class="madOgSmagcontentContainer">
    <h1>SMAG OG MAD GUIDE</h1>
    <p>Når du skal vælge øl til din mad, er der nogle overordnede retningslinjer. Kraftig øl til kraftig mad og let øl til let mad. Det er vigtigt at være opmærksom på, om retten er fed. Så kræves der en øl, som kan give maden modsvar. Kraftig øl ‘neutraliserer’ fedmen ved at rense ganen. </p>
    <p>Øl er også meget velegnet selve tilberedning af maden; som krydderi, til at braisere, til marinering, som element i saucer og sammenkogte retter, til at levere bitterhed i flydende form og til mørning af kød.</p>
  </div>
</section>
    
    <section class="sectionWithImage">
        <article>
            <h2>UDSEENDE</h2>
            <p>Vi spiser og drikker med øjnene. Derfor giver øjnene os den første oplevelse af øllet. </p>
                <ul>
                    <li>Hold glasset op mod lyset og vurder dets farve, klarhed, skum og livlighed. </li>
                    <li>Er øllet strågult, ravgylden, nøddebrunt eller kaffesort?</li>
                    <li>Slyng øllet rundt i glasset, hvorved der frigives aroma, og man kan vurdere øllets skum. Giver øllet ”blonder” på glassets sider?</li>
                </ul>
        </article>
    
        <div class="tasteGuideImage">
            <img src="../assets/billeder/Oeludseende.png" alt="Bryggerstuen image" />
        </div>

        <article>
            <h2>AROMA</h2>
            <p>I første omgang opfanger vi øllets aroma via duften. Hold øllet op til næsen og snus med næsen.  Dufter det af humle og blomster, krydderier, nødder eller frugter og bær? Kan du dufte malt og alkohol?</p>
        </article>
    </section>
        
    
    <section class="sectionWithImage">
        <article>
            <h2>SMAG</h2>
            <p>Med tungen smages øllets sødme, syrlighed, bitterhed og andre smagsstoffer. Smagsoplevelsen er en kombination af duft, smag og mundoplevelse. Er eftersmagen lang eller kort, er den sød eller bitter?</p>
        </article>
    
        <div class="tasteGuideImage">
            <img src="../assets/billeder/OelSmag.png" alt="Bryggerstuen image" />
        </div>

        <article>
            <h2>FØLESANSEN</h2>
            <p>Man kan føle øllets livlighed i form af prikken fra den frigivne kuldioxid. I munden oplever man øllets fylde, og om det føles kølende eller varmende. Det er alkoholen i øllet, der bidrager med fylde og varme.</p>
            <p>Øllets temperatur er også afgørende for ølsmagningen. Er øllet for koldt, bedøves slimhinder og smagsløg i munden og øllet smager af ingenting.</p>
        </article>
    </section>
    
    
    <section class="sectionWithImage">
        <article>
            <h2>Høresansen</h2>
            <p>I første omgang opfanger vi øllets aroma via duften. Hold øllet op til næsen og snus med næsen.  Dufter det af humle og blomster, krydderier, nødder eller frugter og bær? Kan du dufte malt og alkohol?</p>
        </article>
    
        <div class="tasteGuideImage">
            <img src="../assets/billeder/OelFølesansen.png" alt="Bryggerstuen image" />
        </div>

        <article>
            <h2>SKÅL</h2>
            <p>Det er med øl som med kærlighed. Den er altid bedst, når du oplever den med andre. Øl er en social drik og derfor altid bedst i godt selskab og rare omgivelser.</p>
            <p>Ølsmagning er derfor ikke blot en smag af øl, men en sanseoplevelse…</p>
        </article>
    </section>
        
    
</main>

</template>

<style scoped>
/* Intro Section */

main{
  max-width: 1200px; 
  margin: 0 auto; 
  padding: 0 var(--spacing-large); 
}

.madSectionIntro {
  background-color: var(--primary); 
  color: var(--light); 
  width: 100vw; /* Gør sådan at den røde background går fullwidth */
  margin-left: calc(-50vw + 50%); /* Sikre at sektioner aligner indenfor viewport. */
  padding: 40px 0; 
}

.madOgSmagcontentContainer {
  max-width: 1200px; /* sikre at content bliver inden for denne width når den går i mobile */
  margin: 0 auto; /* Centrerer indhold */
  padding: 0 var(--spacing-large); 
}

.madOgSmagcontentContainer h1{
    padding-bottom: 1rem;
    padding-top: var(--spacing-small);
}

/* Section Styles */
.sectionWithImage{
  margin: 1rem;
  display: grid;
  grid-template-columns: 1fr; 
  gap: 1rem;
}

.tasteGuideImage img {
  height: auto;
  width: 100%;
}

/*------------ MEDIA QUERY START ---------------*/
@media (min-width: 1000px) {

  
  .sectionWithImage {
    grid-template-columns: 1fr 1fr; 
    gap: 1rem;
  }

  .tasteGuideImage img {
    justify-self: center;
    align-self: center;
  }
}


</style>